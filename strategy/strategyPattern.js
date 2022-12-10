class SalesContext { // Context class
  constructor(strategy) {
    this.strategy=strategy;
  }

  setStrategy(strategy) {
    this.strategy=strategy;
  }

  calculate(amount) {
    return this.strategy.calculate(amount);
  }
}


class RegularSaleStrategy{ // Strategy 1
  constructor(tax){
    this.tax= tax;  
  }
  calculate(amount) {
    return amount + (amount * this.tax);
  }
}


class DiscountSaleStrategy { // Strategy 2
  constructor(tax, discount){
    this.tax= tax;  
    this.discount= discount;
  }
  calculate(amount) {
    return amount + (amount * this.tax) - this.discount;
  }
}


class ForeignSaleStrategy { // Strategy 3
  calculate(amount) {
    return amount * this.getDollarPrice()
  }
  getDollarPrice() {
    return 20
  }
}


const regularSale= new RegularSaleStrategy(0.21);
const discountSale= new DiscountSaleStrategy(0.21, 3);
const foreignSale = new ForeignSaleStrategy();

const sale = new SalesContext(regularSale);
console.log(sale.calculate(10)); // 12.1

sale.setStrategy(discountSale)
console.log(sale.calculate(10)); // 9.1

sale.setStrategy(foreignSale)
console.log(sale.calculate(10)); // 9.1



