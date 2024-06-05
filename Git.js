//переход в папку
cd ~/Desktop
cd my-project

//создание новой папки
mkdir my-project

//создание файла с текстом
echo "Some text" > file.txt

//список файлов в папке
ls

//чтение файла
cat file.txt

//удаление файла
rm file.txt

//узнать текущую  папку
pwd

//создать новый репозиторий
git init

//посмотреть статус в индексе (stagin area)
git status

//добавить файл в инлекс
git add file.txt

//добавить все измененные и новые файлы
git add .

//сохранить в репозиторий с индекса
git commit

//загрузить с репозитория в рабочую область
git checkout

//комит с записью изменений
git commit -m "message"

//история изменей (коммитов)
git log

//переход по хешу
git checkout хеш или branch

//прочитать файл
git cat-file -p Хеш

//создание новой ветки
git branch ####

//переход на новую ветку
git checkout ####

//создать ветку и перейти туда же
git checkout -b ####

//переиминовать текущую ветку
git branch -m ####

//удалить ветку ( сначало с нее выйти)
git branch -d ####

//проверить последние изменения
git pull

//обьеденить ветки
git merge ####

//отправить в облако
git push


//


//