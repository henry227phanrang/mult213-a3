import React, { useState } from "react";
import axios from "axios";
import WordList from "./components/WordList";

function App() {
  const [words, setWords] = useState([]);
  const [selectedWord, setSelectedWord] = useState(null);

  // Fetch live data function
  const fetchWords = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        const fetchedWords = response.data.products.slice(0, 5).map((product) => ({
          french: product.title,
          meaning: "Sample meaning",
        }));
        setWords(fetchedWords);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  // Fetch words on initial render
  React.useEffect(() => {
    fetchWords();
  }, []);

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
      <button
        onClick={fetchWords}
        style={{
          margin: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#27BB4D",
          color: "#FFFFFF",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Refresh Words
      </button>
      <WordList words={words} onWordClick={setSelectedWord} />
    </div>
  );
}

export default App;
