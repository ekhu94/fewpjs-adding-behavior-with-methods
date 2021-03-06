class Cat {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    speak() {
        return `${this.name} says meow!`;
    }
}

class Dog {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    speak() {
        return `${this.name} says woof!`;
    }
}

class Bird {
    constructor(name, sex) {
        this.name = name;
        this.sex =sex;
    }
    speak() {
        const {name, sex} = this;
        return sex === 'male' ? `It's me! ${name}, the parrot!` : `${name} says squawk!`;
    }
}