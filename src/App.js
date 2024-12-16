import React, { useState, useEffect } from "react";
import WordList from "./components/WordList";

function App() {
  const [words, setWords] = useState([]);
  const [selectedWord, setSelectedWord] = useState(null);

  // Fetch live word data from an API
  useEffect(() => {
    fetch("https://dummyjson.com/products") // Replace with any API
      .then((response) => response.json())
      .then((data) => {
        const fetchedWords = data.products.slice(0, 5).map((product) => ({
          french: product.title,
          meaning: "Sample meaning",
        }));
        setWords(fetchedWords);
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Welcome to the French Learning App</h1>
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
