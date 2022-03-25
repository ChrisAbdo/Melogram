import React, { Component } from 'react'
import Web3 from 'web3';
import Decentragram from '../abis/Decentragram.json'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import './HomeTest.css'


function HomeTest() {
    async function loadBlockchainData() {

        const web3 = web3
        // Load account
        const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts'
          });
          this.setState({ account: accounts[0] })
      }
      async function reloadPage(){
        alert('Please refresh after connecting!')
      }
  return (
    <div>
        
        <div className="homeLayout">
      
        <div className="home-content">
          <div class="jumbotron">
            <h1 class="display-4">melomania</h1>
              <p class="titleDescription">A decentralized marketplace for music</p>
                <button 
                  class="buttonSignIn btn btn-primary btn-lg"
                  onClick={() => { loadBlockchainData(); reloadPage();}}
                  >Sign In With MetaMask</button>
                  <a href="/home">
                  <button 
                    className="buttonTwo btn btn-lg btn-primary"
                  >
                    
                    Market
                  </button>
                  </a>
                {/*<button type="button" class="walletButton btn btn-secondary btn-lg">Marketplace</button>*/}
                <ArrowDownwardIcon className="arrow-down" 
              // on click scroll to lead.
              onClick={() => {
                window.scrollTo({
                  top: document.querySelector('.lead').offsetTop,
                  behavior: 'smooth'
                });
              }}
              />
              
            </div>
              <div>
                <a href="#lead" />
                  <h1 class="lead">Melomania is a decentralized music platform for artists to share music.</h1>
                  
                  {/* make 2 columns and place under lead tag.*/}
                  
                  <div class="row border rounded">
                    <div class="col-sm-4 border-right">
                      <h2>Share your music</h2>
                      <p>Upload your music to the blockchain and share it with the world.</p>
                    </div>
                  
                    <div class="col-sm-4 border-right">
                      <h2>Tip Artist Posts</h2>
                      <p>Tip a set amount of 0.01 ETH to support artists!. The highest tipped at the end of the week receives a Melomania NFT!</p>
                    </div>
                    <div class="col-sm-4">
                      <h2>Explore new music</h2>
                      <p>Find new artists / genres by surfing through posts!</p>
                    </div>
                    </div>
                    <div class='techUsed'>
                      <h2 className="techTitle">Technologies Used</h2>
                      <p class="reactImage">
                        <img className="reactLogo"/>
                      </p>
                      <a class='techUsedText' href='https://trufflesuite.com' target='_blank'>
                        Truffle
                      </a>
                      <a class='techUsedText1' href='https://trufflesuite.com/ganache/' target='_blank'>
                        Ganache
                      </a>
                      <a class='techUsedText2' href='https://reactjs.org' target='_blank'>
                        React
                      </a>
                      <a class='techUsedText3' href='https://docs.metamask.io/guide/' target='_blank'>
                        MetaMask
                      </a>
                    </div>
                  <div className='howitworks'>
                  <ArrowDownwardIcon className="arrow-down1" 
                      // on click scroll to lead.
                      onClick={() => {
                        window.scrollTo({
                          top: document.querySelector('.howitworks').offsetTop,
                          behavior: 'smooth'
                        });
                      }}
                      />
                      <br/>
                      <br/>
                      <h2>How it works</h2>
                      <br/>
                        <div className='howitworks-content'>
                          <ol>
                            <li className="title1">Head over to the  and make sure your MetaMask is connected to the correct account. </li>
                            <li>Upload your file. We currently accept .WAV, .MP4, and .MP3</li>
                            <li>Give your post a title. We recommend your name and the title of the track.</li>
                            <li>Hit the upload button and confirm the MetaMask transaction (sorry for the gas fees! We are working to make this a gasless transaction.)</li>
                            <li>Once you confirm the payment, your post will be uploaded and you will see it on the home page.</li>
                            <li>The posts are currently ordered in highest tipped first. At the end of every week, we take the highest tipped artist and reward them with an Artist of the Week NFT!</li>
                            <li>Tip amounts are set at 0.01 ETH. We will be implementing a custom tip amount feature soon!</li>
                          </ol>
                          <br/> 
                          <h2 className='creator'>This platform was created by Christopher Abdo</h2>
                          <br/>
                          <a href="https://www.github.com/ChrisAbdo" target="_blank"></a>
                        </div>
                  </div>

              </div>
          </div>

              
              

        </div>
    </div>
  )
    
}

export default HomeTest