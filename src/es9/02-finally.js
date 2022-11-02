const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? resolve('Hey!!')
            : reject('Whoooops!');
    });
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log('Finally'));