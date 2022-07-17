import React, {useState, useEffect} from "react";

import Hangman from "./Components/Hangman";
import Alphabet from "./Components/Alphabet";
import Word from "./Components/Word";

const App = () => {
  const [word, setWord] = useState();

  const getWord = () => {
    fetch("https://random-word-api.herokuapp.com/word", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        setWord(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {});

  return (
    <div className="Hangman">
      <header className="Header">
        <h1>Hangman</h1>
      </header>
      <button onClick={() => getWord()} className="Start">
        <span>Start</span>
      </button>
      <div className="Body">
        <div id="Alphabet" className="Hangman-Alphabet">
          <Alphabet />
        </div>
        <div id="Hangman-Image" className="Hangman-Image">
          <Hangman />
        </div>
        <div id="Hangman-Word" className="Hangman-Word">
          {word && <Word word={word} />}
        </div>
      </div>
      <footer className="Footer"></footer>
    </div>
  );
};

export default App;
