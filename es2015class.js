class Member {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }


    getName() {
        return `${this.lastName} ${this.firstName}`;
    }
}

const m1 = new Member('kiyo', 'naka');
const m2 = new Member('tomo', 'naka');
console.log(m1.getName());
console.log(m2.getName());
console.log(m1.firstName);
m1.firstName = 'kiyoshi';
console.log(m1.firstName);

