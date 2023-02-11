// < !--
// 1. Создать функцию calculate(operand1, operand2, sign), где operand1 и operand2 — два числа, sign — знак арифметической операции.
//    Функция должна расчитывать результат операции, исходя из переданного ей знака.
//    Функция должна проверять корректность введенных чисел и знака операции.
//    Все аргументы для функции принять от пользователя.

//     2. Создать функцию, возводящую число в степень, число и сама степень вводится пользователем

// 3.  Создать игру "Камень-Ножницы-Бумага".
//         Выбор компьютера определяется строкой:
// "var computerChoice = Math.random();
// alert(computerChoice); ".
// Math.random() выдает произвольное число в промежутке от 0 до 1, на основании этого можно построить принцип выбора решения компьютера.

//     4. Напишите функцию, которая возвращает n - е число Фибоначчи.Для решения используйте цикл.

//     5. Зробіть так, щоб користувач вводив різний текст для кожної комірки prompt//

// function drawTable(col, row, text) {
//     document.write('<table border="1">');
//     for (let i = 0; i < row; i++) {
//         document.write('<tr>')
//         for (let i = 0; i < col; i++) {
//             document.write(`<td>${text}</td>`)
//         }
//         document.write('</tr>')
//     }
//     document.write('</table>')
// }

//Задание 1

// const a = +prompt('operand1');
//         const b = +prompt('operand2');
//         const c = prompt('sign');

//         function calculate(a, b, c) {
//             if (typeof a == 'number' && typeof b == 'number') {
//                 switch (c) {
//                     case "+": console.log(a + b); break;
//                     case "-": console.log(a - b); break;
//                     case "*": console.log(a * b); break;
//                     case "/": console.log(a / b); break;
//                     default: console.log("Знак операции введен не правильно"); break;
//                 }
//             } else {
//                 console.log('Цифры введены не корректно');
//             }

//         }
//         calculate(a, b, c);
// Задание 2
//         function math() {
//             let num = +prompt("Введите число");
//             let deg = +prompt("Введите степень");
//             console.log(num ** deg);
//         }
// math();

// Задание 3
// 3.  Создать игру "Камень-Ножницы-Бумага".
// //         Выбор компьютера определяется строкой:
// // "var computerChoice = Math.random();
// // alert(computerChoice); ".
// // Math.random() выдает произвольное число в промежутке от 0 до 1,
// на основании этого можно построить принцип выбора решения компьютера.

// function rockPaperScissors() {
//             const computerOptions = ['Rock', 'Paper', 'Scissors'];
//             const choiceNumber = Math.floor(Math.random() * 3);
//             const computerChoice = computerOptions[choiceNumber];
//             alert(computerChoice);
//         }
//         rockPaperScissors();

// Задание 4

// const n = +prompt('n?');
// const arr = [];
// arr[0] = 1;
// arr[1] = 1;
// function returnFibbonachi(n) {
//     for (i = 2; i <= n; i++) {
//         arr[i] = arr[i - 1] + arr[i - 2];
//     }
//     console.log(arr[n]);
// }
// returnFibbonachi(n);

// Задание 5

//        function differentText (col,row,text){
//             document.write('<table border="1">');
//             for(let j=1;j<=row;j++){
//                 document.write('<tr>')
//                 for (let i = 1; i <= col; i++){
//                     text = prompt(`Введите текст ${[i]}й ячейки ${[j]}го ряда`)
//                     document.write(`<td>${text}</td>`)
//                 }
//                 document.write('</tr>')
//             }
//             document.write('</table>')
//        }

// differentText(1, 3);
