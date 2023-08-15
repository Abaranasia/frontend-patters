class EncoderTextAbstraction {
  // Abstractor class
  constructor(encoder) {
    this.encoder = encoder;
  }

  encode(str) {
    return this.encoder.encode(str);
  }

  decode(str) {
    return this.encoder.decode(str);
  }
}

class Base64EncoderImplementor {
  // Implemetation class
  encode(str) {
    // converts a string text to Base64
    return window.btoa(unescape(encodeURIComponent(str)));
  }
  decode(str) {
    // converts a Base64 text to string
    return decodeURIComponent(escape(window.atob(str)));
  }
}

class HTMLEncoderImplementor {
  // Implemetation class
  encode(str) {
    // Replaces every phrase separated by dot by a <p> tag
    return str.split('.').reduce((ac, e) => {
      return ac + `<p>${e.trim()}</p>`;
    }, '');
  }

  decode(str) {
    // Replaces every <p></p> by a phase with final dot
    return str.split('</p>').reduce((ac, e) => {
      return e !== '' ? ac + e.replace('<p>', '') + '. ' : ac + ''; // This check avoids an additiona final dot
    }, '');
  }
}

const encodedBase64 = new EncoderTextAbstraction(
  new Base64EncoderImplementor()
);
console.log(encodedBase64.encode('cacahué')); // Returns Y2FjYWh1w6k=
console.log(encodedBase64.decode('Y2FjYWh1w6k=')); // Returns cacahué

const encodedHTML = new EncoderTextAbstraction(new HTMLEncoderImplementor());

console.log(
  encodedHTML.encode(
    'Este texto se presenta en forma de frases. Tras convertirlo, cada frase separada por un punto se transformará en un párrafo. Bye'
  )
);
console.log(encodedHTML.decode('<p>Párrafo 1</p><p>Párrafo 2</p><p>Bye</p>'));
