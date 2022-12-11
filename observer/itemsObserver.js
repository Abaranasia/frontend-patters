class Subject {
  constructor() {
    this.observers = []
  }

  subscribe(observer){
    this.observers.push(observer)
  }

  unsubscribe(observer){
    this.observers = this.observers.filter(obs => obs !== observer)
  }

  notify(data){
    this.observers.forEach(e => {
      e.refresh(data)
    });
  }
}

class ItemsSubject extends Subject{
  constructor(){
    super();
    this.data = [];
  }

  add(item){
    this.data.push(item);
    this.notify(this.data)
  }
}

class Observer{
  constructor(fn){
    this.fn = fn;
  }

  refresh(data){
    this.fn(data)
  }
}

class HtmlElementObserver{
  constructor(element) {
    this.element = element;
  }

  refresh(data){
    this.element.innerHTML = data.reduce((total, elem) => {
      return total + `<li>
          ${elem}
        </li>`
    }, "")
  }
}

const items = new ItemsSubject();
const listObserver = new HtmlElementObserver(list);
const observer1 = new Observer(data => {
  div3.innerHTML= `<p>Total elements: ${data.length}</p>`
})

items.subscribe(listObserver)
items.subscribe(observer1)

const add = () => { 
  const name = txtName.value;
  items.add(name);
 }
