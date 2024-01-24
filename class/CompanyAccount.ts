import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getEmprestimo = (emprestimo: number): void => {
    if(this.validateStatus()){
      let balance = this.getBalance()
      balance += emprestimo
      console.log("Você realizou um empréstimo de R$ " + emprestimo +"\nE agora seu saldo é de R$ " + balance)
    } else {
      console.log("Inativa!")
    }
    
  }
}
