import { useState } from "react";

function App() {
  const [spell, setSpell] = useState("");

  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  };

  const handleChange = (e) => {
    setSpell(e.target.value.toLowerCase());
  };

  // Function to check and replace misspelled words
  const checkSpell = (text) => {
    return text
      .split(" ")
      .map((word) => customDictionary[word]) // Replace if in dictionary
      // .join(" "); // Join back into a sentence

  };

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea rows="6" cols="45" value={spell} onChange={handleChange} />

      {spell && spell !== checkSpell(spell) && (
        <body>
          Did you mean: <strong>{checkSpell(spell)}</strong>?
        </body>
      )}
    </div>
  );
}

export default App;
