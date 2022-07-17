import React, {useState, useEffect} from "react";

export const Word = ({word}) => {
  const [letters, setLetters] = useState(() => countLetters());

  function countLetters() {
    let count;
    if (word) {
      count = word[0].split("");
    }
    return count;
  }

  return (
    <div>
      {letters.map((letter) => {
        <div>letter</div>;
      })}
    </div>
  );
};

export default Word;
