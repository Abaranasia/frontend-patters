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
  // Implementator class to edit elements based in html tags
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

class CanvasPainter {
  // Implementator class to edit canvas elements
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');

    this.width = 1;
    this.heigth = 1;
    this.color = '#000000';
  }

  setWidth(width) {
    this.width = width;
  }

  setHeigth(heigth) {
    this.heigth = heigth;
  }

  setColor(color) {
    this.color = color;
  }

  print() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(0, 0, this.width, this.heigth);
  }
}

// Main code
let editor = new Editor(new CanvasPainter(canvas)); // Canvas version by default

targetSelector.addEventListener('change', (e) => {
  e.target.value === 'canvas'
    ? (editor = new Editor(new CanvasPainter(canvas))) // canvas version
    : (editor = new Editor(new HTMLPainter(content))); // HTML tags version
});

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