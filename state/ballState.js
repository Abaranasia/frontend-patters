class Ball {
  constructor(ctx, canvas, ballSize) {
    this.ctx = ctx;
    this.width = canvas.width;
    this.height = canvas.height;
    this.ballSize = ballSize;
    this.positionX = 0;
    this.positionY = 0;

    this.state = new topState();
  }

  setState(state) {
    this.state = state;
  }

  print() {
    this.state.print(this);
  }
}

class topState {
  print(ball) {
    // The next commented line cleans every previous ball print, so it will look like moving around on each iteration
    // ball.ctx.clearRect(0, 0, ball.width, ball.height);

    ball.ctx.fillRect(
      ball.positionX,
      ball.positionY + desp.value,
      ball.ballSize,
      ball.ballSize
    );

    if (ball.positionX < ball.width - ball.ballSize)
      ball.positionX += ball.ballSize;
    else ball.setState(new rightState());
  }
}
class rightState {
  print(ball) {
    //  ball.ctx.clearRect(0, 0, ball.width, ball.height);
    console.log('desp', desp.value);
    ball.ctx.fillRect(
      ball.positionX - desp.value,
      ball.positionY,
      ball.ballSize,
      ball.ballSize
    );

    if (ball.positionY < ball.height - ball.ballSize)
      ball.positionY += ball.ballSize;
    else ball.setState(new bottomState());
  }
}

class bottomState {
  print(ball) {
    //  ball.ctx.clearRect(0, 0, ball.width, ball.height);

    ball.ctx.fillRect(
      ball.positionX,
      ball.positionY - desp.value,
      ball.ballSize,
      ball.ballSize
    );

    if (ball.positionX > 0) ball.positionX -= ball.ballSize;
    else ball.setState(new leftState());
  }
}

class leftState {
  print(ball) {
    // ball.ctx.clearRect(0, 0, ball.width, ball.height);

    ball.ctx.fillRect(
      ball.positionX + desp.value,
      ball.positionY,
      ball.ballSize,
      ball.ballSize
    );

    if (ball.positionY > 0) ball.positionY -= ball.ballSize;
    else {
      ball.setState(new topState());
      desp.setDisplacement(desp.value + 10);
    }
  }
}
class Displacement {
  // This class allows to set an incremental value to displace the position of the ball in a required axis on each iteration
  constructor(value) {
    this.value = value;
  }

  setDisplacement(value) {
    this.value = value;
  }
}

// ************* Main code *************
/* This code originally move a ball around the canvas border, but it has been updated 
to paint a grid by displacing the ball and not cleaning the previous print interaction
*/

const ctx = canvas.getContext('2d');
ctx.fillStyle = 'black';

const ball = new Ball(ctx, canvas, 5); // Creates a ball of 10px size
const desp = new Displacement(0); // Starts with no displacement, so in position (0,0)

setInterval(() => ball.print(), 10); // Prints a new ball every 10ms
