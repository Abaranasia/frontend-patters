class Editor {
  // Abstraction class
  constructor(implementator) {
    this.implementator = implementator;
  }

  print(width, height, color) {
    // This is the bridge method abstracts each implementation
    this.implementator.setWidth(width);
    this.implementator.setHeigth(height);
    this.implementator.setColor(color);
    this.implementator.print();
  }
}

class HTMLPainter {
  // Implementator class
  constructor(container) {
    this.container = container;
    this.width = '1px';
    this.heigth = '1px';
    this.color = '#000';
  }

  setWidth(width) {
    this.width = width + 'px';
  }

  setHeigth(heigth) {
    this.heigth = heigth + 'px';
  }

  setColor(color) {
    this.color = color;
  }

  print() {
    this.container.innerHTML = `<div
      style="width:${this.width}; height:${this.height}
      background:${this.color}
      >
      </div>
    `;
  }
}
