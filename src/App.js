import { useState } from "react";

function App() {

const [spell, setSpell] = useState("");


  const customDictionary = {

    teh: "the",
  
    wrok: "work",
  
    fot: "for",
  
    exampl: "example"
  
  };


  
  const handleChange = (e) => {
    setSpell(e.target.value);
  }

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea rows="6" cols="45" value={spell} onChange={handleChange}>
        
      </textarea>
      {spell && customDictionary.hasOwnProperty(spell) && (
        <p>Did you mean: <strong>{customDictionary[spell]}</strong>?</p>
      )}
    </div>
  );
}

export default App;
