let num1 = '89103235356';
let num2 = '+79103235356';
let num3 = '+7(910)3235356';
let num4 = '+7(891) 032-35-35';
let num5 = ' +7(891) 032-35-35 ';

let num1Error = '89103235';
let num2Error = '+7d910323-53-56';
let num3Error = '9+910323536';
let num4Error = '8910g35356';

function thisNumber(num){
    num = num.trim();
    num = num.replace('+7', '8');
    num = num.replaceAll(' ', "");
    num = num.replaceAll('-', '');
    num = num.replaceAll('(', '');
    num = num.replaceAll(')', '');
    if (!num.startsWith('8')){
        return false;}
    if (num.length !== 11){
        return false;}
    if (isNaN(num)){
        return false;
    }
    return true;
    }
    
console.log(thisNumber(num1));
console.log(thisNumber(num2));
console.log(thisNumber(num3));
console.log(thisNumber(num4));
console.log(thisNumber(num5));

console.log(thisNumber(num1Error));
console.log(thisNumber(num2Error));
console.log(thisNumber(num3Error));
console.log(thisNumber(num4Error));



//замаскировать все кроме последних 4х символов
const card = '1234 5678 9012 3456 7890';
// **** **** **** **** 7890


let cardPass = cardPassCheck(card);
function cardPassCheck(card, cardPass){
    card = card.replaceAll(' ','');
    let last4 = card.slice(-4);
    let start16 ='*'.repeat(card.length -4);
    return start16 + last4;}
console.log(card);
console.log(cardPass);

console.log(card.slice(-4).padStart(16,"*"));

const user = [
	{ 	 
    name: 'Аня',
		face: 'Стремная',
		age: 30,
		skill: 'безопасность'
	},
	{    
    name: 'Алена',
		face: 'Няша',
		age: 21,
		skill: 'Разврат'
  }
];

let user2 = user.map(function(u) {
	return {
    fullName: u.name + ' ' + u.face,
    skill: u.skill.length // взял длину строки как пример, замените на нужный вам параметр
  };
});

console.log(user2);

/*Задание для закрепления
Создайте новый массив, в котором будут только названия книг.
Создайте новый массив, в котором будут книги с рейтингом выше 9.
Создайте новый массив, в котором каждый элемент будет объектом с полями title и rating, но rating умножен на 10.
Решите эти задачи с помощью методов map и filter.*/

const books = [
	{ title: 'Война и мир', author: 'Л. Толстой', rating: 9.9 },
	{ title: '1984', author: 'Дж. Оруэлл', rating: 9.5 },
	{ title: 'Граф Монте-Кристо', author: 'А. Дюма', rating: 9.4 },
	{ title: 'Убить пересмешника', author: 'Х. Ли', rating: 9.0 },
	{ title: 'Повелитель мух', author: 'У. Голдинг', rating: 8.5 },
	{ title: 'Мастер и Маргарита', author: 'М. Булгаков', rating: 9.7 },
	{ title: 'Скотный двор', author: 'Дж. Оруэлл', rating: 9.2 }
  ];
  
  let nameBook = books.map(book => book.title);
  let ratingBook = books.filter(book => book.rating > 9);
  let bestBook = books.map(book => {
	return {
		title: book.title,
		rating: book.rating * 10}});

console.log(`${nameBook}`);
console.log(JSON.stringify(ratingBook, null, 2));
console.log(JSON.stringify(bestBook, null, 2));

let btn = document.getElementById('addTaskButton');
let taskList = document.getElementById('taskList');
let taskInput = document.getElementById('taskInput');

// Функция для создания новой задачи
function createNewTask(taskText) {
    let newTask = document.createElement("li");
    newTask.textContent = taskText;
    return newTask;
}

// Функция для добавления задачи в список
function addTaskToList(taskElement) {
    taskList.appendChild(taskElement);
}

// Функция для очистки поля ввода
function clearInput() {
    taskInput.value = '';
}

// Обработчик события для кнопки добавления задачи
btn.addEventListener('click', function() {
    console.log('Clicked task');

    let newTask = createNewTask(taskInput.value);
    addTaskToList(newTask);
    clearInput();
});


/* методы увелечения или уменьшения баланса
1. каждая операция сохраняется в масив operations {reason: 'оплата налогов', sum:-100}.
2. возвращается true- если операция прошла успешно, иначе false.
3. реализовать метод вывода числа оперций по кошельку.*/
const wallet2 = {
    balance: 0,
    operations: [],
    money: function() {
        console.log(this.balance, this.operations);}
};
let balanceOperation = function(reason,operation) {
    let oldBalance = wallet2.balance;
    let newBalance = oldBalance + operation;
    wallet.balance = newBalance;
    if (newBalance != oldBalance){
             wallet2.operations.push({
                  reason: reason,
                 sum: operation,})}
        else  console2.log('Операция прошла не успешно');
    }

    /* методы увелечения или уменьшения баланса
1. каждая операция сохраняется в масив operations {reason: 'оплата налогов', sum:-100}.
2. возвращается true- если операция прошла успешно, иначе false.
3. реализовать метод вывода числа оперций по кошельку.*/
const wallet = {
    balance: 0,
    operations: [],
    addMoney: function(money, reason) {
        this.balance += money;
        this.operations.push({
            reason: reason})
    },
    falseMoney: function(money, reason) {
        if (this.balance < money) {
            console.log("Don't have money")}
            else {
                this.balance -= money;
                this.operations.push({reason: reason});}
            },
    printBalance: function() {
        console.log(this.balance);
        console.log(this.operations);
    }
}

let obj = [
    { name: 'Аня',
      age: 30,
      skill: 'безопасност'},
    { name: 'Алена',
      age: 21,
      skill: 'Раз'},
]
console.log(obj);
for (elem in obj) {
obj[elem].city = 'nitra';
}
console.log(obj);

for (elem of obj) {
    if ('age' in elem ) {
        delete elem.age;
    }
}
console.log(obj);

let opt = {
    game: 'red alert',
    reiting: 7,
    rating: 9.9,
    is_active: true,
    info:{
        price : 700,
        have: true,
        date: new Date()
    }
}
console.log(opt)
console.log(opt.info.price)
console.log(opt.info.date)

opt.info.finished = true;

console.log(opt.info.finished)

const myCountry = 'Ukraine';
console.log(myCountry);

let isStudent;
isStudent = true;
console.log(isStudent);
isStudent = false;
console.log(isStudent);

let firstNumber = 10;
let secondNumber = 20;
let result = firstNumber * secondNumber;
console.log(result);

let name = "Dima";
let surname = "Zabarov";
let profession = "Web Developer";
let result = `Меня зовут ${name} ${surname} и я ${profession}`;
console.log(result);

let comment = `Привет, мир!`

*/
let string = "Привет, мир!";
let number = 42;
let boolean = true;
let nullValue = null;
let undefinedValue;
let object = {name:'dima'};
let array = [1, 2, 3];
console.log(typeof string);
console.log(typeof number);
console.log(typeof boolean);
console.log(typeof nullValue);
console.log(typeof undefinedValue);
console.log(typeof object);
console.log(typeof array);

function sayHello() {
    console.log('Hello');
}
sayHello();

let fun = name => 'привет,'+ name;
fun('дима')
fun('сергей')
console.log(fun('дима'));
console.log(fun('сергей'));


let state = () => 'привет, мир!';
console.log(state());
let state2 = () => {return 'Привет, мир!'};

let difference = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
    } else {
        console.log('Один из параметров не является числом');
        return null;
    }
};

let Hello = (wait) => 'Привет, мир!';

setTimeout(() => {
    console.log(Hello(5000));
}, 5000);

setTimeout()

let obj = {
    name: 'Ivan',
    surname: 'Ivanov',
    favoriteNumber: 123
}

console.log(`My name is ${obj.name} ${obj.surname} and my favorite number is ${obj}`);

let str = 'Hello World!';

console.log(str.length);

let str = 'Hello World!';
console.log(str instanceof String);
console.log(typeof str);

let str2 = str.toUpperCase();
console.log(str2);

let str = 'Good Morning';

str = str.replace('Morning', 'Evening');

console.log(str);


let arr = [1, 'day', true];
console.log(arr[0]);
console.log(arr.length);

let arr = [1, "banana", true];
console.log(arr);
arr.splice(1, 1, "apple");
console.log(arr);


let arr = [1, 2, 3, 4, 5];
for (index in arr) {
    console.log('this index ' + index);
}
for (elem of arr) {
    console.log('this elem ' + elem);
}

let arr = [1, 2, 3, 4, 5];
arr.push(6, 7, 8, 9, 10);
console.log(arr.length);

let time = new Date();
console.log(time);


let myVariable1 = 10
let myVariable2 = '5'

console.log(myVariable1 <= myVariable2 === true);

myVariable1 = '20'
myVariable2 = 100

console.log((Number(myVariable1) <= myVariable2) === true);

console.log(3 || (true && null) || false)

const myNumber1 = 10 // 10 = 3 + 3 + 3 + 1
const myNumber2 = 3

let a = 10

a +=1
console.log(a) // 11

a *=2
console.log(a) // 22

a -=5
console.log(a) // 17

a /=2
console.log(a) // 8.5


const myObject = {
    x: 10,
    y: true,
  }//инструкция
  
  myObject.z = 'abc'//выражение-инструкция
  
  delete myObject.x//выражение-инструкция
  
  let newVariable//инструкция
  
  newVariable = 30 + 5//выражение-инструкция
  
  console.log(newVariable)//инструкция
  
  if (newVariable > 10) {//инструкция-выражение
    console.log(`${newVariable} больше 10`)
  }

  
function fn() {
    console.log('Привет из функции fn')
  
    return function (a) {
      console.log(a)
    }
  }
  
  const arr = [1, 2] // <-- Объявление переменной используя const

arr.push(3)

console.log(arr)
// [1, 2, 3]

arr = [1, 2, 3, 4]// - const
// ДО: Uncaught TypeError: Assignment to constant variable.
// ПОСЛЕ: Нет ошибки

console.log(arr)
// [1, 2, 3, 4]
  fn()(true)
  

console.log(myNumber1 % myNumber2);


const myFavoriteAnimal = 'Monkey'

console.log(myFavoriteAnimal)
// 'Monkey'

const myFavoriteAnimal2 = 'Cat'

console.log(myFavoriteAnimal)
// 'Cat'

'use strict'

function myFunction() {
  let a = 2
  return a
}

myFunction()

function myFn() {
    console.log('Привет из функции myFn');
  }
  
  setTimeout(myFn, 2000);
  
let i = 1;
const timers = setInterval(() => {
  console.log(`Сообщение номер ${i}`);
  i++;
  if (i > 5) { 
    clearInterval(timers);
  }}, 2000);

timers

const myArray = [true, null]

myArray.unshift('Привет')
myArray.unshift('100');

console.log(myArray) // [100, "Hello", true, null]
console.log(myArray.length) //


const myArray = [1, 2]
myArray[10] = 'abc'
console.log(myArray)
console.log(myArray.length)

const cars = [
    {
      carBrand: 'Tesla',
      price: 50000,
      isAvailableForSale: true
    },
    {
      carBrand: 'BMW',
      price: 45000,
      isAvailableForSale: false
    },
    {
      carBrand: 'Mercedes',
      price: 55000,
      isAvailableForSale: true
    }
  ];
let newCar = {
         carBrand: 'Ford',
         price: 35000,
         isAvailableForSale: false
}  
cars.push(newCar)
console.log(cars)


const myObject = {
    key1: true,
    key5: 10,
    key3: 'abc',
    key4: null,
    key10: NaN,
  }
  for (const key of Object.keys(myObject)) {
    if (key === 'key1' || key === 'key3') {
      console.log(myObject[key])
    }
  }

  const MIN = 1000
  const MAX = 9999
  const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351]
  
  
  const randomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min)}
  
  function pushNewNum (newRandomNumber,myNumbers) {
      myNumbers.push(newRandomNumber)}
  let newRandomNumber = randomNumber(MIN,MAX);
  
  
  while (myNumbers.includes(newRandomNumber)) {
      newRandomNumber = randomNumber(MIN, MAX);
  }
  
  
  pushNewNum(newRandomNumber, myNumbers);
  
  console.log(myNumbers);
  console.log(newRandomNumber);
  
const myObject = {
    name: 'Mike',
    age: 30,
    city: 'London',
  }
  
  Object.prototype.country = 'England'
  
  for (let key in myObject) {
    if (myObject.hasOwnProperty(key)){
    console.log(myObject[key])}
  }
  
function isArrayEmpty(inputArray) {
    if (inputArray.length > 0) {
      return 'Массив не пустой'
    } 
      return 'Массив пустой'
    
  }
  let isArr = (inputArray) => inputArray.length > 0 ? 'Массив не пустой': 'Массив пустой'
  
  
  console.log(isArrayEmpty([1, 3]))
  console.log(isArrayEmpty([]))
  
const myCities = ['London', 'New York', 'Singapore']
const cityInfo = (city, index) =>
  `${city} is at the index ${index} in the myCities array`
myCities.forEach((city, index) => console.log(cityInfo(city, index)));

const postsJSON = [
    '{"postId":1355,"commentsQuantity":5}',
    '{"postId":5131,"commentsQuantity":13}',
    '{"postId":6134,"commentsQuantity":2}',
    '{"postId":2351,"commentsQuantity":8}',
  ]
  let posts = postsJSON.map(el => JSON.parse(el))
  console.log(posts)
  console.log(posts[1].postId);
  console.log(posts[posts.length-1].commentsQuantity);

  
const posts = [
    { postId: 1355, commentsQuantity: 5 },
    { postId: 5131, commentsQuantity: 13 },
    { postId: 6134, commentsQuantity: 2 },
  ]
  
  let findPostById = (id, posts) => {
    const foundPost = posts.find(post => post.postId === id);
    if (foundPost === undefined) {
      return undefined;
    }
    return foundPost;
  };
  
  console.log(findPostById(6134, posts)); // { postId: 6134, commentsQuantity: 2 }
  console.log(findPostById(4511, posts)); // undefined

  
const a = [5, 'abc', 10, 1]
const b = [4, 10, 14, 25, 25, 50]
const c = [150, 132, 80, 40]
const d = [15, 26, 10, 23, 85]

let arraySortInfo = function(inputArray) {
    if (!inputArray.every(el => typeof el === 'number')) {
    return 'Некоторые элементы не являются числами';
  }
  let возрастание = true;
  let убывание = true;
  for (let i = 0; i < inputArray.length - 1; i++) {
    if (inputArray[i] > inputArray[i + 1]) {
      возрастание = false;
    }
    if (inputArray[i] < inputArray[i + 1]) {
      убывание = false;
    }
  }

  if (возрастание) {
    return 'Массив отсортирован по возрастанию';
  } else if (убывание) {
    return 'Массив отсортирован по убыванию';
  } else {
    return 'Массив не отсортирован';
  }
};
let areArraysEqual = function(firstArray, secondArray) {
    if (firstArray.length !== secondArray.length)
        return false;
    for (let element of firstArray) {
        if (firstArray.indexOf(element)!== secondArray.indexOf(element)) {
        return false
        }
    return true
    }}

const a = [1, 2, 3]
const b = [1, 2, 3]
const c = [2, 1, 3]
const d = [1, 2, 3, 4]

console.log(areArraysEqual(a, b)) // true
console.log(areArraysEqual(a, c)) // false
console.log(areArraysEqual(a, d)) // false

const transports = ['Bus', 'Car', 'Bicycle', 'Airplane']
let isElementInArray = function(inputArray, searchElement) {
    for (let element of inputArray) {
        if (element === searchElement) {
            return true
        }
    }
    return false
}


console.log(isElementInArray(transports, 'Bus')) // true
console.log(isElementInArray(transports, 'Phone')) // false
console.log(isElementInArray(transports, 'Airplane')) // true

const tags = [
    ['javascript', 'es6'],
    ['css', 'flexbox'],
    ['html', 'web-browser'],
  ]
  const fruits = [
    { title: 'Orange', quantity: 10 },
    { title: 'Banana', quantity: 5 },
    { title: 'Apple', quantity: 25 },
  ]
  const primitiveTypesArray = [25, 'x', true, undefined, null]
  
  let isElementInArray = function(searchElement, inputArray) {
    if (typeof searchElement!== 'object') {
      return inputArray.includes(searchElement)
    } else {
      return inputArray.map(element => element.toString()).includes(searchElement.toString())
    }
  }
  
  
  
  console.log(isElementInArray(['css', 'flexbox'], tags)) // true
  console.log(isElementInArray(['flexbox', 'css'], tags)) // false
  console.log(isElementInArray({ title: 'Apple', quantity: 25 }, fruits)) // true
  console.log(isElementInArray({ title: 'Banana' }, fruits)) // false
  console.log(isElementInArray(25, primitiveTypesArray)) // true
  
const myNumbers = [123, 50, 27]
let pushIfUnique = function(inputArray, newElement) {
    if (inputArray.includes(newElement)) {
        console.log(`${newElement} уже в массиве`)
    } else {
        inputArray.push(newElement)
    }
    
}
pushIfUnique(myNumbers, 50) // "50 уже в массиве"
console.log(myNumbers) // [123, 50, 27]

pushIfUnique(myNumbers, 80)
console.log(myNumbers) // [123, 50, 27, 80]

pushIfUnique(myNumbers, 80) // "80 уже в массиве"
console.log(myNumbers) // [123, 50, 27, 80]

pushIfUnique(myNumbers, 77)
console.log(myNumbers) // [123, 50, 27, 80, 77]

const inputPosts = [
    {
      title: 'Как быстро выучить JavaScript?',
      postId: 3421,
      comments: 25,
    },
    {
      title: 'Где используется JavaScript?',
      postId: 5216,
      comments: 3,
    },
    {
      title: 'Какая разница между React и Angular?',
      postId: 8135,
      comments: 12,
    },
  ]
  
  const popularPostsIds = (posts, minimalComentsQty) => {
    return posts.reduce((acc, current) => {
      if (current.comments >= minimalComentsQty) {
        acc.push(current.postId);
      }
      return acc;
    }, []);
  };
  console.log(popularPostsIds(inputPosts, 10)) // [3421, 8135]
  
  console.log(popularPostsIds(inputPosts, 15)) // [3421]
  
  console.log(popularPostsIds(inputPosts, 50)) // []
  let quantitiesByCategories = function (products) {
    return products.reduce((callback, product) => {
      const { category, quantity } = product
      callback[category] = (callback[category] || 0) + quantity
      return callback},{})}
  const inputProducts = [
    {
      title: 'Phone case',
      price: 23,
      quantity: 2,
      category: 'Accessories',
    },
    {
      title: 'Android phone',
      price: 150,
      quantity: 1,
      category: 'Phones',
    },
    {
      title: 'Headphones',
      price: 78,
      quantity: 1,
      category: 'Accessories',
    },
    {
      title: 'Sport Watch',
      price: 55,
      quantity: 2,
      category: 'Watches',
    },
  ]
  
  
  console.log(quantitiesByCategories(inputProducts))

  
let sortProductsByPrice = (products) => {
    products.sort((a, b) => a.price - b.price)
     }
   
   
   const inputProducts = [
     {
       title: 'Phone case',
       price: 23,
       quantity: 2,
       category: 'Accessories',
     },
     {
       title: 'Android phone',
       price: 150,
       quantity: 1,
       category: 'Phones',
     },
     {
       title: 'Headphones',
       price: 78,
       quantity: 1,
       category: 'Accessories',
     },
     {
       title: 'Sport Watch',
       price: 55,
       quantity: 2,
       category: 'Watches',
     },
   ]
   
   const sortedProducts = sortProductsByPrice(inputProducts)
   
   console.log(sortedProducts) // Массив отсортированных товаров
   
   console.log(inputProducts) // Оригинальный массив не должен измениться
   
let templateLiteral = num => {
   
    return (`Это число ${num}.
Это число ${num < 10 ? 'меньше' : 'больше или равно'} 10.
Квадратный корень этого числа - ${Math.sqrt(num)}.
`)}

const scores1 = [0, 1.5, 2.5, 3.7]
const scores2 = [1.7, 4.5, 0, 4.9, 5.0, 4.2]
const scores3 = [1.3, 2.5, 1.9]
const scores4 = ['abc', 1.3, true, 2.5, 1.9]

const meanScore = (...args) => {
  let array = args.flat()
  if (!array.every(el => typeof el == 'number')) {
    console.log("Все аргументы в вызове функции должны быть числами!");
    return;
  }
  return array.reduce((acc, val) => acc + val, 0) / array.length};

console.log(meanScore(scores1))
// 1.93
console.log(meanScore(scores1, scores2))
// 2.8
console.log(
  meanScore(scores1, scores2, scores3)
)
// 2.59
console.log(meanScore(scores1, scores2, scores3, scores4))


function weatherForecast2(city,weather) {
    if (weather === undefined) {
        weather = 'Отличная погода!'
    }
    return (`Прогноз погоды для города ${city}: ${weather}`)
}

function weatherForecast(city, weather = 'Отличная погода!') {
  return (`Прогноз погоды для города ${city}: ${weather}`)
}

console.log(weatherForecast('Moscow'))

console.log(weatherForecast('Dubai', 'Солнечно'))
// Прогноз погоды для города Dubai: Солнечно

console.log(weatherForecast('London', 'Небольшой дождь'))
// Прогноз погоды для города London: Небольшой дождь

console.log(weatherForecast('Paris'))
// Прогноз погоды для города Paris: Отличная погода!

console.log(weatherForecast('Miami', ''))
// Прогноз погоды для города Miami:

console.log(weatherForecast('Las Vegas', undefined))
// Прогноз погоды для города Las Vegas: Отличная погода!

const photosGallery = (title, dimensions, date) => {
    return {
      title,
      [dimensions]: true,
      date,
      info: () => {console.log(`Фото ${title} имеет разрешение ${dimensions}`);},
      publishInfo: () => { console.log(`Фото было опубликовано ${Math.floor( (new Date().getTime() - date.getTime()) / 1000)} секунды назад`);}
      }}
  const myDogPhoto = photosGallery(
    "My dog",
    "1920x1080",
    new Date()
  )
  
  const testDimension1 = "1920x1080"
  const testDimension2 = "1080x720"
  
  myDogPhoto.info()
  /* Фото "My dog" имеет разрешение 1920x1080 */
  
  setTimeout(() => myDogPhoto.publishInfo(), 2000)
  /* Фото "My dog" было опубликовано 2 секунды назад */
  
  /* ВОПРОС: Почему метод "publishInfo" все еще имеет доступ 
  к параметрам функции "photosGallery" (например "date")? */
  
  console.log(myDogPhoto[testDimension1]) // true
  console.log(myDogPhoto[testDimension2]) // undefined
  
const processQuantities = (minQty,maxQty,defaultQty = 0) => {
    console.log(minQty) // 8
    console.log(maxQty) // 29
    console.log(defaultQty) // 10 в первом вызове, 0 во втором вызове
    return defaultQty + maxQty - minQty
  }
  
  const inputQuantities1 = [8, 29, 10]
  console.log(processQuantities(inputQuantities1)) // 31
  
  const inputQuantities2 = [8, 29]
  console.log(processQuantities(inputQuantities2)) // 21
  
let minMax = (...args) =>{
    let array = []
    array.push(Math.min(...args))
    array.push(Math.max(...args))
    min, max = array
    return min, max
}
let min, max 
/* Вызовите здесь функцию "minMax" с аргументами 24, 5, 34, 10 
и используя деструктуризацию массивов присвойте значения переменным "min" и "max" */
console.log(minMax(24, 5, 34, 10 )) // 5, 34

/* Вызовите здесь функцию "minMax" еще раз с аргументами 18, 23, 103, 70, 80, 25 */
console.log(minMax(18, 23, 103, 70, 80, 25)) // 18, 103

const personInfo = (obj) => {
    const {
    name,
    age: personAge,
    location: { country: origin, city: homeCity },
    friends = [],
    created = new Date().getFullYear(),
  }=obj;
  return {
    name,
    personAge,
    origin,
    homeCity,
    friendsQty: friends.length,
    createdAtYear: created,
  };
  
  }
  
  const person = {
    name: 'Alice',
    age: 19,
    location: {
      country: 'England',
      city: 'London',
    },
  }
  
  const result = personInfo(person)
  
  console.log(result)

  let processPosts = (posts) =>{
    JSpost = JSON.stringify(posts);
    js_posts = JSON.parse(JSpost);
    js_posts.map((post) => {
      post.postId = post.postId + 1000;
      author = post.author;
      commentsQty = post.commentsQty || 0;
    })
    return js_posts;
      
  }
  const testPosts = [
    {
      postId: 234,
      author: 'robd',
      commentsQty: 5,
    },
    {
      postId: 823,
      author: 'sady',
    },
    {
      postId: 161,
      author: 'merryl',
      commentsQty: 8,
    },
  ]
  
  const processedPosts = processPosts(testPosts)
  console.log(processedPosts)

  let del = (obj) => {
    delete obj._id;
    delete obj.processed;
    delete obj.cart;
    return obj;
  }
  
  let person = {
    _id: '5ad8cefcc0971792dacb3f1f',
    index: 4,
    processed: false,
    cart: ['item1', 'item2', 'item3'],
    email: 'slarsen@test.com',
    name: 'Samanta Larsen', 
    cartId: 435,
  }
  console.log(person)
  console.log(del(person))
  
class ExtendedArray extends Array {
    sum() {
      return this.reduce((sum, num) => sum + num, 0)
    }
    onlyNumbers() {
      return this.filter((el) => typeof el === 'number')
    }
  }
  
  const myExtendedArray = new ExtendedArray(10, 4, 5)
  console.log(myExtendedArray)
  console.log(myExtendedArray.sum())
  const myExtendedArray2 = new ExtendedArray('abc', 5, true, 25)
  console.log(myExtendedArray2.onlyNumbers())
  myExtendedArray2.forEach((el) => console.log(el))
  
class CustomArray extends Array {
    customPush(newElement) {
      console.log(this.length)
      this[this.length] = newElement
      console.log(this.length)
      console.log(`Новый элемент ${newElement} был только что добавлен в массив`)
    }
  }
const myCustomArray = new CustomArray(10, 3, 7, 5)
myCustomArray.customPush(25)

console.log(myCustomArray)

myCustomArray.push(30)

console.log(myCustomArray)


let sumNumbers = (...args) => {
    let sum = 0;
    for (let element of args) {
        sum += element;}
    console.log(sum);
    return sum;
}

function firstFunction(a, b) {
    return a + b
  }
  
  const secondFunction = function (a, b) {
    return a + b
  }
  
const b = 2
let d = 15
//b = 2
//d = 15
function myFn1(a) {//a = undefined
  let b
  //b = undefined / 2
  let d = 10
  //d = 10
  myFn2(b)
  //b = undefined
}

function myFn2(a) {//a = undefined
  let c = 5
  //c = 5 
  console.log(a, b, c, d)
}

myFn1()
// a= undefined
// b= 2
// c= 5
// d= 15

const a = 5
const b = 10

if (b > a) {
let c = 2
  c = a + b + c
  // ДО: ReferenceError: Cannot access 'c' before initialization
  // ПОСЛЕ: Нет ошибки
  
  console.log(c)
  // 17
}

console.log(c)
// Uncaught ReferenceError: c is not defined

let isNumber = (a) =>typeof (a) === 'number'? `${a} это число` : `не число`
 

console.log(isNumber(10))
// 10 - это число

console.log(isNumber('Привет'))
// Привет - это не число

console.log(isNumber(true))
// true - это не число

let mult = (a, b) => a*b
let timer = setTimeout(() => console.log(mult(5, 10)), 1000);

function multiplyBy(a, mult = 2) {
    console.log(a * mult)}
  
  multiplyBy(2)
  // 4
  
  multiplyBy(2, undefined)
  // 4
  
  multiplyBy(2, 0)
  // 0
  
  multiplyBy(5, 10)
  // 50
  
function square(a) {
    if (a === undefined){
      console.log(`Функция "square" не может быть вызвана без аргумента`)
    }
    console.log(a * a)
  }
  
  square(10)
  // 100
  
  square()
  // ДО: NaN
  // ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента
  
const objectWithNumbers = {
    x: 5,
    y: 20,
    z: 3,
  }
  
  let mult = ({x, y, z}) => x*y*z
  const result = mult(objectWithNumbers)
  console.log(result)
  // 300
  
const arr = [1, 2, 3, 4, 5, 6, 7]

// Напишите код здесь
let [a,b, ...c] = arr
console.log(a)
// 1

console.log(b)
// 2

console.log(c)
// [3, 4, 5, 6, 7]

const a = [1, 2]
const b = [4, 5]
const c = [8, 9, 10]
const d = 11

// Напишите код здесь
const combinedArray = [0, ...a, 3, ...b, 6, 7, ...c, d]
console.log(combinedArray)
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const a = [1, 2, 3]

// Напишите код здесь
const b = [...a]
b.push('newElement')

console.log(a)
// [1, 2, 3]

console.log(b)
// [1, 2, 3, "newElement"]
const createGreeting = () => {
    let greetingString = "Hey, this is";
    let greet = (name) => `${greetingString} ${name}`;
    let changeGreeting = (changeGreet) =>  greetingString = changeGreet
    return {greet,changeGreeting};



}


const greeting1 = createGreeting()

console.log(greeting1.greet('Bob'))
// Hey, this is Bob

greeting1.changeGreeting('Good Morning from')

console.log(greeting1.greet('Emily'))
// Good Morning from Emily

greeting1.changeGreeting('Good Evening')

console.log(greeting1.greet('Emily'))
// Good Evening Emily

/* ____________  */

const greeting2 = createGreeting()

console.log(greeting2.greet('Emily'))
// Hey, this is Emily

let a = 'first'
let b = 'second'

console.log(a, b)
// first second

;[a, b] = [b, a]

console.log(a, b)
// second first

let vowelsCount = 0
const vowels = ['a', 'e', 'i', 'o', 'u']
const str = 'Today is the best day of my life'

for (let letter of str) {
    if (vowels.includes(letter)) {
        vowelsCount += 1}}



console.log(vowelsCount)
// 9

const person1 = {
    name: 'Mike',
    info: {
      country: 'Spain',
      age: 23,
    },
    postsQuantity: 100,
  }
  
  const person2 = { 
    name: 'Alice',
    info: {
      country: 'Italy',
      age: 25,
    },
  }
  
  let shortPerson = ({
    name: n,
    info: {country:c, age:a},
    postsQuantity: p = 0
  }) => ({
  n,
  c,
  a,
  p,
  })
  
  
  console.log(shortPerson(person1))
  // { n: "Mike", c: "Spain", a: 23, p: 100 }
  
  console.log(shortPerson(person2))
  // { n: "Alice", c: "Italy", a: 25, p: 0 }

  const cars = [
    { brand: 'Honda', price: 13000 },
    { brand: 'Rolls-Royce', price: 120000 },
  ]
  
  function carInfo(thiss) {
    if (thiss.price <= 20000) {
      console.log(`Цена автомобиля ${thiss.brand} - ${thiss.price} и это дешёвая машина`);
    } else {
      console.log(`Цена автомобиля ${thiss.brand} - ${thiss.price} и это дорогая машина`);
    }
  }
  
  cars.forEach((car) => carInfo(car))
  // Цена автомобиля Honda - 13000$ и это дешёвая машина
  // Цена автомобиля Rolls-Royce - 120000$ и это дорогая машина
  class Fruit {
    constructor(title,price){
        this.title= title;
        this.price= price;
    }
    priceInfo() {return (`${this.title}${this.price}`)}

}


const apple = new Fruit('Apple', 2)
console.log(apple.priceInfo())
// Price of the Apple is 2$

const orange = new Fruit('Orange', 3)
console.log(orange.priceInfo())
// Price of the Orange is 3$
    
const objectWithNumbers = {
    a: 10,
    b: 20,
    c: 'string',
    d: 12,
  }
  
  function sumObjectValues(obj) {
    let value = 0
  
    Object.keys(obj).forEach((key) => {
      if (typeof obj[key] === 'number') {
        value += obj[key]
      }
    })
  
    return value
  }
  const result = sumObjectValues(objectWithNumbers)
  console.log(result)
  //42
  
const nums = [10, -12, 30, -1, -8, 0, 14, -33, 20]

let sumPositiveNegative = (num) => {
    let result ={
        positive:0,
        negative:0,
    }
    
    num.forEach((n)=>{
        if (n >= 0){
            result.positive += n
        }
        else result.negative += n
    })
return result;
}

const result = sumPositiveNegative(nums)

console.log(result)
// { positive: 74, negative: -54 }
