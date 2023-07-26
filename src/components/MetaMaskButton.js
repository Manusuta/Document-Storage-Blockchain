import React from 'react';

const MetaMaskButton = ({ connectMetamask, disconnectMetamask, connected }) => {
  const handleClick = () => {
    if (connected) {
      disconnectMetamask();
    } else {
      connectMetamask();
    }
  };

  return (
    <button className="metamask-button" onClick={handleClick}>
      {connected ? 'Connected (Click to Disconnect)' : 'Connect to Metamask'}
    </button>
  );
};

export default MetaMaskButton;