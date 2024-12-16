import React, { useState } from "react";

function App() {
  const [selectedWord, setSelectedWord] = useState(null); // To store the clicked word

  // Hardcoded list of French words with their meanings
  const words = [
    { french: "Bonjour", meaning: "Hello" },
    { french: "Merci", meaning: "Thank you" },
    { french: "Pomme", meaning: "Apple" },
    { french: "Chat", meaning: "Cat" },
    { french: "Chien", meaning: "Dog" },
    { french: "Maison", meaning: "House" },
    { french: "Livre", meaning: "Book" },
    { french: "Fleur", meaning: "Flower" },
    { french: "Voiture", meaning: "Car" },
    { french: "Eau", meaning: "Water" },
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1 style={{ backgroundColor: "#27BB4D", color: "#FFFFFF", padding: "10px", borderRadius: "5px" }}>
        French Dictionary
      </h1>
      {selectedWord ? (
        <h2 style={{ fontSize: "24px", color: "#000", marginTop: "20px" }}>
          <strong>{selectedWord.french}</strong> means "<em>{selectedWord.meaning}</em>"
        </h2>
      ) : (
        <h2 style={{ fontSize: "20px", color: "#555", marginTop: "20px" }}>Click on a word to see its meaning</h2>
      )}
      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {words.map((word, index) => (
          <li
            key={index}
            onClick={() => setSelectedWord(word)}
            style={{
              cursor: "pointer",
              padding: "10px",
              border: "1px solid #ccc",
              margin: "5px",
              display: "inline-block",
              backgroundColor: "#f9f9f9",
              borderRadius: "5px",
            }}
          >
            {word.french}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
