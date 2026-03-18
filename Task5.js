class BankAccount {
  #balance = 4500;
  #owner = 'Arturo';
  
  get balance() {
    return this.#balance;
  }
  set deposit(x) {
    return this.#balance += x;
  }
  set withdraw(x) {
    if (this.#balance - x < 0 ){
      return console.log('Balance not enough for withdrawl'); 
    }
    return this.#balance -= x;
  }
}

const instance = new BankAccount();
console.log(`The balance in the account is ${instance.balance}`);

instance.deposit = 250;
console.log(instance.balance); 

instance.withdraw = 5000;
console.log(instance.balance);