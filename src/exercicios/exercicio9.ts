/* 9. Crie uma classe `Product` com propriedades `name`, `price` e `quantity`. Adicione métodos para calcular o valor total e exibir os detalhes. */

class Product {
    name: string;
    price: number;
    quantity: number;

    constructor( name: string, price: number, quantity: number ) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotal(): Total {
        let total = this.price * this.quantity;
        return {
            ...this,
            total
        };
    }
}

class Total extends Product {
    total: number;
}

const bananas = new Product ('Bananas', 4, 10);

console.log(bananas.getTotal());