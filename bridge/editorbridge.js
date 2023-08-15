class Editor {
  // Abstraction class
  constructor(implementator) {
    this.implementator = implementator;
  }

  print(width, height, color) {
    // This is the bridge method abstracts the the use of each implementation
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
      style="width:${this.width}; height:${this.heigth};
      background:${this.color};"
      >
      </div>
    `;
  }
}

// Main code
const editor = new Editor(new HTMLPainter(content));

colorRange.addEventListener('input', (e) => {
  const width = e.target.value;
  const height = e.target.value;
  const color = colorEditor.value;
  editor.print(width, height, color);
});

colorEditor.addEventListener('input', (e) => {
  const width = colorRange.value;
  const height = colorRange.value;
  const color = e.target.value;
  editor.print(width, height, color);
});