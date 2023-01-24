"use strict";

/*let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;*/



/*let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  
  console.log(sum);*/
    

  /*let schedule = {};

  alert( isEmpty(schedule) ); 
  
  schedule["8:30"] = "get up";
  
  alert ( isEmpty(schedule) )

  function isEmpty(obj) {
    
    for (let key in obj) {
     
      return false;
    }
    return true;
  }*/



  /*let obj = {
    width: 200,
    height: 300,
    title: "My menu"
    };
    for (let key in obj) {
    if (typeof obj[key] == "number") {
    console.log(obj[key] * 2);
    }
    }*/


/*let name = "John";

function sayHi() {
  alert("Hi, " + name);
}

name = "Pete";

sayHi();*/


/*function makeWorker() {
  let name = "Pete";

  return function() {
    alert(name);
  };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work();*/



/*function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); 
*/


/*let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );*/



/*let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert( this.step );
    return this;
  }
};

ladder.up().up().down().showStep().down().showStep();*/

/*let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() );
*/

/*function Calculator() {

  this.read = function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
*/

/*function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt('Сколько нужно добавить?', 0);
  };

}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);
*/

