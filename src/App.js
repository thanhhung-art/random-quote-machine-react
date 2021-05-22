
import './App.css';
import { useState, useEffect } from "react";

function App() {

  const [ quote, setQuote] = useState("");
  const [ author, setAuthor ] = useState("");

  var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

  let quoteText = document.getElementById("quote-text");
  let quoteAuthor = document.getElementById("quote-author");

  useEffect(() => {
    getNewQuote();
  },[]);

  const getNewQuote = () => {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then(res => res.json())
    .then(result => {
      let random = Math.round(Math.random() * result.quotes.length - 1);
      setQuote(result.quotes[random].quote);
      setAuthor(result.quotes[random].author);
    });

    //set style elements
    let randomColor = Math.round(Math.random() * colors.length);
    document.body.style.color = colors[randomColor];
    document.body.style.backgroundColor = colors[randomColor];
    document.querySelector(".button").style.backgroundColor = colors[randomColor];
    document.querySelector("button").style.backgroundColor = colors[randomColor];
    document.getElementById("tweet-quote").href = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
      encodeURIComponent('"' + quote + '" ' + author);
  }

  const opacityEffect = () => {
    
    function wait () {

    }
  }

  return (
    <div className="App">
      <div id="quote-box">
        <div id="quote-text">
          <i className="fa fa-quote-left"></i>
          <p id="text">{quote}</p>
        </div>
        <div id="quote-author">
          <span>- {author}</span>
        </div>
        <div id="links">
          <a href="#" id="tweet-quote" className="button" title="tweet this quote" >
             <i className="fab fa-twitter"></i>
          </a>
          <button className="button" id="new-quote" onClick={getNewQuote} >New quote</button> 
        </div>
      </div>
    </div>
  );
}

export default App;
