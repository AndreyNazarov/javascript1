const input = prompt("Which country?").toLocaleLowerCase();
let price;
let country = "";

switch (input) {
  case "china":
    price = 100;
    country = "china";
    break;

  case "chili":
    price = 250;
    country = "chili";
    break;

  case "australia":
    price = 170;
    country = "australia";
    break;

  case "india":
    price = 80;
    country = "india";
    break;

  case "jamaica":
    price = 120;
    country = "jamaica";
    break;

  default:
    alert("В вашей стране доставка не доступна");
}
console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
