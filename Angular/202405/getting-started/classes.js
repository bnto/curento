var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    // constructor
    function Person(firstName, lastName, birthDate) {
        this.first_name = firstName;
        this.last_name = lastName;
        this.birth_date = birthDate;
    }
    // methods
    Person.prototype.get_first_name = function () {
        return this.first_name;
    };
    Person.prototype.get_last_name = function () {
        return this.last_name;
    };
    Person.prototype.get_birth_date = function () {
        return this.birth_date;
    };
    Person.prototype.set_first_name = function (firstName) {
        this.first_name = firstName;
    };
    return Person;
}());
var person1 = new Person('George', 'Martin', new Date('1975-01-01'));
console.log(person1.get_first_name());
person1.set_first_name('Marvin');
console.log(person1.get_first_name());
// Inheritance
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(first_name, last_name, birth_date, department) {
        var _this = _super.call(this, first_name, last_name, birth_date) || this;
        if (department)
            _this.department = department;
        return _this;
    }
    Employee.prototype.get_department = function () {
        return this.department;
    };
    return Employee;
}(Person));
var emp2 = new Employee('Mary', 'Jane', new Date('1975-01-01'), 'sales');
console.log(emp2.get_first_name);
