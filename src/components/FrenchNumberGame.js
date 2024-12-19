import React, { useState, useEffect, useRef } from "react";

const FrenchNumberGame = () => {
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [currentNumber, setCurrentNumber] = useState(null);
  const [input, setInput] = useState("");
  const [timer, setTimer] = useState(5);
  const [gameOver, setGameOver] = useState(false);
  const timerRef = useRef(null);
  const audioRef = useRef(null);

  const numbersRange = Array.from({ length: 10 }, (_, i) => i + 1); // Numbers 1 to 10

  // Start the game
  const startGame = () => {
    setGameOver(false);
    setStreak(0);
    setBestStreak((prev) => Math.max(prev, streak));
    nextQuestion();
  };

  // Move to the next question
  const nextQuestion = () => {
    clearInterval(timerRef.current);
    const randomNum = numbersRange[Math.floor(Math.random() * numbersRange.length)];
    setCurrentNumber(randomNum);
    setInput("");
    setTimer(5);
    playAudio(randomNum);

    timerRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          endGame();
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Play the audio file for the current number
  const playAudio = (number) => {
    if (audioRef.current) audioRef.current.pause();
    audioRef.current = new Audio(`/audio/${number}.mp3`);
    audioRef.current.play();
  };

  // End the game
  const endGame = () => {
    setGameOver(true);
    clearInterval(timerRef.current);
  };

  // Validate input
  useEffect(() => {
    if (parseInt(input) === currentNumber) {
      setStreak((prev) => prev + 1);
      nextQuestion();
    }
  }, [input, currentNumber]);

  // Handle input change to accept only numbers
  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setInput(value);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>French Number Game (1-10)</h2>
      <p>
        <strong>Streak:</strong> {streak} &nbsp; | &nbsp;
        <strong>Best Streak:</strong> {bestStreak}
      </p>
      <div style={{ fontSize: "24px", margin: "10px 0", color: timer <= 2 ? "red" : "black" }}>
        Time Left: {timer}s
      </div>
      {gameOver ? (
        <div>
          <h3>Game Over! Your Final Streak: {streak}</h3>
          <button onClick={startGame} style={buttonStyle}>
            Start Again
          </button>
        </div>
      ) : (
        <div>
          <button onClick={startGame} style={buttonStyle}>
            Start Game
          </button>
          <div style={{ marginTop: "20px" }}>
            <input
              type="text"
              placeholder="Type the number here"
              value={input}
              onChange={handleInputChange}
              style={{ fontSize: "18px", padding: "5px", textAlign: "center" }}
            />
          </div>
          <div style={{ marginTop: "10px" }}>
            <button onClick={() => playAudio(currentNumber)} style={buttonStyle}>
              Replay
            </button>
            <button onClick={() => alert(`The correct answer is: ${currentNumber}`)} style={buttonStyle}>
              Reveal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const buttonStyle = {
  margin: "10px",
  padding: "10px 20px",
  fontSize: "16px",
  backgroundColor: "#27BB4D",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default FrenchNumberGame;
