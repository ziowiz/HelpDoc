<?php

//задача: 2гамбургера по 4,95. Коктель 1,95 и кола 0,85. Налог 7,5% и чаевые 16%
//задача: переписать функцию, которая принимает массив и возвращает сумму и делает вывод на экран
function priceFood($tax, $tip, ...$food)
{
  // Суммируем все цены на еду
  $sum_food = array_sum(...$food);
  // Добавляем налоги
  $sum_food_Tax = $sum_food * (1 + $tax);
  // Добавляем чаевые
  $sum_food_Tip = $sum_food_Tax * (1 + $tip);
  // Возвращаем сумму
  return <<<Price
<h3>Сумма к оплате: $sum_food_Tip руб.</h3>
<h4>Налог: $tax</h4>
<h4>Чаевые: $tip</h4>
<p>Сумма к оплате с налогом: $sum_food_Tax</p>
<p>Сумма к оплате с чаевыми: $sum_food_Tip</p>]
Price;
}
//задача: сделать функцию имя фамилия. Вывести строку с пробелом + вывести длинну этой строки.
function fullName($name, $surname)
{
  echo "<p>$name $surname</p>";
  $full_name = $name . " " . $surname;
  // длина строки функцией strlen()
  echo "Длина строки '(strlen($full_name))'";
}
//задача:Создать инкриментирование ++ и умножение *= для вывода чисел от 1 до 5.
//а также вывести числа степеней числа 2 от 2 до 32.
function increment()
{
  $incA = 1;
  while ($incA <= 5) {
    echo $incA++;
  }
  echo "<br>";
  $incB = 1;
  while ($incB <= 5) {
    echo $incB *= 2;
  }
  echo "<br>";
  $incC = 2;
  while ($incC <= 32) {
    echo $incC **= 2;
  }
  echo "<br>";
}

//Проверить истинность
function isTrue()
{
  print abs(100.00 - 100); // 0 (false)
  print "zero"; // zero (true)
  print "false"; // false (true)
  print 0 + "true"; // 0 (false)
  print 0.000; // 0 (false)
  print "0.0"; // 0.0 (true)
  print strcmp("false", "False"); // 1 (true)
  print 0 <=> "0"; // 0 (false)
}
// задача: Создать функцию, которая выводит цикл- -50 до 50 циклом в сельсия.
function farengeitForCelsi()
{
  for ($i = -50; $i <= 50; $i++) {
    $result = ($i - 32) * 5 / 9; // Переводим температуру по формуле
    $result = round($result, 2); // Округляем результат до двух знаков после запятой
    echo "Температура по Фаренгейту $i = $result градусов по Цельсию\n";
  }
}

// задача: Создать функцию, которая выведет на экран города и населения.
$peapleUSA = ["New York" => 8175000, "Los Angeles" => 3790000, "Chicago" => 2695000, "Houston" => 2100000, "Philadelphia" => 1526000, "Phoenix" => 1445000, "San Antonio" => 1327000, "San Diego" => 1223000, "Dallas" => 1197816, "San Jose" => 945642];


function findPopulation($peapleUSA)
{
  echo "<ul>";
  $fullPeople = 0;
  foreach ($peapleUSA as $key => $value) {
    $fullPeople += $value;
    echo "<li>$key - $value</li>";
  }
  echo "<p>Общее количество людей: $fullPeople</p>";
  echo "</ul>";
}

//Отсортировать людей по возрастанию
$sortPeopleUSApopulatin = asort($peapleUSA);

//Отсортировать Города по алфовиту
$sortCityUSA = ksort($peapleUSA);

//создать функцию, которая принимает массив и добавляет в него новый элемент в ассоциацию

$students = ["Иван Говнюков" => ["grade" => "A+", "id" => 27123], "Петр Засранцев" => ["grade" => "B+", "id" => 818211]];

function addStudent($students, $grade, $id, $name, $mother, $father, $age_mother, $age_father, $food_1, $food_2, $food_3)
{
  $students[] = $name;
  $students[$name] = ["grade" => $grade, "id" => $id, "food" => ["morning" => $food_1, "day" => $food_2, "evening" => $food_3]];
  $students[$name] = ["parents" => ["mother" => $mother = "", "father" => $father = ""]];
  if (!$students[$name]["parents"]) {
    $students[$name]["parents"]["age"] = ["mother" => $age_mother, "father" => $age_father];
  }
}
;
// возвращаем дискриптор <img /> Принимаем в качестве аргумента URL и не обязательный аргумент alt, height и width
function img($url, $alt = "", $height = "", $width = "")
{
  return "<img src=\"$url\" alt=\"$alt\" height=\"$height\" width=\"$width\" />";
}
// задача: Изменить функцию, аргумент -имя . + сделать глобал переменнную что бы дополняло адрес.
$homePage = "https://www.php.net/";
function ImgAdress($url)
{
  return "<img src='" . $GLOBALS['homePage'] . $url . "' />";
}
//Создать класс Каждый екзепляр должен отдельный ингридиент блюда. И отслеживать Имя и цену ингридиента.
//Добавить метод изменения цены ингридиента.
class Ingredient
{
  public $name;
  public $price;
  public function __construct($name, $price)
  {
    $this->name = $name;
    $this->price = $price;
  }
  public function changePrice($price)
  {
    $this->price = $price;
  }
}
// Создать подкласс, производный от класса Entree.
// Этот подкласс должен принимать объекты типа Ingredient в виде символной строки с наименованиями ингредиентов.
// Ввести в этот подкласс метод, возвращающий общую стоимость блюда.
class Entree
{
  public $name;
  protected $ingredients = array();
  public function __construct($name, $ingredients)
  {
    if (!is_array($ingredients)) {
      throw new Exception("Error ingredients must be ARRAY ", 1);
    } else {
      $this->ingredients = $ingredients;
      $this->name = $name;
    }
  }
}

class EntreeWithIngredient extends Entree
{

  public function __construct($name, $ingredients)
  {

    $ingredientObject = array();
    foreach ($ingredients as $ingredient) {
      $ingredientObject[] = $ingredient;
    }
    parent::__construct($name, $ingredientObject);
  }
  public function getTotalPrice()
  {
    $totalCost = 0;
    foreach ($this->ingredients as $ingredient) {
      $totalCost += $ingredient->price;
    }
    return $totalCost;

  }
}
// Класс Игнрадиенты представляет отдельный ингредиент блюда и отслеживает его имя и цену
class Игнрадиенты
{
  public $Имя_Инградиентов; // Имя ингредиента
  public $Цена_Инградиентов; // Цена ингредиента

  // Конструктор класса Игнрадиенты, который инициализирует имя и цену ингредиента
  public function __construct($Имя_Инградиентов_с_запрорса, $Цена_Инградиентов_с_запрорса)
  {
    $this->Имя_Инградиентов = $Имя_Инградиентов_с_запрорса;
    $this->Цена_Инградиентов = $Цена_Инградиентов_с_запрорса;
  }

  // Метод для изменения цены ингредиента
  public function Метод_изменить_цену($Новая_цена)
  {
    $this->Цена_Инградиентов = $Новая_цена;
  }
}

// Класс Блюдо представляет блюдо и хранит его имя и массив ингредиентов
class Блюдо
{
  public $Готовое_блюдо; // Имя блюда
  protected $Инградиенты_блюда = array(); // Массив ингредиентов

  // Конструктор класса Блюдо, который инициализирует имя блюда и массив ингредиентов
  public function __construct($Готовое_блюдо_с_запроса, $Инградиенты_блюда_с_запроса)
  {
    // Проверка, является ли переданный параметр $Инградиенты_блюда_с_запроса массивом
    if (!is_array($Инградиенты_блюда_с_запроса)) {
      throw new Exception("Ошибка: Ингредиенты должны быть массивом");
    } else {
      $this->Инградиенты_блюда = $Инградиенты_блюда_с_запроса; // Инициализация массива ингредиентов
      $this->Готовое_блюдо = $Готовое_блюдо_с_запроса; // Инициализация имени блюда
    }
  }
}

// Класс Блюдо_с_Иградиентами является подклассом класса Блюдо и расширяет его функциональность
class Блюдо_с_Иградиентами extends Блюдо
{

  // Конструктор класса Блюдо_с_Иградиентами, который принимает имя блюда и массив ингредиентов
  public function __construct($Имя_блюда, $Инградиенты_блюда)
  {
    $Обьект_с_инградиентами = array(); // Создание массива для объектов ингредиентов
    // Проход по каждому элементу массива $Инградиенты_блюда
    foreach ($Инградиенты_блюда as $Отдельные_продукты) {
      $Обьект_с_инградиентами[] = $Отдельные_продукты; // Добавление каждого ингредиента в массив объектов ингредиентов
    }
    // Вызов конструктора родительского класса Блюдо с именем блюда и массивом объектов ингредиентов
    parent::__construct($Имя_блюда, $Обьект_с_инградиентами);
  }

  // Метод для вычисления общей стоимости всех ингредиентов блюда
  public function getTotalPrice()
  {
    $Общая_цена = 0; // Инициализация переменной для хранения общей стоимости
    // Проход по каждому ингредиенту в массиве ингредиентов
    foreach ($this->Инградиенты_блюда as $Отдельные_продукты) {
      $Общая_цена += $Отдельные_продукты->Цена_Инградиентов; // Добавление цены текущего ингредиента к общей стоимости
    }
    return $Общая_цена; // Возвращение общей стоимости всех ингредиентов
  }
}
// создать пространство имен для 'Игнрадиенты' и внести изменения во все дочерние элементы
// namespace Eat;
// use Eat\Игнрадиенты;
// use Eat\Блюдо_с_Иградиентами;

// напишите функцию process_form() выводящию на экран все параметры переданной формы и их значения. Все значения скалярные.
class ProcessForm
{
  public $noodle = array();
  public $sweet = array();

  // Метод для обработки параметров noodle из формы
  public function takeNoodle()
  {
    if (isset($_POST['noodle']) && is_array($_POST['noodle'])) {
      foreach ($_POST['noodle'] as $option) {
        $this->noodle[] = $option;
      }
    }
  }

  // Метод для обработки параметров sweet из формы
  public function takeSweet()
  {
    if (isset($_POST['sweet']) && is_array($_POST['sweet'])) {
      foreach ($_POST['sweet'] as $option) {
        $this->sweet[] = $option;
      }
    }
  }

  // Метод для отображения значений формы
  public function showFormValue()
  {
    $this->takeNoodle();
    $this->takeSweet();

    foreach ($this->noodle as $value) {
      echo "Form noodle: $value<br>";
    }
    foreach ($this->sweet as $value) {
      echo "Form sweet: $value<br>";
    }
  }
}

// Написать калькулятор

class Calculator
{
  public $input_1;
  public $input_2;
  public $operand;
  public $result;
  public $error;
  protected function getInput_1()
  {
    if (isset($_POST['Number_1'])) {
      if (is_numeric($_POST['Number_1'])) {
        $this->input_1 = $_POST['Number_1'];
        echo "Первое число: $this->input_1<br>";
      } else {
        $this->error = "Первое число должно быть цифрой";
      }
    } else {
      $this->error = "Первое число не может быть пустым";
    }
  }

  protected function getInput_2()
  {
    if (isset($_POST['Number_2'])) {
      if (is_numeric($_POST['Number_2'])) {
        $this->input_2 = $_POST['Number_2'];
        echo "Второе число: $this->input_2<br>";
      } else {
        $this->error = "Второе число должно быть цифрой";
      }
    } else {
      $this->error = "Второе число не может быть пустым";
    }
  }

  protected function getOperand()
  {
    if (isset($_POST['operation']) && $_POST['operation'] !== "") {
      $this->operand = $_POST['operation'];
    } else {
      $this->error = "Нужно выбрать действие с числом";
    }
  }
  public function getResult()
  {
    $this->getInput_1();
    $this->getInput_2();
    $this->getOperand();

    if ($this->error) {
      return $this->error;
    }

    switch ($this->operand) {
      case '+':
        $this->result = $this->input_1 + $this->input_2;
        break;
      case '-':
        $this->result = $this->input_1 - $this->input_2;
        break;
      case '*':
        $this->result = $this->input_1 * $this->input_2;
        break;
      case '/':
        if ($this->input_2 == 0) {
          $this->result = "Ошибка: деление на ноль";
        } else {
          $this->result = $this->input_1 / $this->input_2;
        }
        break;
      default:
        $this->result = "Неверная операция";
        break;
    }

    return $this->result;
  }

  // Метод для отображения HTML-формыpublic function displayForm() {
  public function displayForm()
  {
    $error = isset($this->error) ? $this->error : "";
    $result = isset($this->result) ? $this->result : "";
    $input1Value = isset($_POST['Number_1']) ? $_POST['Number_1'] : '';
    $input2Value = isset($_POST['Number_2']) ? $_POST['Number_2'] : '';
    $operation = isset($this->operand) ? $this->operand : '';

    $htmlNumber = <<<HTML
<div>
  <form name="calculator" method="POST" action="{$_SERVER['PHP_SELF']}">
    <p>$error</p>
    <input type="text" name="Number_1" placeholder="Введите первое число" value="$input1Value">
    <p></p>
    <select name="operation">
      <option value="" disabled selected>Выберите операцию</option>
      <option value="+" . (($operation == '+') ? 'selected' : '') . >+</option>
      <option value="-" . (($operation == '-') ? 'selected' : '') . >-</option>
      <option value="*" . (($operation == '*') ? 'selected' : '') . >*</option>
      <option value="/" . (($operation == '/') ? 'selected' : '') . >/</option>
    </select>
    <p></p>
    <input type="text" name="Number_2" placeholder="Введите второе число" value="$input2Value">
    <p>$result</p>
    <button type="submit">Рассчитать</button>
  </form>
</div>
HTML;
    echo $htmlNumber;
  }
}

// Написать сласс валидации. Класс доожен проверять Адрес отправителя и получателя. Размер посылки до 91см. вес до 68кг. Выдать Форматированую строку по результату.

class ValidateBox
{
  public $sender;
  public $recipient;
  public $weight;
  public $size = array();
  public $error;

  // Метод для проверки и получения адреса отправителя
  public function getSender()
  {
    if (isset($_POST['sender']) && $_POST['sender'] !== "") {
      $this->sender = $_POST['sender'];
    } else {
      $this->error = "Отправитель не может быть пустым";
    }
  }

  // Метод для проверки и получения адреса получателя
  public function getRecipient()
  {
    if (isset($_POST['recipient']) && $_POST['recipient'] !== "") {
      $this->recipient = $_POST['recipient'];
    } else {
      $this->error = "Получатель не может быть пустым";
    }
  }


  // Метод для проверки и получения размеров посылки
  public function getBoxSize()
  {
    if (isset($_POST['size']) && is_array($_POST['size'])) {
      foreach ($_POST['size'] as $dimension) {
        if (is_numeric($dimension) && $dimension <= 91) {
          $this->size[] = $dimension;
        } else {
          $this->error = "Размеры посылки должны быть цифрами и не больше 91см";
          break;
        }
      }
    } else {
      $this->error = "Размеры посылки не могут быть пустыми и должны быть массивом";
    }
  }

  // Метод для проверки и получения веса посылки
  public function getBoxWeight()
  {
    if (isset($_POST['weight']) && $_POST['weight'] !== "" && is_numeric($_POST['weight']) && $_POST['weight'] <= 68) {
      $this->weight = $_POST['weight'];
    } else {
      $this->error = "Вес посылки должен быть цифрой и не больше 68кг";
    }
  }

  // Метод для вызова всех проверок
  public function getResult()
  {
    $this->getSender();
    $this->getRecipient();
    $this->getBoxSize();
    $this->getBoxWeight();
  }
  // Метод для отображения формы и результатов
  public function displayForm()
  {
    $this->getResult();

    if ($this->error) {
      echo "<p>Ошибка: $this->error</p>";
    } else {
      $sizeString = implode(" x ", $this->size);
      echo <<<HTML
            <p>Отправитель: $this->sender</p>
            <p>Получатель: $this->recipient</p>
            <p>Размер посылки: $sizeString см</p>
            <p>Вес посылки: $this->weight кг</p>
HTML;
    }
  }
}
class pdo
{
  public $A = 1;
}

// Задача 1. Написать класс который извлечет блюда и отсортирует их по цене.
// Задача 2. Извлечет ТОЛЬКО те блюда у которых цена меньше чем в форме.
// Задача 3. Вывести результат поиска всех блюд и полей. Отдать их ДЖСОН в формате id, price, dish_name, spetion=true\false.
// Задача 4. Создать новую таблицу. id,name, phone, id-блюда пользователя. + конструктор ввода нового пользователя. id должен быть уникальным. 

class NewTable
{

  private $id;
  private $dish_name;
  private $id_dish;
  private $pdo;

  // Метод для генерации случайного id_dish
  public function MathRandom()
  {
    $this->id_dish = random_int(1, 10000000);
  }
  // Конструктор 
  public function __construct($pdo, $id, $dish_name)
  {
    $this->pdo = $pdo;
    $this->id = $id;
    $this->dish_name = $dish_name;
    $this->MathRandom();
  }



  public function CreateTable()
  {
    $sql = "CREATE TABLE IF NOT EXISTS dishes (
            id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            dish_name VARCHAR(30) NOT NULL,
            id_dish INT(10) UNSIGNED
        )";
    try {
      $stmt = $this->pdo->prepare($sql);
      $stmt->execute();
      echo "Таблица создана.\n";
    } catch (PDOException $e) {
      echo "Ошибка создания таблицы: " . $e->getMessage() . "\n";
    }
  }
}


class MySQLtest
{
  public $formParametr;
  public $sqlAnswer;
  private $pdo;
  public $data = array();

  public function getAllDishes($pdo)
  {
    $sql = "SELECT id, price, dish_name, spetion FROM dishes";
    try {
      $stmt = $pdo->prepare($sql);
      $stmt->bindParam(':id', $this->formParametr['id']);
      $stmt->bindParam(':price', $this->formParametr['price']);
      $stmt->bindParam(':dish_name', $this->formParametr['dish_name']);
      $stmt->bindParam(':spetion', $this->formParametr['spetion']);
      $stmt->execute();

      $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
      if ($result) {
        $this->sqlAnswer = $result;
        foreach ($result as $row) {
          $this->data[] = [
            "ID" => $row['id'],
            "Price" => $row['price'],
            "Dish Name" => $row['dish_name'],
            "Spetion" => $row['spetion'],
          ];
        }
        echo "Data complete: " . print_r($this->data, true) . "\n";
        return $this->data;
      } else {
        echo "Запись не найдена.\n";
      }
    } catch (PDOException $e) {
      echo "Ошибка выполнения запроса: " . $e->getMessage();
    }
  }

  public function getSortDishes($pdo)
  {
    $sql = "SELECT price FROM dishes WHERE price < :price";
    try {
      $stmt = $pdo->prepare($sql);
      $stmt->bindParam(':price', $this->formParametr['price']);
      $stmt->execute();
      $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
      if ($result) {
        $this->sqlAnswer = $result;
        echo "Данные: " . print_r($result, true) . "\n";
      } else {
        echo "Запись не найдена.\n";
      }
    } catch (PDOException $e) {
      echo "Ошибка выполнения запроса: " . $e->getMessage();
    }

  }
  // Конструктор класса
  public function __construct($pdo, $formParametr)
  {
    $this->pdo = $pdo;
    $this->formParametr = $formParametr;
  }


  public function getSqlSELECT($pdo)
  {
    // ВЫБРАТЬ цену, название В блюдах ГДЕ цена =:цена И название=:название СОРТИРОВКА цены ПОУБЫВАНИЮ
    $sql = "SELECT price, dish_name FROM dishes WHERE price =:price AND dish_name = :dish_name ORDER BY price DESC";
    try {
      // Подготовка запроса методом prepare()
      $stmt = $pdo->prepare($sql);
      // Привязка параметров
      $stmt->bindParam(':price', $this->formParametr['price']);
      $stmt->bindParam(':dish_name', $this->formParametr['dish_name']);
      // Выполнение запроса
      $stmt->execute();
      //запрос экранированием
      $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

      if ($result) {
        $this->sqlAnswer = $result;
        echo "Данные: " . print_r($result, true) . "\n";
      } else {
        echo "Запись не найдена.\n";
      }
    } catch (PDOException $e) {
      echo "Ошибка выполнения запроса: " . $e->getMessage();
    }
  }

}
class getFile
{
  private $fileURL;
  private $count = [];
  private $data = [];

  // Конструктор класса
  public function __construct($URL)
  {
    $this->fileURL = $URL;
    echo "Файл считан ";
  }

  // Метод для создания файла и считывания данных
  public function createFile()
  {
    if (file_exists($this->fileURL)) {
      $openFile = fopen($this->fileURL, 'rb');
      if ($openFile) {
        while (!feof($openFile)) {
          $line = trim(fgets($openFile));
          if ($line !== '') {
            $info = explode("|", $line);
            if (isset($info[0])) {
              $this->data[] = $info[0];
            }
          }
        }
        fclose($openFile);
        echo "Data complete: " . print_r($this->data, true) . "\n";
      } else {
        echo "Не удалось открыть файл.";
      }
    } else {
      echo "Файл не существует.";
    }
  }

  // Метод для подсчета email
  public function countEmail()
  {
    foreach ($this->data as $email) {
      if (isset($this->count[$email])) {
        $this->count[$email]++;
      } else {
        $this->count[$email] = 1;
      }
    }
  }

  // Метод для получения подсчитанных email
  public function getCount()
  {
    return $this->count;
  }
}
//Сделать счетчик обновлений страницы через сессию.

class Session
{
  private $count = 0;
  private $session;
  private $message = "Достигнут лимит количества обновлений страницы: $this->count";

  public function __construct()
  {
    $this->session = session_start();
  }

  public function getCount()
  {
    return $this->count;
  }

  public function setCount()
  {
    if ($this->count == 5 || $this->count == 10 || $this->count == 15) {
      echo $this->message;
      $this->count++;

    } elseif ($this->count == 20) {
      echo "Достигнут лимит количества обновлений страницы: $this->count";
      $this->session = session_destroy();
    } else {
      $this->count++;
    }
  }
}