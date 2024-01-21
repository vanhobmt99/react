import React, { useState } from 'react';
import cop from './assets/1-cop.jpg';
import bau from './assets/2-bau.jpg';
import ga from './assets/3-ga.jpg';
import tom from './assets/4-tom.jpg';
import ca from './assets/5-ca.jpg';
import cua from './assets/6-cua.jpg';
import dianhua from './assets/dianhua.jpg';

const DiceGame = () => {
  const [diceValues, setDiceValues] = useState([5, 5, 5]); // Starting with some default values for 'ca'
  const [rolling, setRolling] = useState(false);

  const diceNames = ['Cọp', 'Bầu', 'Gà', 'Tôm', 'Cá', 'Cua'];
  const diceImages = [cop, bau, ga, tom, ca, cua];

  const rollDice = () => {
    setRolling(true);

    const intervalId = setInterval(() => {
      const newDiceValues = Array.from({ length: 3 }, () => Math.floor(Math.random() * 6) + 1);
      setDiceValues(newDiceValues);
    }, 200);

    setTimeout(() => {
      clearInterval(intervalId);
      setRolling(false);
    }, 3000);
  };

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Random Bầu Cua Tôm Cá Game</h1>
      <button onClick={rolling ? null : rollDice} disabled={rolling}>
        {rolling ? 'Rolling...' : 'Roll Dice'}
      </button>

      <div style={{ backgroundColor: 'red', backgroundImage: `url(${dianhua})`, backgroundSize: 'cover', width: '100%', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {diceValues.map((value, index) => (
          <div key={index} style={{ margin: '10px', width: '100px', height: '100px' }}>
            {value !== 0 ? (
              <img src={diceImages[value - 1]} alt={diceNames[value - 1]} style={{ width: '100%', height: '100%' }} />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiceGame;
