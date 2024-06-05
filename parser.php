composer require simple-html-dom/simple-html-dom

composer require imangazaliev/didom
require_once './vendor/autoload.php';
use DiDom\Document;



ini_set('max_execution_time', '10000');// устанавливает максимальное время выполнения
set_time_limit(0); //снимает ограничение на время выполнения скрипта
ini_set('memory_limit', '2048M');//лимит оперативной памяти (в мегабайтах), выделяемой на скрипт
ignore_user_abort(true);//если в браузере оборвут скрипт, он продолжался дальше

Символы и литералы:
Любой символ соответствует самому себе, например, a соответствует символу a в строке.
Специальные символы (например, ., *, +, ?, |, ^, $, (, ), [, ], {, }) имеют особое значение.

Квантификаторы:
* — 0 или более раз.
+ — 1 или более раз.
? — 0 или 1 раз.
{n} — ровно n раз.
{n,} — n или более раз.
{n,m} — от n до m раз.

Мета-символы:
. — любой символ, кроме новой строки.
\d — цифра [0-9].
\D — не цифра.
\w — буквенно-цифровой символ или подчеркивание [a-zA-Z0-9_].
\W — не буквенно-цифровой символ.
\s — пробельный символ (включая пробел, табуляцию, новую строку).
\S — не пробельный символ.

Якоря:
^ — начало строки.
$ — конец строки.
\b — граница слова.
\B — не граница слова.

Группировка и захват:
() — группировка и захват.
(?:) — группировка без захвата.

Альтернация:
| — логическое ИЛИ (или).


//парсинг HTML страниц с помощью регулярок
preg_match('#регулярка#', $str, $match);// мы будем получать содержимое нужных нам тегов и атрибутов HTML страницы
preg_replace('#регулярка#', '', $str);//очищать тексты от лишних тегов и символов
preg_match('#регулярка#s', $str, $match);//корректно работали на HTML страницах, имеющих переносы строк
preg_match('#регулярка#su', $str, $match);//парсили русские буквы
preg_match_all('#<p[^>]*>(.+?)</p>#su', $str, $matches, PREG_PATTERN_ORDER);//получит массив текстов всех абзацев
preg_match_all('#src\s*=\s*"(.+?)"#su', $str, $matches, PREG_PATTERN_ORDER);//вокруг равно могут быть пробелы
preg_match('#<title>(.+?)</title>#su', $str, $match);// Мы будем получать содержимое тега <title>
preg_replace('#<script[^>]*>.*?</script>#su', '', $str);// Очищать текст от лишних тегов <script> и их содержимого
preg_match('#<meta[^>]*name="description"[^>]*content="([^"]*)"#su', $str, $match);// Извлечь содержимое атрибута content мета-тега с name="description"
preg_match('#<a\s+href\s*=\s*"([^"]+)"[^>]*>#su', $str, $match);// Извлечь ссылку из атрибута href тега <a>, вокруг равно могут быть пробелы
preg_match_all('#<h1[^>]*>(.+?)</h1>#su', $str, $matches, PREG_PATTERN_ORDER);// Получить массив текстов всех заголовков первого уровня <h1>
preg_match_all('#<img[^>]*src\s*=\s*"([^"]+)"[^>]*>#su', $str, $matches, PREG_PATTERN_ORDER);// Получить массив ссылок на изображения из атрибутов src тегов <img>
preg_match_all('#<div[^>]*class\s*=\s*"(.*?)"[^>]*>#su', $str, $matches, PREG_PATTERN_ORDER);// Извлечь классы из тегов <div>, вокруг равно могут быть пробелы
preg_match_all('#<span[^>]*id\s*=\s*"(.*?)"[^>]*>#su', $str, $matches, PREG_PATTERN_ORDER);// Извлечь id из тегов <span>, вокруг равно могут быть пробелы
preg_match_all('#<ul[^>]*>(.*?)</ul>#su', $str, $matches, PREG_PATTERN_ORDER);// Извлечь все элементы списка из тегов <ul>
preg_match_all('#<li[^>]*>(.*?)</li>#su', $str, $matches, PREG_PATTERN_ORDER);// Получить массив текстов всех элементов списка <li>
preg_match_all('#<form[^>]*action\s*=\s*"(.*?)"[^>]*>#su', $str, $matches, PREG_PATTERN_ORDER);// Извлечь ссылки на обработчики форм из атрибутов action тегов <form>
preg_match_all('#<input[^>]*name\s*=\s*"(.*?)"[^>]*>#su', $str, $matches, PREG_PATTERN_ORDER);// Извлечь имена полей ввода из атрибутов name тегов <input>
preg_match_all('#<table[^>]*>(.*?)</table>#su', $str, $matches, PREG_PATTERN_ORDER);// Извлечь содержимое всех таблиц из тегов <table>
preg_match_all('#<tr[^>]*>(.*?)</tr>#su', $str, $matches, PREG_PATTERN_ORDER);// Извлечь строки всех таблиц из тегов <tr>
preg_match_all('#<td[^>]*>(.*?)</td>#su', $str, $matches, PREG_PATTERN_ORDER);// Извлечь ячейки всех таблиц из тегов <td>


$data = file_get_contents('http://127.0.0.1:5500/styles.css');
file_put_contents('siteFlover/styles.css', $data);


$document = new Document('http://127.0.0.1:5500/targ.html', true);

echo $elem->text(); // возвращает текстовое содержимое элемента.
echo $elem->innerHtml(); //  возвращает внутренний HTML-код элемента, исключая сам элемент 
echo $elem->html(); // возвращает HTML-код, включая сам элемент.

// все ссылки
$document->find('a');

// любой элемент с id = "foo" и классом "bar"
$document->find('#foo.bar');

// любой элемент, у которого есть атрибут "name"
$document->find('[name]');

// эквивалентно
$document->find('*[name]');

// поле ввода с именем "foo"
$document->find('input[name=foo]');
$document->find('input[name=\'foo\']');
$document->find('input[name="foo"]');

// поле ввода с именем "foo" и значением "bar"
$document->find('input[name="foo"][value="bar"]');

// поле ввода, название которого НЕ равно "foo"
$document->find('input[name!="foo"]');

// любой элемент, у которого есть атрибут,
// начинающийся с "data-" и равный "foo"
$document->find('*[^data-=foo]');

// все ссылки, у которых адрес начинается с https
$document->find('a[href^=https]');

// все изображения с расширением png
$document->find('img[src$=png]');

// все ссылки, содержащие в своем адресе строку "example.com"
$document->find('a[href*=example.com]');

// все ссылки, содержащие в атрибуте data-foo значение bar отделенное пробелом
$document->find('a[data-foo~=bar]');

// текст всех ссылок с классом "foo" (массив строк)
$document->find('a.foo::text');

// эквивалентно
$document->find('a.foo::text()');

// адрес и текст подсказки всех полей с классом "bar"
$document->find('a.bar::attr(href|title)');

// все ссылки, которые являются прямыми потомками текущего элемента
$element->find('> a');

$elem = $document->find('main');
$link = [];
//Получите адреса и тексты ссылок в виде следующего двухмерного массива:
foreach ($elem as $e) {
  $elem_2 = $e->find('img');
  foreach ($elem_2 as $e) {
    $link[] = ['src' => $e->attr('src'), 'alt' => $e->text()];
  }
}


//вывести на экран
echo '<pre>';
print_r($link);
echo '</pre>';



$document = new Document('http://127.0.0.1:5500/targ.html', true);
// Функция для нормализации URL
function normalize_url($base_url, $relative_url) {
    // Разбираем базовый URL
    $base_parts = parse_url($base_url);
    if (!isset($base_parts['path'])) {
        $base_parts['path'] = '/';
    }

    // Если относительный URL уже является абсолютным, просто возвращаем его
    if (parse_url($relative_url, PHP_URL_SCHEME) !== null) {
        return $relative_url;
    }

    // Если относительный URL начинается с '/', он является абсолютным относительно корня сайта
    if ($relative_url[0] === '/') {
        return $base_parts['scheme'] . '://' . $base_parts['host'] . $relative_url;
    }

    // Разбиваем базовый путь на сегменты
    $base_path_segments = explode('/', $base_parts['path']);
    array_pop($base_path_segments); // Убираем последний сегмент, так как это файл

    // Разбиваем относительный путь на сегменты
    $relative_path_segments = explode('/', $relative_url);

    // Нормализуем путь
    foreach ($relative_path_segments as $segment) {
        if ($segment === '..') {
            array_pop($base_path_segments);
        } elseif ($segment !== '.' && $segment !== '') {
            $base_path_segments[] = $segment;
        }
    }

    // Собираем нормализованный путь
    $normalized_path = implode('/', $base_path_segments);
    return $base_parts['scheme'] . '://' . $base_parts['host'] . '/' . ltrim($normalized_path, '/');
}
$link = [];
for ($i = 1; $i <= 9; $i++) {
  $document = new Document("https://terravape.com.ua/ehlektronnye-sigarety/?page=$i", true);

  // Находим все элементы с классом .product-grid
  $products = $document->find('.product-grid .product-thumb');


  foreach ($products as $product) {
    // Извлекаем ссылку на продукт
    $linkElement = $product->first('a');
    $linkHref = $linkElement ? $linkElement->attr('href') : null;

    // Извлекаем название продукта
    $nameElement = $product->first('.product-name');
    $name = $nameElement ? $nameElement->text() : null;

    // Извлекаем цену продукта
    $priceElement = $product->first('.price_no_format');
    $price = $priceElement ? $priceElement->text() : null;

    // Извлекаем URL изображения
    $imageElement = $product->first('img');
    $imageUrl = $imageElement ? $imageElement->attr('src') : null;

    // Скачиваем и сохраняем изображение
    if ($imageUrl) {
      // Получаем имя файла из URL
      $imageFileName = basename(parse_url($imageUrl, PHP_URL_PATH));
      // Скачиваем изображение
      $imageData = file_get_contents($imageUrl);
      // Сохраняем изображение в папку 'images'
      file_put_contents('images/' . $imageFileName, $imageData);
    }
    $links[] = [
      'link' => $linkHref,
      'name' => $name,
      'price' => $price,
      'image' => $imageUrl,
    ];

  }
}

// Преобразование массива данных в JSON
$jsonData = json_encode($links, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

// Запись данных в файл
file_put_contents('file-name.txt', $jsonData);


