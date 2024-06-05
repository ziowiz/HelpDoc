<?php
require_once './vendor/autoload.php';
use DiDom\Document;

ini_set('max_execution_time', '10000');// устанавливает максимальное время выполнения
set_time_limit(0); //снимает ограничение на время выполнения скрипта
ini_set('memory_limit', '2048M');//лимит оперативной памяти (в мегабайтах), выделяемой на скрипт
ignore_user_abort(true);//если в браузере оборвут скрипт, он продолжался дальше
// class Parser {
//     private $url;
//     private $document;
//     private $plyrItem;
//     private $linkSong;
//     private $linkName;
//     private $musicFileName;

//     public function __construct($url) {
//         $this->url = $url;
//         $this->document = $this->loadDocument($url);
//     }

//     private function loadDocument($url) {
//         try {
//             return new Document($url, true);
//         } catch (Exception $e) {
//             echo "Ошибка загрузки документа: " . $e->getMessage();
//             return null;
//         }
//     }

//     public function findWebSite() {
//         if ($this->document) {
//             $this->plyrItem = $this->document->find('.plyr-item');
//             $this->load();
//         } else {
//             echo "Документ не был загружен.";
//         }
//     }

//     private function load() {
//         foreach ($this->plyrItem as $findFirstLink) {
//             $this->processPlyrItem($findFirstLink);
//         }
//     }

//     private function processPlyrItem($findFirstLink) {
//         $linkPlyrItem = $findFirstLink->first('a.download_btn');
//         $linkPlayrDocument = $linkPlyrItem->attr('href');
//         $document2 = $this->loadDocument($this->url . $linkPlayrDocument);

//         if ($document2) {
//             $this->linkSong = $this->extractLinkSong($document2);
//             $this->linkName = $this->extractLinkName($document2);
//             $this->saveMusic();
//         } else {
//             echo "Не удалось загрузить документ по ссылке: $linkPlayrDocument";
//         }
//     }

//     private function extractLinkSong($document) {
//         $linkPlyrItem2 = $document->first('a.download_btn');
//         return $linkPlyrItem2->attr('href');
//     }

//     private function extractLinkName($document) {
//         $className = $document->first('.plyr-item.main_song');
//         $classNameSong = $className->first('.name');
//         return $classNameSong->text();
//     }

//     private function saveMusic() {
//         $this->musicFileName = basename(parse_url($this->linkName . ".mp3", PHP_URL_PATH));
//         $musicData = file_get_contents($this->linkSong);

//         if ($musicData !== false) {
//             file_put_contents('music/' . $this->musicFileName, $musicData);
//             echo "Музыка сохранена: {$this->musicFileName}\n";
//         } else {
//             echo "Не удалось загрузить музыку с {$this->linkSong}\n";
//         }
//     }
// }


for ($i = 2; $i <= 10; $i++) {
    $url = "https://mp3xa.cc/hits/page/$i/";
    // Загрузка HTML-документа.
    $document = new Document($url, true);
    echo "Сайт загружен\n";
    //Это нужный плейлист.


    // Находим все элементы с классом .plyr-item
    $plyrItem = $document->find('.plyr-item');
    echo "Элементы .plyr-item найдены\n";



    foreach ($plyrItem as $findFirstLink) {
        echo "foreach по .plyr-item начат\n";
        // Находим все элементы с классом.download_btn В которых есть ссылка
        $LinkPlyrItem = $findFirstLink->first('a.download_btn');

        //Назначаем ссылку для создания нового документа
        $LinkPlayrDocument = $LinkPlyrItem->attr('href');
        echo "Ссылка найдена LinkPlayrDocument\n";

        // Загрузка HTML-документа номер два.
        $pageNomberTwo = new Document($url . $LinkPlayrDocument, true);
        echo "Вторая страница загружена pageNomberTwo\n";

        // Находим все элементы с классом .download_btn
        $LinkPlyrItem2 = $pageNomberTwo->first('a.download_btn');
        echo "Элементы LinkPlyrItem2 с классом .download_btn найдены\n";

        //Находим ссылку на сам трек
        $linkSong = $LinkPlyrItem2->attr('href');

        //Ищем блок с именем, потом поле имени, Забираем имя песенки
        $className = $pageNomberTwo->first('.plyr-item.main_song');
        $classNameSong = $className->first('.name');
        $linkName = $classNameSong->text();



        // Получаем имя файла музыки из ссылки
        $musicFileName = basename(parse_url($linkName . ".mp3", PHP_URL_PATH));
        echo "$linkName из ссылки получено musicFileName\n";

        // Скачиваем музыку
        $musicData = file_get_contents($linkSong);
        if ($musicData === false) {
            echo "Не удалось загрузить музыку с $linkSong\n";
            continue;
        }
        echo "Загрузка файла началась.\n";

        // Сохраняем музыку в папку 'music'
        file_put_contents('music/' . $musicFileName, $musicData);
        echo "Музыка сохранена: $musicFileName.mp3\n";
        echo "i=$i ";
        echo "Начинаем новый цикл пиратсва... АэррРРрРРр....";


    }
    echo "foreach $i по .plyr-item закончен\n";
}
echo "Конец скрипта\n";