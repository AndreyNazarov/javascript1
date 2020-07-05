let input;
let total = 0;

do {
  input = prompt("tap a number");
  const inputNum = parseInt(input);
  if (input === null) {
    break;
  }
  total += inputNum;
} while (true);

alert(`Общая сумма чисел равна ${total}`);
