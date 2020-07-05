const credits = 23580;
const pricePerDroid = 3000;
const input = prompt("How much droids u need to buy?");
const totalPrice = pricePerDroid * input;

if (input === null) {
  console.log("Отменено пользователем!");
} else if(totalPrice > credits){
    console.log('Недостаточно средств на счету!');
} 
else {
  console.log (totalPrice);
  console.log(`Вы купили ${input} дроидов, на счету осталось ${credits - totalPrice} кредитов`);
}
