var lastName = 'Pereira';
lastName = 'Sosa';
console.log(lastName);

let fruit = 'Banna';
fruit = 'Appl';
console.log(fruit);

const animal = 'Dog';
animal = 'Kitty';
console.log(animal);

const fruits = () => {
    if (true) {
        var fruit1 = 'Apple';  //funtion scope
        var frutt2 = 'Kiwi';    //block scope
        var fruts3 = 'Banana';  //block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();