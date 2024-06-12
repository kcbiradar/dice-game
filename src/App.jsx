import { useState } from 'react'

function App() {
  const [value, setVlaue] = useState({
    playerOne : Math.max(1 , parseInt(Math.random() * 10) % 6),
    playerTwo : Math.max(1 , parseInt(Math.random() * 10) % 6)
  });

  const diceImages = ['dice-one.png','dice-two.png','dice-three.png','dice-four.png','dice-five.png','dice-six.png'];

  function throwDice() {
    setVlaue({
      playerOne : Math.max(1 , parseInt(Math.random() * 10) % 6),
      playerTwo : Math.max(1 , parseInt(Math.random() * 10) % 6)
    });
  }

  const playerOneDice = "public/assets/"+diceImages[value.playerOne];
  const playerTwoDice = "public/assets/"+diceImages[value.playerTwo];

  return (
    <>
      <section>
        <div>
        <h3>{value.playerOne > value.playerTwo ? "Player one Won!!!" : value.playerOne < value.playerTwo ? "Player Two Won!!!": "Game Tie"}</h3>
          <div className='container'>
            <div>
              <p>Player One</p>
              <img src= {playerOneDice} alt='Dice image'/>
            </div>
            <div>
              <p>Player Two</p>
              <img src= {playerTwoDice} alt='Dice image'/>
            </div>
          </div>
          <button className='btn' onClick={throwDice}>Play</button>
        </div>
      </section>
    </>
  )
}

export default App
