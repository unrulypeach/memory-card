export default function FiveRandNum() {
  const arr = [];
  while (arr.length < 5) {
    const num = Math.floor(Math.random() * 94);
    if (arr.indexOf(num) === -1
    && num !== 6
    && num !== 26
    && num !== 37
    && num !== 51
    && num !== 58
    && num !== 75
    && num !== 85) arr.push(num);
  }
  return arr;
}
