import React, {useState} from "react";

export const Alphabet = () => {
  const [alphabet, setAlphabet] = useState([
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ]);

  const [select, setSelect] = useState();
  // creates entity

  return (
    <div className="Alphabet">
      {alphabet.map((letter, index) => (
        <button
          key={index}
          onClick={() => {
            setSelect(letter);
            console.log(letter);
          }}
        >
          <span>{letter}</span>
        </button>
      ))}
    </div>
  );
};

export default Alphabet;
