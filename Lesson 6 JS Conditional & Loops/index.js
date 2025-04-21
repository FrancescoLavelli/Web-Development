//********************************** 1 ****************************************/

// for (let number = -10; number <= 10; number++)
//   if (number >= 0) console.log(`${number} is positive`);
//   else console.log(`${number} is negative`);

//********************************** 2 ****************************************/

// for (let number = 0; number <= 10; number++)
//   if (number % 2 === 0) console.log(`${number} is Even`);
//   else console.log(`${number} is Odd`);

//********************************** 3 ****************************************/
// for (let number = 7; number <= 12; number++)
//   if (number > 10) console.log(`${number} is Greater than 10`);
//   else if (number === 10) console.log(`${number} is equal to 10`);
//   else console.log(`${number} is Smaller than 10`);

//********************************** 4 ****************************************/

// for (let number = -10; number <= 20; number++)
//   if (number > 0 && number % 5 === 0)
//     console.log(`${number} is Divisible by 5`);
//   else if (number > 0) console.log(`${number} is Positive`);
//   else console.log(`${number} is Negative`);

//********************************** 5 ****************************************/
// for (let number = 0; number <= 33; number++)
//   if (number > 10 && number < 20 && number % 3 === 0)
//     console.log(`${number} Conditions Met`);
//   else console.log(`${number} Conditions NOT met`);

//********************************** 9 ****************************************/

// const weekDays = [
//   {
//     english: "Sunday",
//     italian: "Domenica",
//     french: "Dimanche",
//     spanish: "Domingo",
//   },
//   {
//     english: "Monday",
//     italian: "Lunedi",
//     french: "Mondi",
//     spanish: "Lunes",
//   },
// ];

// for (const weekDay of weekDays) {
//   const dayName = weekDay.english;

//   switch (dayName) {
//     case "Sunday":
//       console.log("It's not Monday");
//       break;
//     case "Dimanche":
//       console.log("It's in French");
//       break;
//     case "Monday":
//       console.log("That's the correct day");
//       break;
//     default:
//       console.log("It is not a week day");
//   }
// }

// to check among multiple languages I need else if

// for (const weekDay of weekDays) {
//   if (weekDay.english === "Sunday") {
//     console.log("It's not Monday");
//   } else if (weekDay.french === "Dimanche") {
//     console.log("It's in French");
//   } else if (weekDay.italian === "Lunedi") {
//     console.log("That's the correct day");
//   } else {
//     console.log("It is not a week day");
//   }
// }

//********************************** 15 ****************************************/

// const customers = [
//   {
//     name: "JJ",
//     age: 88,
//     hasLoyalty: false,
//     totalSpending: 300,
//     promotionalPeriod: true,
//     itemPrice: 100,
//   },
//   {
//     name: "Bonny",
//     age: 88,
//     hasLoyalty: true,
//     totalSpending: 300,
//     promotionalPeriod: true,
//     itemPrice: 500,
//   },
// ];

// function getDiscount(
//   name,
//   hasLoyalty,
//   totalSpending,
//   promotionalPeriod,
//   itemPrice
// ) {
//   let discount = 0;
//   if (hasLoyalty === true) {
//     discount = discount + 10;
//   }
//   if (totalSpending >= 200) {
//     discount = discount + 5;
//   }
//   if (promotionalPeriod === true) {
//     discount = discount + 15;
//   }

//   return discount;
// }

// function getFinalPrice(discount, itemPrice) {
//   const discountAmount = (discount / 100) * itemPrice;
//   const finalPrice = itemPrice - discountAmount;
//   return finalPrice;
// }

// for (let i = 0; i < customers.length; i++) {
//   const customer = customers[i];

//   const discountPercentage = getDiscount(
//     customer.name,
//     customer.hasLoyalty,
//     customer.totalSpending,
//     customer.promotionalPeriod,
//     customer.itemPrice
//   );

//   customers[i].discount = discountPercentage;

//   const finalPrice = getFinalPrice(discountPercentage, customer.itemPrice);
//   const discountAmount = (discountPercentage / 100) * customer.itemPrice;

//   console.log(
//     `${
//       customer.name
//     } gets a ${discountPercentage}% discount on item priced at $${
//       customer.itemPrice
//     }. Discount amount: $${discountAmount.toFixed(
//       2
//     )}. Final price: $${finalPrice.toFixed(2)}`
//   );
// }

// console.log("Updated customers array:", customers);

//********************************** LOOPS ****************************************/
//********************************** 1 ****************************************/
// let evenSum = 0;
// for (let i = 0; i < 1001; i++) {
//   if (i % 2 !== 0) {
//     evenSum = evenSum + i;
//   }
// }
// console.log(evenSum);
//********************************** 2 ****************************************/
// for (let i = 101; i < 200; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//     break;
//   }
// }
//********************************** 3 ****************************************/
// let num = 1;
// let sum = 0;
// do {
//   sum = num * num;
//   num++;
// } while (num <= 10);
// console.log(sum);
//********************************** 4 ****************************************/
// function multiplicationTable(number) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${number} x ${i} = ${number * i}`);
//   }
// }
// multiplicationTable(3);
//********************************** 5 ****************************************/
// function reverseString(str) {
//   let result = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
//   }
//   return console.log(result);
// }

// reverseString("Gollum");
//********************************** 6 ****************************************/
// function isPrime(num) {
//   if (num <= 1) return false;
//   if (num <= 3) return true;
//   if (num % 2 === 0 || num % 3 === 0) return false;

//   for (let i = 5; i * i <= num; i += 6) {
//     if (num % i === 0 || num % (i + 2) === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(isPrime(2));
// console.log(isPrime(3));
// console.log(isPrime(7));
// console.log(isPrime(12));
// console.log(isPrime(23));
// console.log(isPrime(100));
//********************************** 7 ****************************************/
// let num = 0;
// let sum = 0;

// while (num <= 1000) {
//   if (num % 3 === 0 && num % 5 !== 0) sum = sum + num;
//   num++;
// }
// console.log(sum); //133668
//********************************** 8 ****************************************/
// function factorialRecursive(n) {
//   if (n < 0) return undefined;
//   if (n === 0 || n === 1) return 1;
//   return n * factorialRecursive(n - 1);
// }
// console.log(factorialRecursive(5)); // 120
//********************************** 9 ****************************************/
// function fibonacciSequence(n) {
//   let sequence = [0, 1];

//   if (n <= 0) return [];
//   if (n === 1) return [0];
//   if (n === 2) return sequence;

//   for (let i = 2; i < n; i++) {
//     sequence[i] = sequence[i - 1] + sequence[i - 2];
//   }
//   console.log(sequence);
//   return sequence;
// }

// fibonacciSequence(50);
//********************************** Object and Arrays ****************************************/
//********************************** 1 ****************************************/
const lotrCharacters = [
  {
    name: "Frodo Baggins",
    race: "Hobbit",
    height: 108,
    birth_year: "2968",
    gender: "male",
    weapon: "Sting",
  },
  {
    name: "Gandalf",
    race: "Maia",
    height: 180,
    birth_year: "Unknown",
    gender: "male",
    weapon: "Glamdring",
  },
  {
    name: "Aragorn",
    race: "Human",
    height: 198,
    birth_year: "2931",
    gender: "male",
    weapon: "Andúril",
  },
  {
    name: "Legolas",
    race: "Elf",
    height: 190,
    birth_year: "Unknown",
    gender: "male",
    weapon: "Bow and Arrow",
  },
  {
    name: "Gimli",
    race: "Dwarf",
    height: 135,
    birth_year: "2879",
    gender: "male",
    weapon: "Battle Axe",
  },
  {
    name: "Samwise Gamgee",
    race: "Hobbit",
    height: 106,
    birth_year: "2980",
    gender: "male",
    weapon: "Barrow-blade",
  },
  {
    name: "Boromir",
    race: "Human",
    height: 185,
    birth_year: "2978",
    gender: "male",
    weapon: "Sword",
  },
  {
    name: "Galadriel",
    race: "Elf",
    height: 190,
    birth_year: "Before the First Age",
    gender: "female",
    weapon: "Nenya (Ring of Water)",
  },
  {
    name: "Saruman",
    race: "Maia",
    height: 188,
    birth_year: "Unknown",
    gender: "male",
    weapon: "Staff",
  },
  {
    name: "Éowyn",
    race: "Human",
    height: 170,
    birth_year: "2995",
    gender: "female",
    weapon: "Sword",
  },
];
//********************************** 2 ****************************************/
// for (let index = 0; index < lotrCharacters.length; index++) {
//   const charName = lotrCharacters[index].name;
//   console.log(charName);
// }
//********************************** 3 ****************************************/
// let i = 0;
// while (i < lotrCharacters.length) {
//   if (lotrCharacters[i].height > 180 && lotrCharacters[i].height < 198) {
//     console.log(
//       `${lotrCharacters[i].name} is ${lotrCharacters[i].height} tall. Can you believe it?`
//     );
//     break;
//   }
//   i++;
// }
//********************************** 4 ****************************************/
// for (let i = 0; i < lotrCharacters.length; i++) {
//   // if (lotrCharacters[i].birth_year > 2980)// wow I don't have to convert string into int but is wrong.  JavaScript is loosely typed, which means it tries to automatically convert values when it thinks it makes sense — this is called type coercion.
//   if (parseInt(lotrCharacters[i].birth_year) > 2980)
//     // wow I don't have to convert string into int but is wrong.  JavaScript is loosely typed, which means it tries to automatically convert values when it thinks it makes sense — this is called type coercion.
//     console.log(
//       `${lotrCharacters[i].name} birth year is ${lotrCharacters[i].birth_year} . Can you believe it?`
//     );
// }
//********************************** 5 ****************************************/
// let hobbitCount = 0;

// for (let i = 0; i < lotrCharacters.length; i++) {
//   if (lotrCharacters[i].race === "Hobbit") {
//     hobbitCount = hobbitCount + 1;
//   }
// }
// console.log(`There are ${hobbitCount} hobbits in our list`);
//********************************** 6 ****************************************/
// let i = 0;
// while (i < lotrCharacters.length) {
//   if (lotrCharacters[i].birth_year > 2900) {
//     console.log(
//       `${lotrCharacters[i].name} is born in ${lotrCharacters[i].birth_year}. Can you believe it?`
//     );
//   }
//   i++;
// }
//********************************** 7 ****************************************/
// for (let i = 0; i < lotrCharacters.length; i++) {
//   if (lotrCharacters[i].gender === "male") {
//     lotrCharacters[i].newWeapon = "Sword of the King";
//   } else {
//     lotrCharacters[i].newWeapon = "";
//   }
// }

// console.log(lotrCharacters); // you cannot see from here cause off the below
// console.log(JSON.stringify(lotrCharacters, null, 2)); //You’re looking at a collapsed object in the console If you're using the browser console (like Chrome), and you log the array and immediately expand it, sometimes it shows the original state of the objects

//********************************** 9 ****************************************/
// const elfCharacters = [];
// const humanCharacters = [];
// for (let i = 0; i < lotrCharacters.length; i++) {
//   if (lotrCharacters[i].race === "Elf") {
//     elfCharacters.push(lotrCharacters[i]);
//   } else if (lotrCharacters[i].race === "Human") {
//     humanCharacters.push(lotrCharacters[i]);
//   } else {
//     console.log(`${lotrCharacters[i].name} is neither elf, nor human...`);
//   }
// }

// console.log(elfCharacters, humanCharacters);
//********************************** 10 ****************************************/
function findTheTallest() {
  let i = 0;
  let maxHeight = 0;
  while (i < lotrCharacters.length) {
    if (lotrCharacters[i].height > maxHeight) {
      maxHeight = lotrCharacters[i].height;
      tallestName = lotrCharacters[i].name;
    }
    i++;
  }
  console.log(`The tallest is ${tallestName} with ${maxHeight} cm`);
}

findTheTallest();

//********************************** 11 ****************************************/
let charactersByRace = {};

for (let i = 0; i < lotrCharacters.length; i++) {
  let race = lotrCharacters[i].race;
  let name = lotrCharacters[i].name;

  if (!charactersByRace[race]) {
    charactersByRace[race] = [];
  }

  charactersByRace[race].push(name);
}

console.log(charactersByRace);

//********************************** 1 ****************************************/
//********************************** 1 ****************************************/
//********************************** 1 ****************************************/
//********************************** 1 ****************************************/
//********************************** 1 ****************************************/
//********************************** 1 ****************************************/
//********************************** 1 ****************************************/
//********************************** 1 ****************************************/
//********************************** 1 ****************************************/
//********************************** 1 ****************************************/
//********************************** 1 ****************************************/
//********************************** 1 ****************************************/
//********************************** 1 ****************************************/
