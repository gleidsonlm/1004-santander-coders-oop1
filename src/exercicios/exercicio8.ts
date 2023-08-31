/* 8. Crie uma classe `Book` com propriedades `title`, `author` e `year`. Crie um método que retorna os detalhes do livro. */

class Book {
    title: string;
    author: string;
    year: number;

    constructor ( title: string, author: string, year: number ) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getDetails(): Book {
        return this;
    }
}

const lordOfTheRings = new Book('O Senhor dos Anéis', 'J. R. R. Tolkien', 1954);

console.log(lordOfTheRings.getDetails());