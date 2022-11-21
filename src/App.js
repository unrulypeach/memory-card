/* eslint-disable no-console */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import GameEnd from './Components/GameEnd';
import Score from './Components/Score';
import Card from './Components/Card';
import FiveRandNum from './Utils/FiveRandNum';
import background from './Styles/UnitedinStormwind_007.jpg';
import logo from './Styles/hsbglogo.png';

function App() {
  const [allCardData, setAllCardData] = useState([]);
  const [pickedNums, setPickedNums] = useState([]);
  const [pickedCards, setPickedCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  function resetGame() {
    setClickedCards([]);
    setPickedNums(FiveRandNum());
    setGameOver(false);
  }

  function checkWin(name, addCardFn) {
    return clickedCards.indexOf(name) === -1 ? addCardFn : setGameOver(true);
  }

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
    setPickedNums(FiveRandNum());
  }, []);

  useEffect(() => {
    if (allCardData.length !== 0) {
      const list = pickedNums.map((ind) => (
        <Card
          name={allCardData[ind].name}
          key={allCardData[ind].dbfId}
          img={allCardData[ind].img}
          setNewNums={() => setPickedNums(FiveRandNum())}
          checkWin={() => checkWin(
            allCardData[ind].name,
            setClickedCards([...clickedCards, allCardData[ind].name]),
          )}
        />
      ));
      setPickedCards(list);
    }
  }, [allCardData, pickedNums]);

  /* useEffect(() => {
    if (gameOver) {
    }
  }, [gameOver]) */

  return (
    <div
      className="bg-cover h-screen text-[#FFF]"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* <h1 className="text-center text-4xl pb-2 pt-8">Hearthstone Battlegrounds Heroes</h1> */}
      <img
        className="mx-auto"
        width="250px"
        alt="hearthstone battlegrounds logo"
        src={logo}
      />
      <h1 className="text-center text-lg"> A Memory Card Game</h1>
      <Score
        score={clickedCards.length}
      />
      <div className="flex justify-center">
        {pickedCards}
      </div>
      <GameEnd
        score={clickedCards.length}
        maxPts={allCardData.length - 7}
        gameStatus={gameOver}
        gameReset={() => resetGame()}
      />
      <div
        className="text-center pt-28"
      >
        RULES: CLICK ON HEROES YOU SELECTED.
        THE GAME ENDS WHEN YOU CLICK ON THE SAME HERO TWICE.
      </div>
    </div>
  );
}

export default App;
