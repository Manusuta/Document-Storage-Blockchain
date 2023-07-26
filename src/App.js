import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
//import { BrowserRouter , Routes,Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './components/Home';
//import About from "./components/about";
import Services from "./components/services"
import FileUpload from"./components/FileUpload";
// import Display from"./components/display";
import Lock from"./artifacts/contracts/lock.sol/Lock.json";
import { useState,useEffect } from 'react';
import {ethers} from "ethers";
import YourDocs from "./components/YourDocs";
// import Footer from "./components/Footer.js"
import Footer from"./components/Footer";
//import Modal from './components/modal';
function App() {
 const [account,setAccount]=useState(" ");
  const[contract,setContract]=useState(null);
  const[provider,setProvider]=useState(null);
  // const[modalOpen,setModalOpen]=useState(false);
   const [isMetamaskConnected, setIsMetamaskConnected] = useState(false);
 
  const connectMetamask = async () => {
    try {
      if (window.ethereum) {
        // if (typeof window.ethereum !== 'undefined') {

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        window.ethereum.on('chainChanged', () => {
          window.location.reload();
        });
        window.ethereum.on('accountChanged', () => {
          window.location.reload();
        });
        await provider.send('eth_requestAccounts', []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        let contractaddress = '0xAa89f7527fC2C94433c5f6Dd03550e67bFc59Ac0';
        const contract = new ethers.Contract(contractaddress, Lock.abi, signer);
        // console.log(contract);
        setContract(contract);
        setProvider(provider);
      } else {
        console.error('Metamask not installed.');
      }
    } catch (error) {
      console.error('Error connecting to Metamask:', error);
    }
    setIsMetamaskConnected(true);
  };
  useEffect(() => {
    
  }, [provider]);
  // Function to handle disconnecting from Metamask
  const disconnectMetamask = async () => {
    try {
      
        setAccount('');
        setContract(null);
        setProvider(null);
     
    } catch (error) {
      console.error('Error disconnecting from Metamask:', error);
    }
    setIsMetamaskConnected(false);
  };

  useEffect(() => {
    
  }, [provider]);
  useEffect(() => {
    setAccount('');
  }, []);
  
  
  return (
    <>
  
  
    
     <Router>
     <Navbar connectMetamask={connectMetamask} disconnectMetamask={disconnectMetamask} connected={account !== ''} account={account} provider={provider} contract={contract}/>
  
     {/* <Navbar/> */}
     
 
      <Routes>
        <Route  path="/" element={<Home/>} />
        
        <Route   path="/services" element={<Services/>} /> 
       
        {isMetamaskConnected &&  <Route path="/FileUpload/:account/:provider/:contract" element={<FileUpload  account={account} contract={contract} />} /> 
}
{isMetamaskConnected &&  <Route   path="/yourdocs/:contract/:account" element={<YourDocs contract={contract} account={account}/>} /> }
         </Routes>
       
    <Footer/>
   </Router>



    </>
   
  );
}

export default App;
