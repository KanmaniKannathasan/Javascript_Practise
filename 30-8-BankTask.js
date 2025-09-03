/*Problem Statement: Bank Account Constructor Function

Create a Constructor Function called BankAccount that allows creating and managing individual bank accounts.

Each BankAccount object should have the following properties:
	•	accountNumber (string)
	•	accountHolderName (string)
	•	balance (number)

And the following methods:
	•	deposit(amount) – Adds the given amount to the account balance. Amount must be positive.
	•	withdraw(amount) – Deducts the amount from the account balance. Ensure sufficient funds before withdrawal.
	•	getBalance() – Returns the current account balance.
	•	displayAccountInfo() – Prints the account number, holder’s name, and balance.

Requirements:
	1.	Use a constructor function, not classes.
	2.	Demonstrate the functionality by creating at least two bank accounts and performing a series of deposits, withdrawals, and balance checks.

Example Output:

Account created: 123456 | John Doe | Balance: $1000
Depositing $500...
New Balance: $1500
Withdrawing $200...
New Balance: $1300
*/


function BankAccount(aNumber,aName,aBalance)
{
    this.accountnumber = aNumber;
    this.accountHolderName=aName;
    this.balance = aBalance;
}

BankAccount.prototype.getBalance = function(){
    return (`${this.accountHolderName} has the balance of INR ${this.balance}`);
}

BankAccount.prototype.displayAccountInfo = function(){

    return(`${this.accountnumber}-${this.accountHolderName}-${this.balance}`); // std way
    //console.log(`${this.accountnumber}-${this.accountHolderName}-${this.balance}`); // even this will work nut not std way
}

BankAccount.prototype.deposit = function(amount){
    if(amount>0)
        {
            this.balance+=amount; //good to calculate first then return instead of directly return this.balance+=amount;
            return this.balance;
        } 
    else{return(`Enter the positive ammount to for deposit`)};

}

BankAccount.prototype.withdraw = function(amount){
    if(this.balance> amount)
    {
        this.balance-=amount;
        return(`Amount after withdraw is ${this.balance}`);
    }
    else{
        return('No enough balance to withdraw');
    }
}

const c1= new BankAccount('SBI123','jeevan',1000);
console.log(c1); //BankAccount { accountnumber: 'SBI123', accountHolderName: 'jeevan', balance: 1000 }
console.log(c1.getBalance()); //jeevan has the balance of INR 1000
console.log(c1.displayAccountInfo()); //SBI123-jeevan-1000
console.log(c1.deposit(10)); //1010
console.log(c1.withdraw(100)); //Amount after withdraw is 910

// similarly we can do for other objetcts
const c2= new BankAccount('SBI124','preetham',1500);
console.log(c2); //BankAccount { accountnumber: 'SBI124', accountHolderName: 'jeevan', balance: 1500 }
console.log(c2.getBalance()); // jeevan has the balance of INR 1500
console.log(c2.displayAccountInfo()); //SBI124-jeevan-1500
console.log(c1.deposit(-10));  //Enter the positive ammount to for deposit
console.log(c1.withdraw(10000)); //No enough balance to withdraw
