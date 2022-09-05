import { Request, Response } from "express"
import connection from "./connection"
import app from './app'

//Exercício 1 // 

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
   // private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  
  }


  new UserAccount("111.111.111-11", "Joao", 34)

  //a. Serve para atribuimos os valores declarados na clesse, para chama=lo utilizamos o metodo this.
  //b. uma vez.
  //c . atraves do metodo public get


  //Exercício 2 // 

  class Transaction {
    private date: string;
    private value: number;
    private description: string;
    
    constructor(date: string, value: number, description: string) {
      this.date = date;
      this.value = value;
      this.description = description
    }
  }

 

  //Exercício 3 //

  class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }
  
  }
