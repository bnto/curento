class Person {

    // properties definition
    private first_name: string;
    private last_name: string;
    private birth_date: Date;

    // constructor
    constructor(firstName: string, lastName: string, birthDate: Date){
        this.first_name = firstName
        this.last_name = lastName
        this.birth_date = birthDate
    }

    // methods
    get_first_name(): string {
        return this.first_name;
    }
    get_last_name(): string {
        return this.last_name;
    }
    get_birth_date(): Date {
        return this.birth_date;
    }
    set_first_name(firstName: string){
        this.first_name = firstName;
    }
}

let person1 = new Person('George', 'Martin', new Date('1975-01-01'))

console.log(person1.get_first_name())

person1.set_first_name('Marvin')

console.log(person1.get_first_name())


// Inheritance

class Employee extends Person {
    private department: string

    constructor(
        first_name: string,
        last_name: string,
        birth_date: Date,
        department?: string) {
            super(first_name, last_name, birth_date)
            if(department) this.department = department
        }

    get_department(): string {
        return this.department
    }
}

let emp2 = new Employee('Mary', 'Jane', new Date('1975-01-01'), 'sales')

console.log(emp2.get_first_name)
