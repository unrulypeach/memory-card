import React, { useState, useEffect } from 'react';
import Score from './Components/Score';
import CardPicker from './Components/CardPicker';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [cardData, setCardData] = useState();
  // const [board, setBoard] = useState();

  useEffect(() => {
    (async function getCards() {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
          'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
        },
      };
      try {
        const response = await fetch('https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/Battlegrounds', options);
        const data = await response.json();
        const filteredData = await data.filter((card) => card.img !== undefined && card.type === 'Hero');
        setCardData(filteredData);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    }());
  }, []);

  // useEffect(() => {})

  return (
    <div className="App">
      <h1>Memory Card Game</h1>
      <h2>Hearthstone Battlegrounds Heroes</h2>
      <Score />
      <CardPicker
        cards={cardData}
      />
    </div>
  );
}

export default App;
