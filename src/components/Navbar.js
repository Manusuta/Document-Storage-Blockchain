import React from 'react';
import "./styles/navbar.css"
import { NavLink } from 'react-router-dom';

import MetamaskButton from './MetaMaskButton';
const Navbar = ({ connectMetamask,disconnectMetamask, connected,account,provider,contract }) => {
 
  
  const truncatedAddress = account ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}` : '';

  return (
    <nav className="navbar">
      <NavLink  to="/" className="navbar-brand">
      DOCS
      </NavLink>
      <ul className="navbar-links">
      <li>
          <NavLink  to="/">
            HOME
          </NavLink>
        </li>
{/*        
        <li>
        <NavLink to={`/FileUpload/${account}/${provider}/${contract}`}>
    UPLOADS
  </NavLink>
        </li> */}
         <li>
          {connected ? (
            <NavLink to={`/FileUpload/${account}/${provider}/${contract}`}>UPLOADS</NavLink>
          ) : (
            <span className="disabled">UPLOADS</span>
          )}
        </li>
        <li>
          {connected ? (
            <NavLink to={`/yourdocs/${contract}/${account}`}>YOURDOCS</NavLink>
          ) : (
            <span className="disabled">YOURDOCS</span>
          )}
        </li>
        
        {/* <li>
        <NavLink to={`/yourdocs/${contract}/${account}`}>
            YOURDOCS
          </NavLink>
        </li> */}
       
        <li>
          <NavLink  to="/services" >
            SERVICES
          </NavLink>
        </li>
        
        
        <div className="account-info">
        {connected && <p>{truncatedAddress}</p>}
        <MetamaskButton connectMetamask={connectMetamask} disconnectMetamask={disconnectMetamask} connected={connected}  />
      </div>
      </ul>
      
    </nav>
  );
};

export default Navbar;
