// setters and getters
class user {
    //constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // metodos
    #speak() {
        return 'Hello';
    }

    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get #uAge() {
        return this.age;
    }

    set #uAge(n) {
        this.age = n;
    }
}