import React, { useState } from "react";


const quotes = [

["Life isn’t about getting and having, it’s about giving and being.","Kevin Kruse"],
["Whatever the mind of man can conceive and believe, it can achieve.","Napoleon Hill"],
["Strive not to be a success, but rather to be of value.","Albert Einstein"],
["Two roads diverged in a wood, and I—I took the one less traveled by.","Robert Frost"],
]














function ButtonNewQuote() {
  // State to store the generated random number
  const [randomNumber, setRandomNumber] = useState(null);

  // Function to generate and set a random number
  const generateRandomNumber = () => {
    var newRandomNumber = quotes[Math.floor(Math.random() * quotes.length)]; // Change the range as needed
    setRandomNumber(newRandomNumber);

    
  };



//--






  return (
    <div>
      
      {randomNumber !== null && (
        <p>Random Number: {randomNumber}</p>
      )}
      <button onClick={generateRandomNumber}>New Quote</button>
    </div>
  );
}

export default ButtonNewQuote;
