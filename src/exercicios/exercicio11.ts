/* 11. Crie uma classe `Bank` que contém uma coleção de contas bancárias. Adicione métodos para adicionar contas, fazer transferências e calcular o saldo total do banco. */

import { BankAccount } from "./exercicio7";

class Bank {
  private accounts: BankAccount[] = [];

  addAccount(account: BankAccount): void {
    this.accounts.push(account);
  }

  getAccountBalance(owner: string): number {
    const account = this.accounts.find(account => account.owner === owner);

    if (!account) {
      throw new Error('Account not found');
    }

    return account.getBalance();
  }

  setAccountDeposit(owner: string, amount: number): number {
    const account = this.accounts.find(account => account.owner === owner);

    if (!account) {
      throw new Error('Account not found');
    }

    return account.deposit(amount);
  }

  setAccountWithdraw(owner: string, amount: number): number {
    const account = this.accounts.find(account => account.owner === owner);

    if (!account) {
      throw new Error('Account not found');
    }

    if (amount < account.getBalance()) {
        return account.withdraw(amount);
    } else {
        throw new Error('Insufficient funds');
    }
  }

  calcBankTotal(): number {
    return this.accounts.reduce((total, account) => total + account.getBalance(), 0);
  }

  setAccountTransfer(from: string, to: string, value: number): number| string {
    const payer = this.accounts.find(account => account.owner === from);
    const receiver = this.accounts.find(account => account.owner === to);

    if (!payer || !receiver) {
      return "Account not found";
    }

    try {
      const funds = this.setAccountWithdraw(payer.owner,value);
      receiver.deposit(funds)

    } catch (error) {
      if (error instanceof Error) { console.log(error) }
    }

    return payer.getBalance();
  }
}

// const myBank = new Bank();
// const pagador = new BankAccount("Pagador");
// const recebedor = new BankAccount("Recebedor");

// myBank.addAccount(pagador);
// myBank.addAccount(recebedor);

// console.log("Bank start: " + myBank.calcBankTotal())
// console.log("Pagador opened an account: " + myBank.setAccountDeposit("Pagador",1000))
// console.log("Recebedor opened an account: " + myBank.setAccountDeposit("Recebedor",1000))
// console.log("Bank total: " + myBank.calcBankTotal())

// console.log(myBank.setAccountTransfer("Pagador", "Recebedor", 500))
