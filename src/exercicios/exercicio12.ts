/* 12. Crie uma classe `Shape` com método `calculateArea()`. Crie subclasses `Square`, `Triangle` e `Pentagon` que implementam esse método. */

abstract class Shape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
        this.height = height;
        this.width = width;
    }

    abstract calculateArea(): number;
}

class Square implements Shape {
    height: number;
    width: number;
    calculateArea(): number {
        return this.height * this.width;
    }
}

class Triangle implements Shape {
    height: number;
    width: number;
    calculateArea(): number {
        return (this.height * this.width) / 2;
    }
}

class Pentagon implements Shape {
    height: number;
    width: number;
    base: number;
    calculateArea(): number {
        const base = this.width / 2;
        return (base * this.width) / 2;
    }
}