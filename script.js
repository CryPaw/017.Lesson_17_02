//Дано масив з елементами різних типів. Створити функцію яка вираховує
//середнє арифметичне лише числових елементів даного масиву.

function averageVal(array) {
    var sum = 0;
    for(var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
 }

var result = [];
var array = [1, "2", "do", "win", "lose", 3];

array.forEach(function(item) {
  if (/^(\-|\+)?([0-9]+|Infinity)$/.test(item))
    result.push(Number(item));
});
console.log(result);
console.log(averageVal(result));




// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. 
// У змінній znak може бути: +, -, *, /, %, ^ (ступінь ). Вивести результат математичної дії, вказаної в змінній znak.
// Обидва числа і знак виходять від користувача.

function doMath(x, operator, y) {
    
    var g = x + y;
    var h = x - y;
    var i = x / y;
    var j = x * y;
    var k = x ** y;
    var l = x % y;
    var a = x + ' + ' + y + ' = ' + g;
    var b = x + ' - ' + y + ' = ' + h;
    var c = x + ' / ' + y + ' = ' + i;
    var d = x + ' * ' + y + ' = ' + j;
    var e = x + ' ** ' + y + ' = ' + k;
    var f = x + ' % ' + y + ' = ' + l;

    switch (operator) {
        case '+':
            return (a);
        case '-':
            return (b);
        case '/':
            return (c);
        case '*':
            return (d);
        case '^':
            return (e);
        case '%':
            return (f);
    }
}

  var x = Number(prompt('Введіть x'));
  if (x === 0 || x === '') 
    {alert("Обидно, извиняйся!");}
    else
    {
    var y = Number(prompt('Введіть y'));
    if (y === 0 || y === '') 
    {alert("Обидно, извиняйся!");}
    else{
    var operator = prompt('Введіть знак');
    if (operator === null || operator === '') 
    {alert("Обидно, извиняйся!");}
    else {alert(doMath(x, operator, y));}
    }
}
    
  
    




// Написати функцію заповнення даними користувача двомірного масиву.
// Довжину основного масиву і внутрішніх масивів задає користувач.
// Значення всіх елементів всіх масивів задає користувач.

function arrAdd() {
    let arr = [];
    let amountOfArrays = Number(prompt("Введите количество массивов в первом массиве"));

    if (amountOfArrays === 0) 
    {alert("Обидно, извиняйся!"); return}
    else if (amountOfArrays === '')
    {alert("Обидно, извиняйся!"); return}
    else{
    for(let i = 0; i < amountOfArrays; i++) {
        arr.push([]);

        let amountOfArrays2 = Number(prompt("Введите количество елементов" + (` ${ i + 1 } массива`)));

        if (amountOfArrays2 === 0) 
        {alert("Обидно, извиняйся!"); return}
        else if (amountOfArrays2 === '')
        {alert("Обидно, извиняйся!"); return}
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
    var st_pt = pattern.join('');

    return string.replace(new RegExp(`[${st_pt}]`, 'gi'), '')
   }
   
   alert(replace_string('Hello world', ['l', 'd']))
