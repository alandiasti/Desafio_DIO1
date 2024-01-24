import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { NovoAccount} from './class/NovoAccount'
import { DioAccount } from './class/DioAccount'

//const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
//console.log(peopleAccount)
///peopleAccount.deposit()
//const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
//companyAccount.deposit()
//console.log(companyAccount)


// Alterar valor do saldo conforme depósito
const peopleAccount : PeopleAccount = new PeopleAccount(8, "Alan Dias", 1111)
peopleAccount.deposit(40)
peopleAccount.deposit(60)
//console.log(peopleAccount)


peopleAccount.withdraw(30)
peopleAccount.withdraw(500)



const companyAccount : CompanyAccount = new CompanyAccount("Dayana", 2)

companyAccount.deposit(500)
companyAccount.getEmprestimo(600)


const novoAccount: NovoAccount = new NovoAccount("Maria", 3)
//novoAccount.getBalance(100)
novoAccount.deposit(200)
