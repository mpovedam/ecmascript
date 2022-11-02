// enahced Object literals
//antes de es6
function newUser(user, age, country)
{
    return {
        user: user,
        age: age,
        country: country
    }
}

// en es6
function newUser(user, age, country, uId)
{
    return {
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser('gndx', 34, 'MX', 1));