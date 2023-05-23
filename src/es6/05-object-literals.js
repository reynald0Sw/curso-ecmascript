// enahced object literals 

function newUser(user, age, country, uId) {
    return {
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser("rey_sw", 22, 'URU', 1));