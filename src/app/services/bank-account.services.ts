import { Injectable } from '@angular/core';

@Injectable()
export class BankAccountService {

  constructor(private bonusCalculator: ICalculateBonuses) { }
  private currentBalance = 7000;

  deposit(amount: number) {
    const bonus = this.bonusCalculator.calculateBonusFor(this, amount);
    this.currentBalance += amount + bonus;
  }

  withdraw(amount: number) {
    this.currentBalance -= amount;
  }

  getBalance() {
    return this.currentBalance;
  }
}

export interface ICalculateBonuses {

  calculateBonusFor: (account: BankAccountService, amountOfDeposit: number) => number;
}


export class StandardBonusCalculator implements ICalculateBonuses {

  calculateBonusFor(account: BankAccountService, amountOfDeposit: number) {
    return account.getBalance() > 7000 ? amountOfDeposit * .10 : 0;
  }
}

