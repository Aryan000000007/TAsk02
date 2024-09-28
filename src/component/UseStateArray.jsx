import { useState } from "react";

const UseStateArray = () => {
  const yourData = [
    {
      myName: "Motorola",
      Price: " ₹ 21,000",
  
    },
    {
      myName: "OnePlus",
      Price: " ₹ 28,000",
      
    },
  ];

  const [state] = useState(yourData);
  const [showItems, setShowItems] = useState(false); 
  

  const toggleShow = () => {
    setShowItems(!showItems);
  };

  return (
    <>
      <h2>By Using useState in Array (Map Function)</h2>

      {showItems && state.map((currElm) => (
        <h3 key={currElm.id}>
          Name: {currElm.myName} & Price: {currElm.Price}
        </h3>
      ))}

   <button onClick={toggleShow}>{showItems ? "Hide" : "Show"}</button>
    </>
  );
};

export default UseStateArray;
