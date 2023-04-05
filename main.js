const canvas = document.querySelector("#canvas");
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

const ctx = canvas.getContext("2d");

// ctx.moveTo(0, canvas.height / 2);
// ctx.lineTo(canvas.width, canvas.height / 2);
// ctx.stroke();
// ctx.moveTo(canvas.width / 2, 0);
// ctx.lineTo(canvas.width / 2, canvas.height);
// ctx.stroke();

const fps = 20;
let counter = 0;
const counterLimit = 50;
setTimeout(() => {
  window.requestAnimationFrame(gameLoop);
}, 1000 / fps);

function gameLoop() {
  counter += 1;
  if (counter == counterLimit) {
    console.log("limit");
    counter = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  const centerPosition = new Position(canvas.width / 2, canvas.height / 2);
  const centerSquare = new Square(50, centerPosition, true, counter, counter);

  const generatedSquares = [centerSquare];

  // generate exponentially
  for (let n = 0; n < 3; n++) {
    const currentLength = generatedSquares.length;
    for (let i = 0; i < currentLength; i++) {
      generatedSquares.push(
        ...generatedSquares[i].generateSurroundingSquares()
      );
    }
  }

  // draw squares
  for (let i = 0; i < generatedSquares.length; i++) {
    generatedSquares[i].draw(ctx);
  }

  setTimeout(() => {
    window.requestAnimationFrame(gameLoop);
  }, 1000 / fps);
}
