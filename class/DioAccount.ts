export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }


  deposit = (deposit: number): void => {
    if(this.validateStatus()){
      console.log('Voce depositou: ' + deposit + '')
      this.balance += deposit
      console.log("Seu saldo é de: " + this.balance)
    }
    }

    withdraw = (withdraw: number): void => {
      if(this.validateStatus() && this.balance > withdraw){
        this.balance -= withdraw
        console.log("Sacou: " + withdraw + "\nO  saldo é de R$: " + this.balance)
      } else if (!this.validateStatus()) {
        console.log("Sua conta está inativa.")
      } else {
        console.log("Saldo insuficiente")
      }
    }

  getBalance = (): number => {
    return this.balance
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
