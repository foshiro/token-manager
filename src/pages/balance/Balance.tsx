import React, { useEffect } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import { ethers } from "ethers";
import { useDispatch, useSelector } from "react-redux";
import { getBalance, selectBalance } from "../../app/etherSlice";
import { Field } from "decentraland-ui";

function Balance() {
  let inputTransfer: any;
  let publicBalance = useSelector(selectBalance);
  const dispatch = useDispatch()

  useEffect(() => {
    const init = async () => {
      const provider = await detectEthereumProvider();
      if (provider) {
        startApp(provider);
      } else {
        alert('Please install MetaMask!');
        return;
      };

      async function startApp(ethereumProvider: any) {
        let provider = await new ethers.providers.Web3Provider(ethereumProvider);
        dispatch(getBalance(provider));
      };
    };
    init();
  }, []);

  function changeTransferAmount(event: any, data: any) {
    inputTransfer = data.value;
  }

  function transfer(event: any) {
    //TODO: Transfer token
    console.log({inputTransfer})
  }

  return (
    <div>
      <h1>
        Overview
      </h1>
      <div>
        Balance: {publicBalance}
      </div>
      <div className="d-flex justify-content-center p-5">
        <Field label="Transfer" placeholder="1,000" type="number"
          action="Transfer" onAction={transfer}
          onChange={changeTransferAmount}/>
      </div>
    </div>
  )
}

export default Balance;
