import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    setQuote(data.content);
    setAuthor(data.author);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const tweetQuote = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(tweetUrl, "_blank");
  };

  return (
    <div id="quote-box">
      <div id="text">{quote}</div>
      <div id="author">- {author}</div>
      <button id="new-quote" onClick={fetchQuote}>
        New Quote
      </button>
      <a id="tweet-quote" href="#" onClick={tweetQuote}>
        Tweet Quote
        <img
          id="twitter-logo"
          src="https://static.vecteezy.com/system/resources/previews/018/930/745/non_2x/twitter-logo-twitter-icon-transparent-free-free-png.png"
          alt="icono twitter"
        ></img>
      </a>
    </div>
  );
}

export default App;
