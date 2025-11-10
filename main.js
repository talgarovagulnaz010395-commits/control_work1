// 1) Напишите функцию, которая проверяет, содержит ли строка только цифры. Используйте регулярные выражения

const containsOnlyDigits = (str) => {
    const regExp =/^\d+$/ ;
    return regExp.test(str) ;
}
console.log(containsOnlyDigits("12345")); // Выведет true
console.log(containsOnlyDigits("12a45")); // Выведет false

// 2) Напишите функцию, которая каждую секунду выводит в консоль сообщение "Прошла секунда". Используйте setInterval

let count = 0;

setInterval(() => {
    console.log("Прошла секунда");
    count++;

} , 1000);

// 3) Вывести числа от 1 до 10 с интервалом в 1 секунду, затем остановить.
const count2 = () => {
    let i =1 ;
    const interval = setInterval(() => {
        console.log(i);
        i++ ;
        if (i>10) {
            clearInterval(interval);
        }
    }, 1000);
}
count2();

// 4) Создать блок 150 на 150 пикселей и получить его через дом элементы при нажатии на которую будет меняться его
// задний фон при повторном нажатии будет убираться цвет заднего фона - выполните эту задачу с использованием
// classList и его методов
//
// Количество баллов за задачу: 9
    const box = document.querySelector('#colorBox');

    box.addEventListener('click', (e) => {
        box.classList.toggle('active');
    })
// 5) Отправить GET запрос на такой JSON
// Используйте XHR и выведи полученные данные в консоль

const xhr = new XMLHttpRequest();
    xhr.open("GET", "data.json", true);
    xhr.onload = () => {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            console.log(data) ;
        } else {
            console.log("Ошибка запроса:" , xhr.status);
        }
    } ;
    xhr.send();