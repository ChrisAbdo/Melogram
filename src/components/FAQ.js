import React from 'react';
import './FAQRoute.css';


function FAQ() {
  return (
    <div>
     <div className="NFT">
        <div class="tabs">
        <h1 class="title1">FAQ</h1>
        <div class="tab border-bottom">
          <input className="input1" type="radio" id="rd1" name="rd"/>
          <label class="tab-label" for="rd1">What is Melomania?</label>
          <div class="tab-content">
            Melomania is a decentralized music platform. Originally made for independent artists, Melomania is a great way to get your music out to the world and receive tips for your amazing work.
          </div>
        </div>
        <div class="tab border-bottom">
          <input className="input1" type="radio" id="rd2" name="rd"/>
          <label class="tab-label" for="rd2">How does it work?</label>
          <div class="tab-content">
            Once loading onto Melomania, your MetaMask wallet will connect to the Ethereum Mainnet. You can upload your music to the blockchain and share it with the world only paying the gas fee.
          </div>
        </div>
        <div class="tab border-bottom">
          <input className="input1" type="radio" id="rd3" name="rd"/>
          <label class="tab-label" for="rd3">Do I have to confirm any transactions twice?</label>
          <div class="tab-content">
            No, once you upload your track and pay the gas fee through MetaMask, your transaction will be confirmed.
          </div>
        </div>
        <div class="tab border-bottom">
          <input className="input1" type="radio" id="rd4" name="rd"/>
          <label class="tab-label" for="rd4">Can I pay with a credit card?</label>
          <div class="tab-content">
            No, as of now we are only accepting ETH payments through the MetaMask wallet.
          </div>
        </div>
        <div class="tab border-bottom">
          <input className="input1" type="radio" id="rd5" name="rd"/>
          <label class="tab-label" for="rd5">How do I tip someone?</label>
          <div class="tab-content">
            On the marketplace, hovering over posts will reveal more information as well as the ability to tip that post. The tipping process is exactly the same as posting. MetaMask will open with a set transaction which you will confirm once you are sure the information is correct.
          </div>
        </div>
        <div class="tab border-bottom">
          <input className="input1" type="radio" id="rd6" name="rd"/>
          <label class="tab-label" for="rd6">Why can I only tip 0.01 ETH?</label>
          <div class="tab-content">
            As of now we are only accepting 0.01 ETH tips, but we are working on accepting a custom tip amount.
          </div>
        </div>
        <div class="tab border-bottom">
          <input className="input1" type="radio" id="rd7" name="rd"/>
          <label class="tab-label" for="rd7">Can I display the tips for every post?</label>
          <div class="tab-content">
            At Melomania, we do not want songs driven by numbers. We only show tips if you view a post because we want everything viewed, not just the popular items.
          </div>
        </div>
        
      </div>
    </div>
  </div>
  );
}

export default FAQ;
