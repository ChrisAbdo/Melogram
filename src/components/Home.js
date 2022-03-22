import React, { useState } from 'react'
import { ethers } from 'ethers';

function Home() {

  const [walletAddress, setWalletAddress] = useState('')

  async function requestAccount() {
    console.log('requesting...');
    // check if metamask extension exists...
    if (window.ethereum) {
      console.log('metamask extension exists');

      try{
        // request account access
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts'
        });
        setWalletAddress(accounts[0])
      } catch (error) {
        console.log('error connecting...');
      }
    } else {
      console.log('no metamask extension');
    }
  }

  

  async function connectWallet() {
    if(typeof window.ethereum !== 'undefined') {
      await requestAccount();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
    }
  }

  return (
    <div>
      <h1>Home1</h1>
      <button
        id='btn-01'
        onClick={requestAccount}
      >connect wallet</button>
      
    </div>
  )
}

export default Home