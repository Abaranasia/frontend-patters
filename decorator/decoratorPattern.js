// Main class
class ProductComponent {
  constructor(name) {
    this.name = name;
  }

  getDetail() {
    return `${this.name}`;
  }
}

// Decorator class
class ProductDecorator {
  constructor(productComponent) {
    this.productComponent = productComponent;
  }

  getDetail() {
    // routes to the main class method with same name
    return this.productComponent.getDetail();
  }
}

// New decorator class based on previous derocator
class CommenrcialInfoProductDecorator extends ProductDecorator {
  constructor(productComponent, tradename, brand) {
    super(productComponent);

    this.tradename = tradename;
    this.brand = brand;
  }

  getDetail() {
    return `${this.tradename} ${this.brand} ` + super.getDetail();
  }
}

// Executions

const productComponent = new ProductComponent('Beer');
console.log(productComponent.getDetail()); // Beer

const commenrcialInfoProductDecorator = new CommenrcialInfoProductDecorator(
  productComponent,
  'London Porter',
  "Fuller's"
);
console.log(commenrcialInfoProductDecorator.getDetail()); // Beer
