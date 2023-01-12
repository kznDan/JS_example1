"use strict";


//console.log('Я JavaScript!')



/*let admin;
let name;
name = 'Jone';
admin = name ;
console.log(admin)
*/



/*let name = prompt("Ваше имя?", "");
console.log(name);*/



/*let value = prompt('Какое "официальное" название JavaScript?', '');
if (value == 'ECMAScript') {
    alert('Верно!');
}else{
    alert('Не знаете? ECMAScript!');
}*/



/*let value = prompt('Введите число', 0);
if (value > 0) {
  alert( 1 );
} else if (value < 0) {
  alert( -1 );
} else {
  alert( 0 );
}*/



/*let result;
let a = prompt('Введите число a', 0);
let b = prompt('Введите число b', 0);
result = (a + b < 4) ? 'Мало' : 'Много';
console.log(result)*/



/*let message;
let login = prompt('Введите логин',)
message = ( login == 'Сотрудник' ) ? 'Привет' :
		  ( login == 'Директор' ) ? 'Здраствуйте' :
		  ( login == '' ) ? 'Нет логина' : '';
console.log(message)*/


/*let age = prompt('Введите возраст',);
if (age >= 14 && age <= 90)
console.log(age)*/



/*let age = prompt('Введите возраст',);
if (age < 14 || age >=90)
console.log(age)*/


/*let userName = prompt("Кто там?", '');

if (userName === 'Админ') {

  let pass = prompt('Пароль?', '');

  if (pass === 'Я главный') {
    alert( 'Здравствуйте!' );
  } else if (pass === '' || pass === null) {
    alert( 'Отменено' );
  } else {
    alert( 'Неверный пароль' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Отменено' );
} else {
  alert( "Я вас не знаю" );
}*/



//for (let i = 0; i < 5; ++i) console.log( i );

//for (let i = 0; i < 5; i++) console.log( i );

/*for (let i = 2; i <= 10; i++){
  if (i % 2 ==0){
    console.log( i )
  }
}*/

/*let num;
do {
  num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num);*/

/*let browser = prompt ('Какой браузер?');
if (browser == 'Edge')  {
  alert("You've got the Edge!");
} else if (browser == 'Chrome'
 || browser == 'Firefox'
 || browser == 'Safari'
 || browser == 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}*/


/*const number = +prompt('Введите число между 0 и 3', '');
switch (number) {
  case 0:
    alert('Вы ввели число 0');
    break;

  case 1:
    alert('Вы ввели число 1');
    break;

  case 2:
  case 3:
    alert('Вы ввели число 2, а может и 3');
    break;
}*/


/*function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
console.log(min(10,5))*/



/*function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
  alert( pow(x, n) );
}*/



/*function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
);*/








