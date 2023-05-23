const user = { username: 'rey', age: '22', country: 'Uru'};
const { username, ...values } = user;
console.table(username);
console.table(values);