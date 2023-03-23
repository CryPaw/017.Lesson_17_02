//Дано масив з елементами різних типів. Створити функцію яка вираховує
//середнє арифметичне лише числових елементів даного масиву.

function averageVal(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
 }

let result = [];
let array = [1, "2", "do", "win", "lose", 3];

array.forEach(function(item) {
  if (!isNaN(parseFloat(item)) && isFinite(item) && typeof item === "number")
  result.push(item)
});
console.log(result);
console.log(averageVal(result));




// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. 
// У змінній znak може бути: +, -, *, /, %, ^ (ступінь ). Вивести результат математичної дії, вказаної в змінній znak.
// Обидва числа і знак виходять від користувача.

function doMath(x, operator, y) {

    switch (operator) {
        case '+':
            return (`${x} + ${y} = ${x + y}`);
        case '-':
            return (`${x} - ${y} = ${x - y}`);
        case '/':
            return (`${x} / ${y} = ${x / y}`);
        case '*':
            return (`${x} * ${y} = ${x * y}`);
        case '^':
            return (`${x} ** ${y} = ${x ** y}`);
        case '%':
            return (`${x} % ${y} = ${x % y}`);
        default:
            return (`Результат не возможно вычислить`)
    }
}

  let x = Number(prompt('Введите x'));
  if (x === 0 || x === '') 
    {alert("Ошибка ввода");}
    else
    {
    let y = Number(prompt('Введите y'));
    if (y === 0 || y === '') 
    {alert("Ошибка ввода");}
    else{
    let operator = prompt('Введите оператор');
    if (operator === null || operator === '') 
    {alert("Ошибка ввода");}
    else {alert(doMath(x, operator, y));}
    }
}   
   




// Написати функцію заповнення даними користувача двомірного масиву.
// Довжину основного масиву і внутрішніх масивів задає користувач.
// Значення всіх елементів всіх масивів задає користувач.

function arrAdd() {
    let arr = [];
    let amountOfArrays = Number(prompt("Введите количество массивов в первом массиве"));
    if (Number.isInteger(amountOfArrays) === false) 
    {alert("Ошибка ввода")}
    else if (amountOfArrays === 0) 
    {alert("Ошибка ввода"); return}
    else if (amountOfArrays === '')
    {alert("Ошибка ввода"); return}
    else{
    for(let i = 0; i < amountOfArrays; i++) {
        arr.push([]);

        let amountOfArrays2 = Number(prompt("Введите количество елементов" + (` ${ i + 1 } массива`)));

        if (Number.isInteger(amountOfArrays2) === false) 
        {return (alert("Ошибка ввода"))}
        else if (amountOfArrays2 === 0) 
        {alert("Ошибка ввода"); return}
        else if (amountOfArrays2 === '')
        {alert("Ошибка ввода"); return}
         else{
        for(let j = 0; j < amountOfArrays2; j++) {
            let elementsOfArray = prompt("Введите элемент" + (` ${ j + 1 }`));
            arr[i].push([elementsOfArray]);
                }
            }
        }
    }
    console.log(arr);
}

let functionResult = arrAdd();




// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
// Вихідний рядок та символи для видалення задає користувач.

function replace_string(string, pattern){
    let st_pt = pattern.join('');

    return string.replace(new RegExp(`[${st_pt}]`, 'gi'), '')
   }
   
   alert(replace_string('Hello world', ['l', 'd']))
