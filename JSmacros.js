// (Содержимое) 

    {  
    .textContent = '###'  // устанавливает текстовое содержимое без учета HTML-тегов.
    .innerHTML = '<div>'  // Возвращает или устанавливает HTML-содержимое элемента, включая его потомков.
    .outerHTML  // Возвращает или устанавливает HTML-содержимое элемента, включая сам элемент.
    }
    // (Атрибуты) 
    {
    .getAttribute('name')  // Возвращает значение атрибута с указанным именем.
    .setAttribute("disabled", true)  // Устанавливает значение атрибута с указанным именем.
    .removeAttribute('disabled', true)  // Устанавливает значение атрибута с указанным именем.
    }
    // (Работа с CSS-классами) 
    {
    .className  // Получает или устанавливает значение атрибута class элемента.
    .classList.add(className)  // Добавляет указанный класс к списку классов элемента.
    .classList.remove(className)  // Удаляет указанный класс из списка классов элемента.
    .classList.toggle(className)  // Переключает указанный класс: добавляет его, если его нет, и удаляет, если есть.
    .classList.contains(className)  // Проверяет, содержит ли элемент указанный класс.
    .style  // Получает или устанавливает стили элемента в виде объекта. Например, el.style.color = 'red'; установит цвет текста элемента в красный.
    .textContent  // Альтернатива для установки или получения текстового содержимого элемента.
    }
    // (Заменяем) 
    {
    let *oldContent* = document.getElementById(*nameID*);  // берем старый контент
    let *newContent* = document.createElement(*HTML\DIV\H2*);  // создаем новый HTML элеммент
    *newContent*.textContent = "Йобаный новый контент";  // Делаем контент
    *oldContent*.parentNode.replaceChild(*newContent*,*oldContent*);
    *oldContent*appendChild(*newContent*);  // добавляем в конец
    }
    // (Выбираем) 
    {
    let paragraphs = document.getElementsByTagName('p');  // Выбор всех элементов <p> на странице
    let exampleElement = document.querySelector('.example');  // Выбор первого элемента с классом "example"
    let highlightElements = document.querySelectorAll('.highlight');  // Выбор всех элементов с классом "highlight"
    let headerElement = document.getElementById('header');  // Выбор элемента с ID "header"
    element.parentElement;  // Получает родительский элемент
    parentElement.children;  // Получает всех дочерних элементов
    parentElement.childNodes;  // Получает список всех дочерних узлов, включая текстовые
    parentElement.childElementCount;  // Получает количество дочерних элементов
    }
    // (Обработка событий)
    {
    window.scrollX;  // Получает текущее положение по горизонтали
    window.scrollY;  // Получает текущее положение по вертикали
    window.scrollTo(X, Y);  // Прокручивает окно до указанных координат X и Y
    window.scrollBy(X, Y);  // Прокручивает окно на указанное количество пикселей по горизонтали и вертикали
    window.open('http:  // ###/'); // Открывает новое окно браузера
    
    let btn4 = document.querySelector('.btn4')  // Выбираем кнопку с классом 'btn4'
    btn4.addEventListener('click', function (ev){
    ev.preventDefault(); } // Отменяем стандартное поведение кнопки
    let request = new XMLHttpRequest();  // Создаем новый объект XMLHttpRequest для отправки HTTP-запрос
    }
    // (Заменяем тег span на параграф) 
    {
      const parent = neoElement.parentElement;
    const newElement = document.createElement('p');
    newElement.className = 'neo';  // Добавляем класс "neo" к новому параграфу
    newElement.textContent = newText;  // Добавляем текст в новый параграф
    parent.replaceChild(newElement, neoElement);  // Заменяем старый элемент новым
    {const animatedElement = document.querySelector('.block_6_art_3');}// (Получаем элемент, который нужно анимировать)
    }
    // (Функция для проверки прокрутки страницы) 
    {
    function checkScroll() {
    const totalHeight = document.documentElement.scrollHeight; // Получаем высоту всего документа
    const viewportHeight = window.innerHeight;// Получаем высоту видимой части окна
    const scrollPosition = window.scrollY;// Получаем текущую позицию прокрутки
    const scrollPercent = (scrollPosition + viewportHeight) / totalHeight * 100; // Вычисляем процент прокрутки
      // Проверяем, достигнут ли 40% прокрутки
        if (scrollPercent >= 40) {
            animatedElement.classList.add('animate');}}// Добавляем класс для анимации
    // (Добавляем обработчик события прокрутки) 
    {
    window.addEventListener('scroll', checkScroll);
    // (Инициализируем проверку прокрутки (на случай, если пользователь уже прокрутил страницу)) 
    {
    checkScroll();}}
    }
    //ФОРМЫ
    {
    document.addEventListener('DOMContentLoaded', function() {
      // Находим кнопку по её классу
    const submitButton = document.querySelector('.button_send_Scrypt_1');
      // Навешиваем событие "click" на кнопку
    submitButton.addEventListener('click', function() {
      // Находим элементы формы
    const nameInput = document.querySelector('.inName');
    const phoneInput = document.querySelector('.inTel');
    const emailInput = document.querySelector('.inMail');
    const contactMethodSelect = document.querySelector('.contact');
      // Получаем их значения
    const nameValue = nameInput.value || 'не задано пользователем';
    const phoneValue = phoneInput.value || 'не задано пользователем';
    const emailValue = emailInput.value || 'не задано пользователем';
    const contactMethodValue = contactMethodSelect.options[contactMethodSelect.selectedIndex].text;
      // Выводим всю информацию в одном console.log
    console.log(`Имя - ${nameValue}, Телефон - ${phoneValue}, E-mail - ${emailValue}, Способ связи - ${contactMethodValue}`);
    });
    });
    }
// Методы массивов в JavaScript
{
let arr = [1, 2, 3, 4, 5];// Инициализация массива

// Добавить элемент в конец массива
arr.push(6);  // arr станет [1, 2, 3, 4, 5, 6]

// Добавить элемент в начало массива
arr.unshift(0);  // arr станет [0, 1, 2, 3, 4, 5, 6]

// Найти элемент по значению (вернёт индекс первого найденного элемента или -1)
let index = arr.indexOf(3);  // index будет 2

// Найти элемент по индексу
let element = arr[2];  // element будет 3

// Удалить первый элемент массива
arr.shift();  // arr станет [1, 2, 3, 4, 5, 6]

// Удалить последний элемент массива
arr.pop();  // arr станет [1, 2, 3, 4, 5]

// Удалить элемент по индексу
let indexToRemove = 2;
arr.splice(indexToRemove, 1);  // arr станет [1, 2, 4, 5]

// Удалить элемент по значению
let valueToRemove = 4;
let indexToRemove2 = arr.indexOf(valueToRemove);
if (indexToRemove2 !== -1) {
    arr.splice(indexToRemove2, 1);}  // arr станет [1, 2, 5]
 
// Сортировать массив (в данном случае по возрастанию)
arr.sort((a, b) => a - b);  // arr станет [1, 2, 5]
// создать массив из: arr и [3,4]
alert( arr.concat([3, 4]) ); // 1,2,3,4
// Удалить дубликаты из массива
arr = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr = [...new Set(arr)];  // uniqueArr будет [1, 2, 3, 4, 5]

// Обращение массива
arr.reverse();  // arr станет [5, 4, 4, 3, 2, 2, 1]
}
// Конкатенация массивов
{
let anotherArr = [6, 7, 8];
let concatenatedArr = arr.concat(anotherArr);  // concatenatedArr будет [5, 4, 4, 3, 2, 2, 1, 6, 7, 8]

let findElement = arr.find(el => el === 'a');// find - находим элемент по условию
console.log(".find(el => el === 'a') - находим элемент 'a':", findElement);

let filteredArr = arr.filter(el => typeof el === 'number');// filter - создаем новый массив, фильтруя исходный массив
console.log(".filter(el => typeof el === 'number') - фильтруем числа:", filteredArr);

let mappedArr = arr.map(el => el + '1');// map - создаем новый массив, преобразуя каждый элемент исходного массива
console.log(".map(el => el + '1') - добавляем '1' к каждому элементу:", mappedArr);

arr.forEach((el, i) => {
    console.log(`Index ${i + 1} -> Nomber ${el}`)});// forEach - перебираем каждый элемент массива

let sum = arr.reduce((acc, el) => acc + el, 0);// reduce - преобразуем массив в одно значение
console.log(".reduce((acc, el) => acc + el, 0) - суммируем элементы:", sum);
}

//ЦИКЛЫ
{
for (var i = 0; i < arr.length; i++){
    console.log(`*FOR* Индекс ${i} - Значение ${arr[i]}`)};

    let index = 0;
for (Element of arr) {
    console.log(`*OF* Индекс ${index} - Значение ${Element}`)
    index++;}

for (let index in arr) {
      console.log(`*OF* Индекс ${index} - Значение ${arr[index]}`)}

let j = 0;
while (j < arr.length) {
    console.log(`*WHILE* Индекс ${j} - Значение ${arr[j]}`)
        j++;};
        
let n = 0;
do {
    console.log(`*DO* Индекс ${n} - Значение ${arr[n]}`)
    n++;} while (n < arr.length)
}
//Замыкание
{
function Замыкание(Имя){
  let Переменная_с_именем = Имя
  return {
      Получить_имя(){
          return Переменная_с_именем
      },
      Устанавливаем_имя(Новое_имя){
          Переменная_с_именем = Новое_имя }}}
const user = Замыкание('НАСТЯ')
console.log(user.Получить_имя())
}

//СТРОКА
{
str.charAt(index)           // Возвращает символ по указанному индексу.
console.log('Hello'.charAt(0));          // "H"

str.charCodeAt(index)       // Возвращает Unicode-код символа по указанному индексу.
console.log('Hello'.charCodeAt(0));      // 72

str.concat(str2, ..., strN) // Объединяет строки и возвращает новую строку.
console.log('Hello'.concat(' World'));   // "Hello World"

str.endsWith(searchStr)     // Проверяет, оканчивается ли строка на указанную подстроку.
console.log('Hello'.endsWith('o'));      // true

str.includes(searchStr)     // Проверяет, содержит ли строка указанную подстроку.
console.log('Hello'.includes('e'));      // true

str.indexOf(searchStr)      // Возвращает индекс первого вхождения подстроки или -1.
console.log('Hello'.indexOf('e'));       // 1

str.lastIndexOf(searchStr)  // Возвращает индекс последнего вхождения подстроки или -1.
console.log('Hello Hello'.lastIndexOf('l')); // 9

str.match(regexp)           // Ищет совпадения с регулярным выражением.
console.log('Hello'.match(/[A-Z]/g));    // ["H"]

str.padEnd(targetLength)    // Заполняет строку справа до указанной длины.
console.log('Hello'.padEnd(10, '!'));    // "Hello!!!!!"

str.padStart(targetLength)  // Заполняет строку слева до указанной длины.
console.log('Hello'.padStart(10, '!'));  // "!!!!!Hello"

str.repeat(count)           // Повторяет строку указанное количество раз.
console.log('Hello'.repeat(3));          // "HelloHelloHello"

str.replace(searchFor, replaceWith) // Заменяет часть строки.
console.log('Hello'.replace('l', 'w'));  // "Hewlo"

str.search(regexp)          // Возвращает индекс первого совпадения с регулярным выражением или -1.
console.log('Hello'.search(/[a-z]/));    // 1

str.slice(start, end)       // Извлекает часть строки и возвращает новую строку.
console.log('Hello'.slice(1, 3));        // "el"

str.split(delimiter)        // Разбивает строку на массив подстрок.
console.log('Hello'.split(''));          // ["H", "e", "l", "l", "o"]

str.startsWith(searchStr)   // Проверяет, начинается ли строка с указанной подстроки.
console.log('Hello'.startsWith('H'));    // true

str.substring(start, end)   // Извлекает часть строки между двумя индексами.
console.log('Hello'.substring(1, 3));    // "el"

str.toLowerCase()           // Преобразует всю строку в нижний регистр.
console.log('Hello'.toLowerCase());      // "hello"

str.toUpperCase()           // Преобразует всю строку в верхний регистр.
console.log('Hello'.toUpperCase());      // "HELLO"

str.trim()                  // Удаляет пробелы с обоих концов строки.
console.log(' Hello '.trim());           // "Hello"
}