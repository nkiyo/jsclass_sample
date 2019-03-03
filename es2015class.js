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

class BusinessMember extends Member {
    constructor(firstName, lastName, clazz) {
        super(firstName, lastName);
        this.clazz = clazz;
    }

    getName() {
        return `${super.getName()} class:${this.clazz}`;
    }

    work() {
        return `${this.getName()} is working.`;
    }
}

const m1 = new BusinessMember('kiyo', 'n', 't');
const m2 = new BusinessMember('tomo', 'n', 'b');
//console.log(m1.getName());
//console.log(m2.getName());
//console.log(m1.firstName);
//m1.firstName = 'kiyoshi';
//console.log(m1.firstName);
console.log(`${m1.work()}`);
console.log(`${m2.work()}`);

