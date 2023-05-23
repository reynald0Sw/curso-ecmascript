function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Danna', 'Dunna', 'Elsa', 'Js', 'Vick'])
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

