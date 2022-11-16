export default function FiveRandNum() {
  const arr = [];
  for (let i = 0; i < 5; i += 1) arr.push(Math.floor(Math.random() * 94));
  return arr;
}
