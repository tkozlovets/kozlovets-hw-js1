// // /*
// // Домашка:
// //
// // 1.  Ви прийшли в Макдональдз з трьома друзями.
// //     Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
// //     Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
// //     то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
// //     то виводити в консоль текст "Ми йдемо в інше кафе"
// //     (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)*/
// //
// // // let hamburger = 1;
// // // let fries = 1;
// // //
// // // if(hamburger>=4 && fries>=1){
// // //     console.log('Ми поїли')}
// // //
// // // else
// // // {console.log('Ми йдемо в інше кафе')}
// //
// //
function checkFoodAvailability(hamburger, potatoe) {
    if (hamburger >= 4 && potatoe >= 1) {
        console.log("Ми поїли");
    } else {
        console.log("Ми йдемо в інше кафе");
    }
}
checkFoodAvailability(4, 1);
// //
// //
// //
// // // 2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900
// // // включно.
// // //     Результат виводити в консоль.
// //
// // // let productPrice = 1200;
// // //
// // // if (productPrice >= 1000 && productPrice <=1900)
// // //
// // // {console.log('В діапазоні')}
// // // else
// // // {console.log('Поза діапазоном')}
// //
// //
function checkPrice(price) {
    if (price >= 1000 && price <= 1900) {
        console.log('Ціна товару знаходиться в діапазоні.');
    } else {
        console.log('Ціна товару не знаходиться в діапазоні.');
    }
}

checkPrice(500);
// // //
// // //
// // // // 3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
// // // //     Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
// // // //     Результат виводити в консоль.
// // //
// // // //     let productPrice = 1200;
// // // //
// // // // if (productPrice < 1000 || productPrice > 1900)
// // // //
// // // // {console.log('Не знаходиться')}
// // // // else
// // // // {console.log('Знаходиться')}
// // //
function checkPrice(price) {
    if (!(price > 1000 && price < 1900)) {
        console.log("Не знаходиться");
    } else {
        console.log("Знаходиться");
    }
}

checkPrice(1200);
//
function checkPrice1(price) {
    if (price < 1000 || price > 1900) {
        console.log("Не знаходиться");
    } else {
        console.log("Знаходиться");
    }
}
checkPrice(11000);
// //
// //
// // // 4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
// // //     Результат виводити в консоль.
// //
// // //     let num = 1;
// // //
// // // if(num === 1){
// // //     console.log('Зима')
// // // } else if (num === 2){
// // //     console.log('Весна')
// // // } else if (num === 3){
// // //     console.log('Літо')
// // // } else if (num === 4){
// // //     console.log('Осінь')
// // // } else {
// // //     console.log('Щось інше')
// // // }
// //
function seasonDisplay(seasonNumber) {
    if (seasonNumber === 1) {
        console.log("Весна");
    } else if (seasonNumber === 2) {
        console.log("Літо");
    } else if (seasonNumber === 3) {
        console.log("Осінь");
    } else if (seasonNumber === 4) {
        console.log("Зима");
    } else {
        console.log("Щось інше");
    }
}
seasonDisplay(3);
// //
// // // 5.  Задано 3 числа (a, b, c), які не рівні між собою.
// // //     Визначити середнє мід цими трьома числами
// // //     (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
// // //     Використати вкладені оператори if
// // //     Результат виводити в консоль.
// //
// // let a = 6;
// // let b = 3;
// // let c = 20;
// //
// // if (a > b && a < c || a < b && a > c)
// // {console.log('a')}
// // else if (b > a && b < c || b < a && b > c)
// // {console.log('b')}
// // else
// // {console.log('c')}
//
function midNumber(a, b, c) {
    if (a > b && a < c || a < b && a > c)
{console.log('a')}
else if (b > a && b < c || b < a && b > c)
{console.log('b')}
else
{console.log('c')}
}

midNumber(7, 10, 4)
// //
// //
// // // 6.  Задано номер дня тижня.
// // //     За заданим номером вивести назву дня тижня використовуючи switch.
// // //     Результат виводити в консоль.
// //
// //         let dayName = 3;
// //
// //     switch (dayName) {
// //         case 1:
// //             console.log('Понедельник');
// //             break;
// //         case 2:
// //             console.log('Вторник');
// //             break;
// //         case 3:
// //             console.log('Среда');
// //             break;
// //         case 4:
// //             console.log('Четверг');
// //             break;
// //         case 5:
// //             console.log('Пятница');
// //             break;
// //         case 6:
// //             console.log('Суббота');
// //             break;
// //         case 7:
// //             console.log('Воскресенье');
// //             break;
// //
// //     }
function dayNameDisplay(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("Понеділок");
            break;
        case 2:
            console.log("Вівторок");
            break;
        case 3:
            console.log("Середа");
            break;
        case 4:
            console.log("Четвер");
            break;
        case 5:
            console.log("П'ятниця");
            break;
        case 6:
            console.log("Субота");
            break;
        case 7:
            console.log("Неділя");
            break;
        default:
            console.log("Некоректний номер дня тижня");
    }
}

dayNameDisplay(3);
//
// // 7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
// //     Математичні операції для обчислення: "+", "-", "*", "/".
// //     Результат виводити в консоль.
//
//     let operand1 = 5;
//     let operand2 = 10;
//     let sign = "/";
//
//     switch (sign) {
//         case "+":
//             console.log(operand1 + operand2);
//             break;
//         case "-":
//             console.log(operand1 - operand2);
//             break;
//         case "*":
//             console.log(operand1 * operand2);
//             break;
//         case "/":
//             console.log(operand1 / operand2);
//             break;
//
//     }

function calculator(sign, operand1, operand2) {
    let result;

    switch (sign) {
        case "+":
            result = operand1 + operand2;
            break;
        case "-":
            result = operand1 - operand2;
            break;
        case "*":
            result = operand1 * operand2;
            break;
        case "/":
            result = operand1 / operand2;
            break;

            return;
    }
    console.log(result);
    }
    calculator("+", 2, 3)
// //
// // // 8. Використовуючи цикл for перемістити значення від 1 до 5 у масив myArray.
//
// let myArray = [];
//
// for (let i = 1; i <= 5; i++) {
//     myArray.push(i);
// }
//
// console.log(myArray);
// //
// // 9. Напишіть 2 цикли.
// //    За допомогою першого передайте парні числа від 1 до 9 у myArray за допомогою циклу for.
// //    За допомогою другого передайте непарні числа від 1 до 9 у myArray за допомогою циклу for.
// //
// // 10. Оголоcіть та ініціалізуйте змінну total = 0.
// //     Використовуйте цикл for, щоб додати значення кожного елемента масиву myArr до підсумку.
// //     const myArr = [2, 3, 4, 5, 6];
// //
// // 11. Напишіть код, котрий виведе в консоль кожен піделемент в arr по одному.
// //
// //     const arr = [ [1, 2], [3, 4], [5, 6] ];
// //
// //     Console output:
// //     1
// //     2
// //     3
// //     4
// //     5
// //     6
// //
// // 12. Доповніть код нижче, так щоб в консоль повертався результат множення усіх чисел у підмасивах arr.
// //     Використайте для цього вкладені цикли for.
// //
// //     Наприклад:
// //     const arr = [[1], [2], [3]]  >  console.log(product) має повернути 6
// //     const arr = [[1, 2], [3, 4], [5, 6, 7]]  >  console.log(product) має повернути 5040
// //     const arr = [[5, 1], [0.2, 4, 0.5], [3, 9]]  >  console.log(product) має повернути 54
// //
// //     const arr = [[1, 2], [3, 4], [5, 6, 7]];
// //
// //     let product = 1;
// //
// //     // тут має бути ваше рішення
// //
// //     console.log(product);
//
// // 13.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.
//
//     let word = "Butterfly";
// let regexp = /[aeiouyAEIOUY]/g;
//
// console.log(word.replace(regexp, ''));

function removeVowels(word) {
    let result = word.replace(/[aeiouyAEIOUY]/g, '');
    return result;
}
console.log(result);
}
removeVowels(Butterfly);
function removeVowels(word) {
    let regExp = /[aeiouyAEIOUY]/g;

    let newWord =word.replace(regExp, '');

    return newWord;
}

console.log(newWord);

removeVowels(Dragonfly);
//
//
//
// // 14.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
// //     так щоб в консоль виводився результат обчислень з правильним закінченням.
// //     Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.
//
//     Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)
//
// let meters = 300;
// let kilometers = meters/1000;
//
// if (kilometers === 1){
//     console.log(meters + " метрів це 1 кілометр.");
// } else {
//     console.log(meters + " метрів це " + kilometers.toFixed(1) + " кілометра.");
// }
//
function convertMetersToKilometers(meters) {

    if (meters >= 0) {

        let kilometers = meters / 1000;

        if (kilometers === 1) {
            console.log(`${meters} метр це 1 кілометр.`);
        } else {
            console.log(`${meters} метрів це ${kilometers.toFixed(3)} кілометра.`);
        }
    } else {
        console.log("Будь ласка, введіть додатне число метрів.");
    }
}
convertMetersToKilometers(1000);