function add () {
    counter = 0 ;

    function plus(){
        counter += 1 ;
    }

    plus();
    plus();
    plus();
    plus();
    plus();
    plus();
    plus();
    plus();
    plus();
    plus();
    
    return counter;
}

const added = add();

console.log(added);


// Class Inheritance :

class Car {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return 'I have a ' + this.carname;
    }
}

class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    show() {
        return this.present() + ', it is a ' + this.model;
    }
}

let myCar = new Model("Ford", "Mustang");

console.log(myCar.show());

console.log('Line 1 code');
setTimeout(function(){
    console.log('Line 2 code')
},5000);//setTimeout 5000 mimisec ar por  asbe..
console.log('Line 3 code')
setInterval(function(){
    console.log('Line 4 code')
},2000) // setInterval 2000 milisec ar por por asbe..