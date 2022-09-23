import React, {useState, useEffect} from "react";
import { ethers } from "ethers";
import './App.css';

export default function App() {

  const [user, setUser] = useState('');
  const [message, setMessage] = useState('');

  const handleOnChange = (event) => {
    setMessage(event.target.value);
  }

  const wave = () => {
    event.preventDefault();
  }

  const connectWallet = async () => {
    try{
      const { ethereum } = window;
      if(!ethereum) {
        console.log("Get Metamask");
        return;
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts"
      });
      if(!accounts){
        console.log("Account has a problem");
      }
      window.location.reload();
      
    }catch(error){
      console.log(error);
    }
  }

  const logOutWallet = async () => {
    setUser("");
    // window.location.reload();
  }

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethererum } = window;
      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }
      const accounts = await ethereum.request({ method: "eth_accounts" });
      
      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setUser(account);
      } else {
        console.log("No authorized account found")
      }
      
    } catch (error) {
      console.log(error)
    }
  }

   const renderUser = () => {
      if (user) {
        return <div className="bio">Account: {user}</div>;
      }
      return;
    }

  const renderAuthButton = () => {
      if (user) {
        return <button className="btn btnLogOut" onClick={logOutWallet}>Log Out</button>;
      } else {
        return <button className="btn" onClick={connectWallet}>Connect Wallet</button>;
      }
    }
  
  
  useEffect(() => {
    checkIfWalletIsConnected();
  },[]);
  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        👋 Hey there!
        </div>

        <div className="bio">
        I am Hieu<br></br>
          Connect your wallet and wave me with your message below
        </div>

        <input style={{padding: 10, marginTop: 10}} placeholder="message..." onChange={handleOnChange} />

        <button className="btn btnWave" onClick={wave}>
          Wave at Me
        </button>
        
        {renderUser()}
       {renderAuthButton()}
        
        <h3>Log Tnx</h3>
      </div>
    </div>
  );
}
