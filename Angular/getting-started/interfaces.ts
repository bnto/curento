interface employee {
    first_name: string,
    last_name: string,
    birth_date: Date,
}

function display_full_name(emp: employee){
    return `${ emp.first_name} ${emp.last_name}`
}

let emp1: employee = {
    first_name: 'John',
    last_name: 'Doe',
    birth_date: new Date('1975-01-01'),
}

console.log( display_full_name(emp1) )
