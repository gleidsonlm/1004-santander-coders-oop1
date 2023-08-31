/* 10. Crie uma classe `Employee` com propriedades `name`, `role` e `salary`. Adicione um método que calcula um aumento de salário com base em uma porcentagem. */

class Employee {
    name: string;
    role: string;
    salary: number;

    constructor(name: string, role: string, salary: number) {
        this.name = name;
        this.role = role;
        this.salary = salary;
    }

    setSalaryIncreasePercentage(percentage: number): number {
        return this.salary * (1 + percentage / 100);
    }
}

const employee = new Employee('João Pai', 'Desenvolvedor', 3000);

console.log(employee.setSalaryIncreasePercentage(10));