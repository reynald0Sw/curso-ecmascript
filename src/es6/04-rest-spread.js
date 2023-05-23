//arrays destructing

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a,fruits[0]);

//objets destructuring

let user = {username:'Dian', age: 22 };
let { username, age } = user;
console.log(username, user.username);

//spread operator 
let person = {name: 'Dana', age: 22};
let country = 'AR';

let data = { id: 1, ...person, country};
console.log(data);

//rest

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];    
}

sum(12,1,2,3,4,32,2);