document.addEventListener("DOMContentLoaded", () => {
    let languages = ["en", "ru"];
    let lang = languages[0];

    document.querySelector("#tbtn").onclick = () => {
        if (lang === languages[0]) {
            lang = languages[1];
            document.getElementById("tbtn").textContent =
            "- - - - - -English- - - - - -";
            document.getElementById("cbrctitle").textContent =
             "Редактор рецептов для бота-заводчанина";
            document.getElementById("dwnldbtn").textContent =
             "Получить программное обеспечение из проверенного хранилища";
             document.getElementById("threesteps").innerHTML =
              "1. Выберите или создайте новый .json файл<br>2. Редактируйте существующий файл в программе<br>3. Правой кнопкой по полю там где нужно вводить ID предмета можно выбрать предмет и не писать его UUID очень долго";
            document.getElementById("toaddownitems").innerHTML =
            "ДОБАВИТЬ СВОЮ СОБСТВЕННОСТЬ<br>↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓";
            document.getElementById("additemsinstr1").innerHTML =
            "1. Перейдите в каталог sm-cbrc/craftables/craftables.json и добавьте свой предмет<br>(Это может быть полезно если вы делаете рецепт со своим собственным объектом или объектом из модификаций)<br>";
            document.getElementById("additemsinstr2").innerHTML =
            "2. Добавьте свой объект<br>↓ ↓ ↓ ↓ ↓ ↓";
            
        }
        else
        {
            window.location.reload(true);
        }
    };
});
