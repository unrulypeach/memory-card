/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import Gameboard from './Components/Gameboard';
import Score from './Components/Score';
import Card from './Components/Card';
import FiveRandNum from './Utils/FiveRandNum';

function App() {
  const [allCardData, setAllCardData] = useState([]);
  const [pickedNums, setPickedNums] = useState([]);
  const [pickedCards, setPickedCards] = useState([]);
  const [clicked, setClicked] = useState([false]);

  useEffect(() => {
    let isCancelled = false;
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
        if (!isCancelled) {
          setAllCardData(filteredData);
          console.log('data fetched');
        }
      } catch (e) {
        console.error(e);
      }
    }());

    return () => {
      isCancelled = true;
      console.log('aborted');
    };
  }, []);

  useEffect(() => {
    console.log('second');
    setPickedNums(FiveRandNum());
  }, []);

  useEffect(() => {
    console.log('third');
    const list = pickedNums.map((ind) => (
      <Card
        name={allCardData[ind].name}
        key={allCardData[ind].dbfId}
        img={(allCardData[ind].imgGold !== undefined
          ? allCardData[ind].imgGold : allCardData[ind].img)}
      />
    ));
    setPickedCards(list);
  }, [allCardData]);

  return (
    <div className="App">
      <h1>Memory Card Game</h1>
      <h2>Hearthstone Battlegrounds Heroes</h2>
      <Score />
      <div className="flex">
        {pickedCards}
      </div>
    </div>
  );
}

export default App;
