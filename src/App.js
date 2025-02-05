import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");

  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const findFirstMisspelledWord = (text) => {
    const words = text.split(" ");
    for (const word of words) {
      const lowerCaseWord = word.toLowerCase();
      if (customDictionary.hasOwnProperty(lowerCaseWord)) {
        return { original: word, corrected: customDictionary[lowerCaseWord] };
      }
    }
    return null;
  };

  const suggestion = findFirstMisspelledWord(inputText);

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        rows="6"
        cols="45"
        value={inputText}
        onChange={handleChange}
      />
      {suggestion && (
        <div>
          Did you mean: <strong>{suggestion.corrected}</strong>?
        </div>
      )}
    </div>
  );
}

export default App;
