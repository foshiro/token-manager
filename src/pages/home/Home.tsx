import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'decentraland-ui'
import detectEthereumProvider from "@metamask/detect-provider";

function Home() {
  const history = useHistory();

  async function connectWallet() {
    const provider = await detectEthereumProvider();
    if (provider) {
      startApp(provider);
    } else {
      alert('Please install MetaMask!');
    }
  };

  function startApp(provider: any) {
    debugger
    provider.on('accountsChanged', handleAccountsChanged);

    provider.request({
      method: 'eth_requestAccounts'
    });

  };

  function handleAccountsChanged(accounts: []) {
    if (accounts.length === 0) {
      alert('Please connect your MetaMask wallet');
    } else {
      history.push("/balance");
    }
  };

  return (
    <Button primary
      onClick={connectWallet}>CONNECT</Button>
  )
}

export default Home;
