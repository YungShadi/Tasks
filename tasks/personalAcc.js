// Нужно создать методы для классов. У нас 2 класса. Person и Account. В Person лежат данные о челе
// фио, дата рождения. В Prson один метдо getAge, тут вроде все понятно
// В Account 5 методов. По сути работают по похожей схеме. Если add, до добавляем деньги и 
// в history этого аккаунта пушим инфу и тп с снятием.
//В переводе у нас static медтод тк этот метод пренадлежит ко всему классу, а не его обьектам, ведь
//мы сравниваем 2 объекта

class Person {
  constructor(firstName, lastName, dateBirdth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateBirdth = dateBirdth;
  }
  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  getAge() {
    let age = 0;
    this.age = new Date(2019, 4, 23) - new Date(this.dateBirdth);
    const ageInYears = this.age / (1000 * 60 * 60 * 24 * 365.25);
    return Math.floor(ageInYears);
  }
}

class Account {
  constructor(fullName, money) {
    this.fullName = fullName.firstName + " " + fullName.lastName;
    this.money = money;
    this.history = []
  }

  addMoney(add, comment) {
    this.money += add;
    console.log(comment + " " + "+ " + add);
    this.history.push({
      timestamp: Date.now(),
      target: "in",
      amount: add,
      description: comment,
    });
    return this.money;
  }

  getAmount(amount) {
    return this.money
  }

  withdrawMoney(withdraw, comment) {
    if (withdraw <= this.money) {
      this.money -= withdraw;
      console.log(comment + " " + "- " + withdraw);
      this.history.push({
        timestamp: Date.now(),
        target: "out",
        amount: withdraw,
        description: comment,
      });
      return this.money;
    } else {
      return this.money;
    }
  }

  getAccountHistory() {
    return this.history;
  }

  static transfer(fromAcc, toAcc, amount) {
    if (amount <= fromAcc.money) {
      fromAcc.money -= amount;
      toAcc.money += amount;
      fromAcc.history.push({
        timestamp: Date.now(),
        target: "out",
        amount: amount,
        description: "К " + toAcc.fullName,
      });
      toAcc.history.push({
        timestamp: Date.now(),
        target: "in",
        amount: amount,
        description: "От " + fromAcc.fullName,
      });
      return true;
    } else {
      return false;
    }
  }
}

const alex = new Person('Alexey', 'Petrov', '1994-05-22');
const alexAccount = new Account(alex, 1000);
const helen = new Person('Helen', 'Smith', '1990-06-06');
const helenAccount = new Account(helen, 400);

alexAccount.addMoney(1000, 'Зарплата');
const amount = alexAccount.getAmount();
alexAccount.withdrawMoney(amount * 0.1, 'Налоги');
Account.transfer(alexAccount, helenAccount, 100);
console.log(helenAccount.getAmount()) // 500
console.log(alexAccount.getAmount()) // 1700