/* 7. Crie uma classe `BankAccount` com propriedades `balance` e `owner`. Adicione métodos para depositar e sacar dinheiro. */

export class BankAccount {
    private balance: number;
    public owner: string;
    
    constructor(owner: string) {
        this.balance = 0;
        this.owner = owner;
    }

    getBalance(): number {
        return this.balance;
    }

    deposit(amount: number): number {
        return this.balance += amount;
    }

    withdraw(amount: number): number {
        if (amount < this.balance) {
            return this.balance -= amount;
        } else {
            throw new Error('Insufficient funds');
        }
    }
}

// const myAccount = new BankAccount('Joãozinho');

// console.log(myAccount.deposit(1000));
// console.log(myAccount.withdraw(500));
// console.log(myAccount.withdraw(500)); //fim do mês
// console.log(myAccount.withdraw(500)); //sem saldo