/* 5. Crie uma classe `Car` com propriedades `make`, `model` e `year`. Crie um método que retorna a descrição do carro. */

class Car {
    make: string;
    model: string;
    year: number;

    constructor(
        make: string,
        model: string,
        year: number 
    ) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getCarDescription(): Car {
        return this;
    }
}

const myUber = new Car("Ford", "Ka", 2017);

console.log(myUber.getCarDescription());