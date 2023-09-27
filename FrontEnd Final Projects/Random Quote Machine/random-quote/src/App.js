import './App.css';
import ButtonNewQuote from './components/ButtonNewQuote';
//import React from 'react';

import React, { Component } from "react";

class ButtonNewQuoteClass extends Component {
  state = {
    quotes: [
      ["Life isn’t about getting and having, it’s about giving and being.", "Kevin Kruse"],
      ["Whatever the mind of man can conceive and believe, it can achieve.", "Napoleon Hill"],
      ["Strive not to be a success, but rather to be of value.", "Albert Einstein"],
      ["Two roads diverged in a wood, and I—I took the one less traveled by.", "Robert Frost"],
    ],
    randomNumber: null,
  };

  generateRandomNumber = () => {
    const { quotes } = this.state;
    const newRandomNumber = quotes[Math.floor(Math.random() * quotes.length)];
    this.setState({ randomNumber: newRandomNumber });


   document.getElementById("body").style.backgroundColor = 'rgba('
        + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) 
        + ',' + Math.floor(Math.random() * 255) + '\)'   
  };

  

  componentDidMount() {
    this.generateRandomNumber();
  }

  render() {
    const { randomNumber } = this.state;

    return (
      <div>
        {randomNumber !== null && (
          <div>
            <p>Random Quote:</p>
            <p>{randomNumber[0]}</p>
            <p>- {randomNumber[1]}</p>
          </div>
        )}
        <button onClick={this.generateRandomNumber} class="button">New Quote</button>
      </div>
    );
  }
}

export default ButtonNewQuoteClass;


//export default App;
 







