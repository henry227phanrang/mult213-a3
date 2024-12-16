import React from "react";

function WordList({ words, onWordClick }) {
  return (
    <div>
      <h2>Click on a word to see its meaning</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {words.map((word, index) => (
          <li
            key={index}
            onClick={() => onWordClick(word)}
            style={{
              cursor: "pointer",
              padding: "10px",
              border: "1px solid black",
              margin: "5px",
              display: "inline-block",
            }}
          >
            {word.french}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WordList;
