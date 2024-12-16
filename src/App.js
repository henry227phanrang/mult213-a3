import React, { useState } from "react";
import WordList from "./components/WordList";

function App() {
  const [selectedWord, setSelectedWord] = useState(null);

  // Hardcoded list of French words with meanings
  const words = [
    { french: "Bonjour", meaning: "Hello" },
    { french: "Merci", meaning: "Thank you" },
    { french: "Pomme", meaning: "Apple" },
    { french: "Chat", meaning: "Cat" },
    { french: "Chien", meaning: "Dog" },
    { french: "Maison", meaning: "House" },
    { french: "Livre", meaning: "Book" },
    { french: "Eau", meaning: "Water" },
    { french: "Fleur", meaning: "Flower" },
    { french: "Voiture", meaning: "Car" },
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1
        style={{
          backgroundColor: "#27BB4D",
          color: "#FFFFFF",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        Welcome to the French Learning App
      </h1>
      {selectedWord ? (
        <h2>
          <strong>{selectedWord.french}</strong> means "{selectedWord.meaning}"
        </h2>
      ) : (
        <h2>Select a word to see its meaning</h2>
      )}
      <WordList words={words} onWordClick={setSelectedWord} />
    </div>
  );
}

export default App;
