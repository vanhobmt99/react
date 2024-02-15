// DiceGame.js

import React, { useState, useEffect } from 'react';
import './DiceGame.css'; // Import the CSS file for styling
import xucsac from './xucsac.mp3';
import dianhua from './assets/dianhua.jpg';
import cop from './assets/1-cop.jpg';
import bau from './assets/2-bau.jpg';
import ga from './assets/3-ga.jpg';
import tom from './assets/4-tom.jpg';
import ca from './assets/5-ca.jpg';
import cua from './assets/6-cua.jpg';

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
    setShowResults(false);

    audio.play().catch(error => {
      console.error('Audio playback blocked:', error);
    });

    const intervalId = setInterval(() => {
      const newDiceValues = Array.from({ length: 3 }, () => Math.floor(Math.random() * 6) + 1);
      setDiceValues(newDiceValues);
    }, 100);

    setTimeout(() => {
      clearInterval(intervalId);
      setRolling(false);
      setShowResults(true);
      audio.pause();
      audio.currentTime = 0;
    }, 3000);
  };

  const toggleShowDice = () => {
    setShowDice(prevShowDice => !prevShowDice);
  };

  useEffect(() => {
    if (!rolling) {
      setShowResults(true);
    }
  }, [rolling]);

  return (
    <div className="App items-center flex flex-col">
      <h1 className="text-4xl font-bold mb-4">Random Bầu Cua Tôm Cá Game</h1>

      <div className="space-x-3">
        <button
          onClick={rolling ? null : rollDice}
          disabled={rolling}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {rolling ? 'Rolling...' : 'Roll Dice'}
        </button>

        <button
          onClick={toggleShowDice}
          className="my-3 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          {showDice ? 'Hide Dice' : 'Show Dice'}
        </button>
      </div>

      <div className={`flex flex-column items-center justify-center`} style={{ background: `url(${dianhua})`, minHeight: '800px', width: '40%', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className={showDice ? 'visible' : 'hidden'}>
          <div className="flex flex-wrap justify-center">
            {diceValues.map((value, index) => (
              <div
                key={index}
                className={`m-5 w-40 h-40 fade-in-element`}
                style={{
                  animation: showDice ? 'fadeIn 2s ease-in-out' : 'fadeOut 2s ease-in-out',
                  animationDelay: `${index * 200}ms`,
                  overflow: 'hidden',
                }}
              >
                {value !== 0 ? (
                  <img src={diceImages[value - 1]} alt={diceNames[value - 1]} className="w-auto h-auto" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiceGame;
