// declarando
class User{};
//instancia de una clase 
//const newUser = newUser();

class user {
    //metodo
    gretting() {
        return 'Hello';
    }
};

const reyn = new user();
console.log(reyn.gretting());
const didi = new user();
console.log(didi.gretting());

//constructor

class user {
    //constructror
    constructor() {
        console.log('New User');
    }
    gretting() {
        return 'Hello';
    }
}

const valen = new user();

//this

class user {
    constructor(name) {
        this.name = name;
    }
    // metodos
    speak() {
        return 'Hello'
    }
    gretting() {
        return `${this.speak()} ${this.name}`;
    }
}

const vale = new user('Diddy');
console.log(vale.gretting());

//setters getters

class user {
    //cosntructor 
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //metodos 
    speak() {
        return 'Hello';
    }
    gretting() {
        return `${this.speak} ${this.name}`;
    }

    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}

const celesteninator = new user('Celeste', 15);
console.log(celesteninator.name, celesteninator.uAge);
console.log(celesteninator.uAge = 12);