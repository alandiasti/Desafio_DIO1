import { DioAccount } from "./DioAccount";

export class NovoAccount extends DioAccount {
  static deposit(arg: number) {
  }
  static getBalance(arg: number) {
  }
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (deposit: number): void => {
    let balance = this.getBalance(); 
    balance += deposit + 10;
    console.log("Você depositou R$ " + deposit + "\nSeu saldo é de R$: " + balance);
  }
}

