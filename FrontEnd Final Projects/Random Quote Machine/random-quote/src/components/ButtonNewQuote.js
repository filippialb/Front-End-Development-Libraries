import React, { useState } from "react";

function ButtonNewQuote() {
  // State to store the generated random number
  const [randomNumber, setRandomNumber] = useState(null);

  // Function to generate and set a random number
  const generateRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * 100); // Change the range as needed
    setRandomNumber(newRandomNumber);
  };

  return (
    <div>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
      {randomNumber !== null && (
        <p>Random Number: {randomNumber}</p>
      )}
    </div>
  );
}

export default ButtonNewQuote;
