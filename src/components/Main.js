import React, { Component, useState } from 'react';
import './Main.css';
import Identicon from 'identicon.js';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Home from './Home'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import 'bootstrap/dist/css/bootstrap.css';
import { Modal } from '@mui/material';







class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
        modal: false
    };
    this.toggle = this.toggle.bind(this);
};

toggle() {
    this.setState({modal: !this.state.modal});
}
render() {
    return (
        
          <div class="grid-container">
            
            <div className="uploadHeader">
            <h5 className="shareText"><b>Share Video</b></h5>
         
            <form onSubmit={(event) => {
              event.preventDefault()
                const description = this.imageDescription.value
                this.props.uploadImage(description)
            }} >

              <div class="custom-file">
                <input type="file" accept=".mp4, .wav, .mp3" className="custom-file-input" id="inputGroupFile02" onChange={this.props.captureFile}/>
                <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">
                  Choose file
                </label>
              </div>
                <div className="form-group">
                
                  <input
                        id="imageDescription"
                        type="text"
                        ref={(input) => { this.imageDescription = input }}
                        className="form-control1"
                        placeholder="Image description..."
                        required />
                </div>
              <button 
              type="submit" className="buttonUpload btn btn-secondary text-center">Upload!</button>
            </form>
        
            <small className="navAccount">
              <small id="account">
              { this.props.account
              ? <img
                className='navIcon'
                width='30'
                height='30'
                src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
                alt=""
              />
              : <span></span>
            }
              </small>
            </small>
            
            </div>

            
            { this.props.images.map((image, key) => {
              
              return(
                <div>
                
                <div class="container " key={key}>
                
                  <div class="card">
                    <div class="imgBx">
                      <h1 className="topAuthor">Uploaded by: {image.author
                        // slice first 5 and last 4 of account name
                        .slice(0, 5) + '...' + image.author.slice(-4)}</h1>
                        <MoreHorizIcon className="moreIcon text-primary"/>
                      
                    <video
                        className="video border-secondary border-bottom"
                        src={`https://ipfs.infura.io/ipfs/${image.hash}`}
                        style={{ width: '100%', height: '120%', top: '0rem' }}
                        onClick={() => {
                          window.open(`https://ipfs.infura.io/ipfs/${image.hash}`, '_blank')
                      }} 
                      />
                    </div>
                    <div class="contentBx">
                      <h2 className="videotitles">{image.title}</h2>
                      <div className="iconAuthorRow">
                        <small class=" authorText float-left mt-3" style={{ color: 'white' }}>
                          <small
                          onClick={() => {
                            window.open("https://etherscan.io/address/" + image.author) 
                          }}
                          id="author">{image.description.slice(0, 42)}</small>
                          <br/>
                          
                        </small>
                      </div>
                        { this.props.account
                          ? <img
                            className='authorIcon ml-2'
                            width='30'
                            height='30'
                            src={`data:image/png;base64,${new Identicon(image.author, 30).toString()}`}
                            alt=""
                          />
                          : <span></span>
                        }
                      <div class="size">
                      <small className="timeUploaded">
                          </small>
                        <small className=" tipText float-left mt-3 text-primary" style={{ color: 'white' }}>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <b>TIPS: {window.web3.utils.fromWei(image.tipAmount.toString(), 'Ether')} ETH</b>
                        </small>
                        <button
                          className="tipButton btn btn-sm btn-primary"
                          name={image.id}
                          type="button"
                          onClick={(event) => {
                            let tipAmount = window.web3.utils.toWei('0.1', 'Ether')
                            console.log(event.target.name, tipAmount)
                            this.props.tipImageOwner(event.target.name, tipAmount)
                          }}
                          >
                          TIP 0.1 ETH
                          </button>
                         

                          
                        <br/>
                        <br/>
                        <br/>
                      </div>
                    </div>
                  </div>
                </div>
                </div>

              )
            })}
          </div>
          
    );
  }
}

export default Main;
