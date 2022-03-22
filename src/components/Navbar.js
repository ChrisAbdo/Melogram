import React, {useState} from 'react'
import { ethers } from 'ethers'
import './Navbar.css'
import Web3 from 'web3';



function Navbar () {
  const [walletAddress, setWalletAddress] = useState('')

  async function requestAccount() {
    console.log('requesting...');
    // check if metamask extension exists...
    if (window.ethereum) {
      console.log('metamask extension exists');

      try{
        // request account access
        const web3 = window.web3
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

  async function removeButton() {
    var el = document.getElementById('btn-01');
    el.remove();
  }

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/main">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
  
  <button id='btn-01' onClick={function() { connectWallet(); removeButton(); }}>connect wallet</button>
      <h1 className='walletAddress display-4'>{walletAddress}</h1>
  
</nav>
    </div>
  )
}

export default Navbar