import React, { useState, useEffect } from "react";
import FrenchNumberGame from "./components/FrenchNumberGame";

function App() {
  const [words, setWords] = useState([]);
  const [selectedWord, setSelectedWord] = useState(null);

  useEffect(() => {
    const wordList = [
      { french: "Bonjour", meaning: "Hello", image: "/media/bonjour.png" },
      { french: "Merci", meaning: "Thank you", image: "/media/merci.png" },
      { french: "Pomme", meaning: "Apple", image: "/media/pomme.jpg" },
      { french: "Chat", meaning: "Cat", image: "/media/chat.jpg" },
      { french: "Chien", meaning: "Dog", image: "/media/chien.jpg" },
      { french: "Maison", meaning: "House", image: "/media/maison.jpg" },
      { french: "Livre", meaning: "Book", image: "/media/livre.jpg" },
      { french: "Fleur", meaning: "Flower", image: "/media/fleur.jpg" },
      { french: "Voiture", meaning: "Car", image: "/media/voiture.jpg" },
      { french: "Eau", meaning: "Water", image: "/media/eau.jpg" },
    ];
    setWords(wordList);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ backgroundColor: "#27BB4D", color: "#FFFFFF", padding: "10px" }}>French Dictionary</h1>
      {selectedWord ? (
        <div>
          <img src={selectedWord.image} alt={selectedWord.french} style={{ width: "150px", marginTop: "20px" }} />
          <h2>
            <strong>{selectedWord.french}</strong> means "<em>{selectedWord.meaning}</em>"
          </h2>
        </div>
      ) : (
        <h2>Click on a word to see its meaning</h2>
      )}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {words.map((word, index) => (
          <li
            key={index}
            onClick={() => setSelectedWord(word)}
            style={{
              display: "inline-block",
              margin: "10px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {word.french}
          </li>
        ))}
      </ul>

      {/* Add the French Number Game */}
      <FrenchNumberGame />
    </div>
  );
}

export default App;
