// import { useEffect,useState } from "react";
// import "./styles/yourdocs.css";
// import Modal from "./Modal";
// import your from '../images/your.png';
//  //import your1 from '../images/your1.png';
// const  YourDocs= ({ contract, account }) => {
// //  const { contract, account }=useParams();
// console.log("Account:", account);
// //console.log("Provider:", provider);

// console.log("Contract:", contract);
//   const [data, setData] = useState("");
//   const[modalOpen,setModalOpen]=useState(false);
//   const getdata = async () => {
//     let dataArray;
//     const Otheraddress = document.querySelector(".address").value;
//     try {
//       if (Otheraddress) {
//         dataArray = await contract.display(Otheraddress);
//         console.log(dataArray);
//       } else {
//         dataArray = await contract.display(account);
//       }
//     } catch (e) {
//       alert("You don't have access");
//     }
//     const isEmpty = Object.keys(dataArray).length === 0;

//     if (!isEmpty) {
//       const str = dataArray.toString();
//       const str_array = str.split(",");
//       // console.log(str);
//       // console.log(str_array);
//       const images = str_array.map((item, i) => {
//         return (
//           <a href={item} key={i} target="_blank">
//             <img
//               key={i}
//               src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`}
//               alt="new"
//               className="image-list"
//             ></img>
//           </a>
//         );
//       });
//       setData(images);
//     } else {
//       alert("No image to display");
//     }
//   };
//     //   const sharing = async () => {
//     //   const address = document.querySelector(".address").value;
//     //   await contract.allow(address);
//     //   setModalOpen(false);
//     // };
//     // useEffect(() => {
//     //   const accessList = async () => {
//     //     const addressList = await contract.shareAccess();
//     //     let select = document.querySelector("#selectNumber");
//     //     const options = addressList;
  
//     //     for (let i = 0; i < options.length; i++) {
//     //       let opt = options[i];
//     //       let e1 = document.createElement("option");
//     //       e1.textContent = opt;
//     //       e1.value = opt;
//     //       select.appendChild(e1);
//     //     }
//     //   };
//     //   contract && accessList();
//     // }, [contract]);

//   return (
//     <>
//     <div className="container">
//     {!modalOpen && (
//           <button className="share" onClick={() => setModalOpen(true)}>
//             Share
//           </button>
//         )}
//     <div className="App">
//     <h1 style={{ color: "white" }}>DOcs 3.0</h1>
          
//       <div className="image-list">{data}</div>
     
//       <input
//         type="text"
//         placeholder="Enter Address"
//         className="address"
//       ></input>
//       <button className="center button" onClick={getdata }>
//         Get Data
        
//       </button>
//       </div>
       
//          {modalOpen && (
//           // <div className="modalContainer">
//           //   <div className="title">Share with</div>
//           //   <div className="body">
//           //     <input
//           //       type="text"
//           //       className="address"
//           //       placeholder="Enter Address"
//           //     ></input>
//           //   </div>
//           //   <form id="myForm">
//           //     <select id="selectNumber">
//           //       <option className="address">People With Access</option>
//           //     </select>
//           //   </form>
//           //   <div className="foot">
//           //     <button className="clicke"
//           //       onClick={() => {
//           //         setModalOpen(false);
//           //       }}
//           //        id="cancelBtn"
//           //     >
//           //       Cancel
//           //     </button>
//           //     <button className="clk" onClick={() => sharing()}>Share</button>
//           //   </div>
//           // </div>
//           <Modal setModalOpen={setModalOpen} contract={contract}></Modal>
//         )}
//       <div className="im">
//         <div className="slide">
//            <img src={your} alt="Blockchain 1" />
//            <p className="blockchain-description">
//            Blockchain technology has emerged as a transformative force with global implications. It operates as a decentralized and secure distributed ledger, best known for underpinning cryptocurrencies like Bitcoin. However, its impact goes beyond digital currencies. Across various sectors, blockchain has the potential to revolutionize existing practices. In finance, it can facilitate faster and transparent cross-border transactions, reducing costs and settlement times. Supply chain management stands to benefit from increased transparency, combatting fraud and ensuring ethical sourcing. Moreover, it could enhance voting systems, healthcare data sharing, and identity management, while also protecting intellectual property rights. The charitable sector can benefit from greater transparency in aid distribution, and energy grids can be efficiently managed with blockchain technology. Despite its potential, challenges such as scalability, energy consumption, and regulatory considerations must be addressed for blockchain to fully realize its global promise.</p>
//          </div>
        
//         {/* <div className="slide">
// //           <img src={your1} alt="Blockchain 1" />
// //         </div> */}
//          </div>
//  </div>
     
//     </>
//   );
// };
// export default YourDocs;
import {useState } from "react";
import "./styles/yourdocs.css";
import Modal from "./Modal";
import your from '../images/your.png';
 //import your1 from '../images/your1.png';
const  YourDocs= ({ contract, account }) => {
//  const { contract, account }=useParams();
console.log("Account:", account);
//console.log("Provider:", provider);

console.log("Contract:", contract);
  const [data, setData] = useState("");
  const[modalOpen,setModalOpen]=useState(false);
  const getdata = async () => {
    let dataArray;
    const Otheraddress = document.querySelector(".address").value;
    try {
      if (Otheraddress) {
        dataArray = await contract.display(Otheraddress);
        console.log(dataArray);
      } else {
        dataArray = await contract.display(account);
      }
    } catch (e) {
      alert("You don't have access");
    }
    const isEmpty = Object.keys(dataArray).length === 0;

    if (!isEmpty) {
      const str = dataArray.toString();
      const str_array = str.split(",");
      // console.log(str);
      // console.log(str_array);
      const images = str_array.map((item, i) => {
        return (
          <a href={item} key={i} target="_blank">
            <img
              key={i}
              src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`}
              alt="new"
              className="image-list"
            ></img>
          </a>
        );
      });
      setData(images);
    } else {
      alert("No image to display");
    }
  };
   

  return (
    <>
    <div className="container">
    {!modalOpen && (
          <button className="share" onClick={() => setModalOpen(true)}>
            Share
          </button>
        )}
         {modalOpen && (
          <Modal setModalOpen={setModalOpen} contract={contract}></Modal>
        )}
    <div className="App">
    <h1 style={{ color: "white" }}>DOcs 3.0</h1>
          
      <div className="image-list">{data}</div>
     
      <input
        type="text"
        placeholder="Enter Address"
        className="address"
      ></input>
      <button className="center button" onClick={getdata }>
        Get Data
        
      </button>
      </div>
       
        
      <div className="im">
        <div className="slide">
           <img src={your} alt="Blockchain 1" />
           <p className="blockchain-description">
           Blockchain technology has emerged as a transformative force with global implications. It operates as a decentralized and secure distributed ledger, best known for underpinning cryptocurrencies like Bitcoin. However, its impact goes beyond digital currencies. Across various sectors, blockchain has the potential to revolutionize existing practices. In finance, it can facilitate faster and transparent cross-border transactions, reducing costs and settlement times. Supply chain management stands to benefit from increased transparency, combatting fraud and ensuring ethical sourcing. Moreover, it could enhance voting systems, healthcare data sharing, and identity management, while also protecting intellectual property rights. The charitable sector can benefit from greater transparency in aid distribution, and energy grids can be efficiently managed with blockchain technology. Despite its potential, challenges such as scalability, energy consumption, and regulatory considerations must be addressed for blockchain to fully realize its global promise.</p>
         </div>
        
       
         </div>
 </div>
     
    </>
  );
};
export default YourDocs;