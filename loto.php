<?php

$myNumber = [1, 27, 24, 17, 36, 46];

function generateLotoNumbers() {
    $numbers = [];
    while (count($numbers) < 6) {
        $num = random_int(1, 49);
        if (!in_array($num, $numbers)) {
            $numbers[] = $num;
        }
    }
    return $numbers;
}
$attempts = 0;
$found = false;
while (!$found) {
    $attempts++;
    $loto = generateLotoNumbers();

    sort($loto);
    sort($myNumber);

    if ($loto === $myNumber) {
        $found = true;
        echo "Совпадение найдено после $attempts попыток!\n";
        echo "Выигрышные номера: " . implode(", ", $loto) . "\n";
    }

    if ($attempts % 100000 == 0) {
        echo "Попыток: $attempts\n";
    }
}

// function deleteDIR($dir) {
//     if (!file_exists($dir)) {
//         echo "Папка $dir не найдена.\n";
//         return false;
//     }

//     if (!is_dir($dir)) {
//         echo "$dir не является папкой.\n";
//         return false;
//     }

//     $items = new RecursiveIteratorIterator(
//         new RecursiveDirectoryIterator($dir, RecursiveDirectoryIterator::SKIP_DOTS),
//         RecursiveIteratorIterator::CHILD_FIRST
//     );

//     foreach ($items as $item) {
//         if ($item->isDir()) {
//             rmdir($item->getRealPath());
//             echo "Папка " . $item->getRealPath() . " удалена.\n";
//         } else {
//             unlink($item->getRealPath());
//             echo "Файл " . $item->getRealPath() . " удален.\n";
//         }
//     }

//     if (rmdir($dir)) {
//         echo "Папка $dir удалена.\n";
//     } else {
//         echo "Не удалось удалить папку $dir.\n";
//     }
// }

