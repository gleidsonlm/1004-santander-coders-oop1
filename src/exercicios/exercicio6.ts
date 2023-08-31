/* 6. Crie uma classe `Student` com propriedades `name` e `grades` (um array). Adicione um método que calcula a média das notas. */

class Student {
    name: string;
    grades: number[];
    
    constructor(
        name: string,
        grades: number[]
    ) {
        this.name = name;
        this.grades = grades;
    }

    getAverage(): number {
        return this.grades.reduce((acc, curr) => acc + curr) / this.grades.length;
    }
}

const joaozinho = new Student("Joãozinho", [7, 8, 9, 8]); //8

console.log(joaozinho.getAverage());