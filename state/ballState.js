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
    ball.ctx.clearRect(0, 0, ball.width, ball.height);

    ball.ctx.fillRect(
      ball.positionX,
      ball.positionY,
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
    ball.ctx.clearRect(0, 0, ball.width, ball.height);

    ball.ctx.fillRect(
      ball.positionX,
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
    ball.ctx.clearRect(0, 0, ball.width, ball.height);

    ball.ctx.fillRect(
      ball.positionX,
      ball.positionY,
      ball.ballSize,
      ball.ballSize
    );

    if (ball.positionX > 0) ball.positionX -= ball.ballSize;
    else ball.setState(new leftState());
  }
}

class leftState {
  print(ball) {
    ball.ctx.clearRect(0, 0, ball.width, ball.height);

    ball.ctx.fillRect(
      ball.positionX,
      ball.positionY,
      ball.ballSize,
      ball.ballSize
    );

    if (ball.positionY > 0) ball.positionY -= ball.ballSize;
    else ball.setState(new topState());
  }
}
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'black';

const ball = new Ball(ctx, canvas, 10);
setInterval(() => ball.print(), 10);
