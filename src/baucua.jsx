import React, { useState, useEffect } from 'react';
import cop from './assets/1-cop.jpg';
import bau from './assets/2-bau.jpg';
import ga from './assets/3-ga.jpg';
import tom from './assets/4-tom.jpg';
import ca from './assets/5-ca.jpg';
import cua from './assets/6-cua.jpg';
import './DiceGame.css'; // Import the CSS file for styling
import xucsac from './xucsac.mp3';

const DiceGame = () => {
  const [diceValues, setDiceValues] = useState([1, 1, 1]);
  const [rolling, setRolling] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showDice, setShowDice] = useState(true);
  const audio = new Audio(xucsac);

  const diceNames = ['Cọp', 'Bầu', 'Gà', 'Tôm', 'Cá', 'Cua'];
  const diceImages = [cop, bau, ga, tom, ca, cua];

  const rollDice = () => {
    setRolling(true);
    setShowResults(false); // Hide the results button when rolling

    audio.play().catch(error => {
      // If autoplay is blocked, log the error and proceed
      console.error('Audio playback blocked:', error);
    });

    const intervalId = setInterval(() => {
      const newDiceValues = Array.from({ length: 3 }, () => Math.floor(Math.random() * 6) + 1);
      setDiceValues(newDiceValues);
    }, 500);

    setTimeout(() => {
      clearInterval(intervalId);
      setRolling(false);
      setShowResults(true);
      audio.pause(); // Stop the audio when rolling is complete
      audio.currentTime = 0; // Reset the audio to the beginning
    }, 3000);
  };

  const toggleShowDice = () => {
    setShowDice((prevShowDice) => !prevShowDice);
  };

  useEffect(() => {
    if (!rolling) {
      // If rolling is complete, show the "Show Results" button
      setShowResults(true);
    }
  }, [rolling]);

  return (
    <div className="App flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4">Random Bầu Cua Tôm Cá Game</h1>
      <button
        onClick={rolling ? null : rollDice}
        disabled={rolling}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {rolling ? 'Rolling...' : 'Roll Dice'}
      </button>

      <button onClick={toggleShowDice} className="my-3 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        {showDice ? 'Hide Dice' : 'Show Dice'}
      </button>

      <div className={`flex result-container ${showDice ? 'visible' : 'hidden'}`}>
        {diceValues.map((value, index) => (
          <div
            key={index}
            className={`m-7 w-40 h-40 fade-in-element`}
            style={{
              animation: showDice ? 'fadeIn 2s ease-in-out' : 'fadeOut 2s ease-in-out',
              animationDelay: `${index * 200}ms`
            }}
          >
            {value !== 0 ? (
              <img src={diceImages[value - 1]} alt={diceNames[value - 1]} className="w-full h-full" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiceGame;
