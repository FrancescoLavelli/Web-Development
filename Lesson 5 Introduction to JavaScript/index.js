//1
let username = "Fra";
console.log(username);
//2
const pi = 3.14;
//pi = 99; TypeError: Assignment to constant variable.
//3
let num = 0;
let str = "my string";
let bool = true;
console.log(typeof num, typeof str, typeof bool);
//4
a = 55.32;
b = 4.9;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
//5
let expression = 5 + 3 * 2;
console.log(expression);
expression = (5 + 3) * 2;
console.log(expression);
//6
let hundred = 100;
let hundredBrackets = "100";
console.log(hundred == hundredBrackets);
console.log(hundred === hundredBrackets);
//7
let x = true;
let y = false;
console.log(x && y);
console.log(x || y);
console.log(!x);
console.log(!y);
//8.0
let predict0 = false || (true && false);
console.log(predict0);
//8.1
let predict1 = (false && true) || false;
console.log(predict1);
//8.2
let predict2 = false || (true && false) || true;
console.log(predict2);
//8.3
let predict3 = (false && true) || (false && true);
console.log(predict3);
//8.4
let predict4 = false || (true && false && true);
console.log(predict4);
//9
const car = {
  brand: "Fiat",
  model: "Punto",
  year: 2000,
  color: "red",
};
console.log(car);
//10
console.log(car.model, car.year);
console.log(car["model"], car["year"]);
//11
car.engine = 5600;
car.year = 2009;
console.log(car);
console.log(car.engine, car.year);
//12
const movie = {
  name: "The Matrix",
  year: 1999,
  actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
  director: {
    name: "Wachowski",
    age: 50,
    birthplace: "Los Angeles",
    birthyear: 1965,
  },
};
console.log(
  movie.director.name,
  movie.director.age,
  movie.director.birthyear,
  movie.director.birthplace
);
//13
prop = "brand";
console.log(car[prop]);
//14
greet = "hello" * 3;
console.log(greet, typeof greet);
greet == NaN;
greet === NaN;
//15
const profile = {
  status: "active",
  settings: {
    darkMode: true,
    notifications: false,
  },
};

profile.settings.darkMode !== true;
profile.settings.notifications !== false;
//16
const article = {
  title: "The Benefits of JavaScript",
  author: "John Doe",
  content: "JavaScript is a powerful programming language...",
  tags: ["JavaScript", "Programming", "Web Development"],
  comments: [
    {
      author: "Jane Smith",
      content: "Great article!",
    },
    {
      author: "Bob Johnson",
      content: "I agree with everything!",
    },
  ],
  views: 1000,
  engagement: {
    likes: 50,
    dislikes: 15,
    comments: 2,
  },
};

article.engagement.views = 1001;
console.log(article.engagement.views);
article.engagement.dislikes = 12;
console.log(article.engagement.dislikes);
