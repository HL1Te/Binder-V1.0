function alerted() {
    // Получаем выбранные пользователем значения
    var func = document.getElementById("func").value;
    var key = document.getElementById("key").value;

    // Формируем надпись "bind" + #func + #key
    var bindString = "bind" + " " + key + " " + func;

    // Выводим отладочную информацию
    console.log("func=", func);
    console.log("key=", key);
    console.log("bindString=", bindString);

    alert(`Your command: ${bindString}`)
}