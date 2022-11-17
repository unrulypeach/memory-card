/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import Gameboard from './Components/Gameboard';
import Score from './Components/Score';
import Card from './Components/Card';
import FiveRandNum from './Utils/FiveRandNum';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [allCardData, setAllCardData] = useState([]);
  const [pickedNums, setPickedNums] = useState([]);
  const [pickedCards, setPickedCards] = useState([]);

  useEffect(() => {
    console.log('first');
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
        setAllCardData(filteredData);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    }());
  }, []);

  useEffect(() => {
    console.log('second');
    setPickedNums(FiveRandNum());
  }, []);

  useEffect(() => {
    console.log('third');
    const list = pickedNums.map((ind) => (
      <Card name={allCardData[ind].name} img={allCardData[ind].img} />
    ));
    setPickedCards(list);
  }, []);

  return (
    <div className="App">
      <h1>Memory Card Game</h1>
      <h2>Hearthstone Battlegrounds Heroes</h2>
      <Score />
      <Gameboard
        cards={pickedCards}
      />
    </div>
  );
}

export default App;
