import React, { useState } from "react";

const Project = () => {
  const word = "SYNCHRONY";
  const maxTries = 5;
  const [tries, setTries] = useState(0);
  const [letters, setLetters] = useState(["", "", "", "", "", "", "", "", ""]);
  const [input, setInput] = useState("");

  function handleGuess() {
    if (tries >= maxTries) {
      console.log("Your turn is done! Max attempts reached.");
      return;
    }

    let found = false;
    let newLetters = letters;

    for (let i = 0; i < word.length; i++) {
      if (word[i] === input.toUpperCase()) {
        newLetters[i] = word[i];
        found = true;
      }
    }

    if (!found) {
      setTries(tries + 1);
    }

    setLetters([...newLetters]);
    setInput("");
  }

  return (
    <div>
      <h2>SYNCHRONY</h2>
      <div>
        <input value={letters[0]} readOnly />
        <input value={letters[1]} readOnly />
        <input value={letters[2]} readOnly />
        <input value={letters[3]} readOnly />
        <input value={letters[4]} readOnly />
        <input value={letters[5]} readOnly />
        <input value={letters[6]} readOnly />
        <input value={letters[7]} readOnly />
        <input value={letters[8]} readOnly />
      </div>
      <br />
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleGuess}>Submit</button>
      <p>Tries : {maxTries - tries}</p>
    </div>
  );
};

export default Project;
