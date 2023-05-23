function newUser(name, age, country) {
    var name = name || 'Diana';
    var age = age || 22;
    var country = country || 'URU';
    console.log(name, age, country);
}

newUser();
newUser('Rey', '25', 'BO');

function newAdmin(name = 'Lila', age = 22, country = 'AR') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('vicky', 23, 'AR');