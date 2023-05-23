
class user {
    //cosntructor 
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //metodos 
    #speak() {
        return 'Hello';
    }
    gretting() {
        return `${this.speak} ${this.name}`;
    }

    get #uAge() {
        return this.age;
    }
    set #uAge(n) {
        this.age = n;
    }
}

const celesteninator = new user('Celeste', 15);
console.log(celesteninator.name, celesteninator.uAge);
console.log(celesteninator.uAge = 12);