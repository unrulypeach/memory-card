export default async function getCards() {
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
    return filteredData;
  } catch (error) {
    return error;
  }
}
