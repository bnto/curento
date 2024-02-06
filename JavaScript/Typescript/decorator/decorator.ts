// Decorator
const color = (value: Function, { kind, name }) => {

    if (kind === 'method') {
        return function(...args) {
            try {
                const result = value.apply(this, args);
                return `\x1b[44m\x1b[33m${result}\x1b[0m`;
            } catch(e) {
                console.log(`Error: ${e}`);
                throw e;
            }
        }
    }
}

const logged: any = (value, { kind, name }) => {
    if (kind === 'class') {
        return class extends value {
            constructor(...args) {
                super(...args);
                console.log(`Constructuring an instance of ${name} with arguments "${args.join(', ') }"`);

                this.age = args[1] + 7; // altering the age value
            }
        }
    }
}

// interface Person {
//     name: string;
//     age: number;
// }

@logged
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    @color
    getAge() {
        return `${ this.name } is ${ this.age } years old.`;
    }
}

let guy = new Person('Mark', 27);
console.log(guy.getAge());
