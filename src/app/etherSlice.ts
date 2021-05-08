import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { ethers } from "ethers";

export interface CounterState {
  balance: string;
}

const initialState: CounterState = {
  balance: '',
};

export const getBalance = createAsyncThunk(
  'ether/getBalance',
  async (provider: ethers.providers.Web3Provider) => {
    const account = await provider.listAccounts();
    const currentAccount = account.pop();

    let balance = await provider.getBalance(currentAccount as string);
    return ethers.utils.formatEther(balance);
  }
);

export const etherSlice = createSlice({
  name: 'ether',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBalance.fulfilled, (state, action) => {
        state.balance = action.payload;
      })
  },
});

export const selectBalance = (state: RootState) => state.ether.balance;

export default etherSlice.reducer;
