<?php
// Базовый класс исключения, наследующий от встроенного класса Exception
class BaseException extends Exception
{
  // Метод для логирования ошибки
  public function logError()
  {
    $timestamp = time();
    $errorMessage = " \n"; // Получение сообщения об ошибке
    $errorMessage .= "Новый лог " . date("Y-m-d H:i:s", $timestamp) . "\n"; // Получение сообщения об ошибке
    $errorMessage .= "Ошибка: " . $this->getMessage() . "\n"; // Получение сообщения об ошибке
    $errorMessage .= "Код ошибки: " . $this->getCode() . "\n"; // Получение кода ошибки
    $errorMessage .= "Файл: " . $this->getFile() . "\n"; // Получение имени файла, в котором возникло исключение
    $errorMessage .= "Строка: " . $this->getLine() . "\n"; // Получение номера строки, в которой возникло исключение
    $errorMessage .= "Трассировка: " . $this->getTraceAsString() . "\n"; // Получение трассировки стека в виде строки
    // Вывод сообщения об ошибке в консоль
    echo $errorMessage;
    // Путь к файлу для логирования ошибок (в той же директории, что и исполняемый файл)
    $logFilePath = __DIR__ . '/error.txt';
    // Логирование сообщения об ошибке в файл, добавление сообщения в конец файла
    file_put_contents($logFilePath, $errorMessage, FILE_APPEND);

  }
}

echo "Старт ООП\n";

class User
{
  public $name = "По умолчанию нет имени";
  public $age = "По умолчанию нет возраста";
  public $face = array();
  public function __construct($name, $age, $face)
  {
    $this->name = $name;
    $this->age = $age;
    if (!is_array($face)) {
      throw new BaseException(
        "Параметр face должен быть массивом",
        1
      );

    } else {
      $this->face = $face;
    }
  }

  public function getFullInfo()
  {
    return $this->name . " " . $this->age . " " . $this->face["eyes"] . " " . $this->face["hair"];
  }
}
try {
  $anna = new User("Анна", 25, "blue");
  echo "$anna->name\n";
  echo "$anna->age\n";
  echo $anna->face["eyes"];
  echo $anna->getFullInfo();
} catch (BaseException $e) {
  // Обработка исключения и логирование
  $e->logError(); // Вызов метода logError для логирования ошибки
}


