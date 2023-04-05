class Square {
  constructor(length, position, rotated, lightness) {
    this.length = length;
    this.position = position;
    this.rotated = rotated;
    let randomColor = new RandomColor(lightness);
    this.color = `rgba(${randomColor.r},${randomColor.g},${randomColor.b},0.05)`;
  }

  draw(ctx) {
    // matrix transform
    ctx.translate(this.position.x, this.position.y);
    if (this.rotated) {
      ctx.rotate((Math.PI * 45) / 180);
    }
    ctx.translate(-this.position.x, -this.position.y);
    // matrix transform

    ctx.fillStyle = this.color;
    ctx.strokeRect(
      this.position.x - this.length / 2,
      this.position.y - this.length / 2,
      this.length,
      this.length
    );
    ctx.fillRect(
      this.position.x - this.length / 2,
      this.position.y - this.length / 2,
      this.length,
      this.length
    );

    ctx.resetTransform();
  }

  generateSurroundingSquares() {
    const newLength = Math.sqrt(this.length * this.length * 2);
    const squares = [];
    if (this.rotated) {
      squares.push(
        new Square(
          newLength,
          new Position(
            this.position.x + newLength / 2,
            this.position.y + 1 / newLength
          ),
          !this.rotated,
          this.lightness
        )
      );
      squares.push(
        new Square(
          Math.sqrt(this.length * this.length * 2),
          new Position(
            this.position.x - newLength / 2,
            this.position.y + 1 / newLength
          ),
          !this.rotated,
          this.lightness
        )
      );
      squares.push(
        new Square(
          Math.sqrt(this.length * this.length * 2),
          new Position(
            this.position.x - 1 / newLength,
            this.position.y - newLength / 2
          ),
          !this.rotated,
          this.lightness
        )
      );
      squares.push(
        new Square(
          Math.sqrt(this.length * this.length * 2),
          new Position(
            this.position.x + 1 / newLength,
            this.position.y + newLength / 2
          ),
          !this.rotated,
          this.lightness
        )
      );
    } else {
      squares.push(
        new Square(
          newLength,
          new Position(
            this.position.x + this.length / 2,
            this.position.y + this.length / 2
          ),
          !this.rotated,
          this.lightness
        )
      );
      squares.push(
        new Square(
          Math.sqrt(this.length * this.length * 2),
          new Position(
            this.position.x - this.length / 2,
            this.position.y + this.length / 2
          ),
          !this.rotated,
          this.lightness
        )
      );
      squares.push(
        new Square(
          Math.sqrt(this.length * this.length * 2),
          new Position(
            this.position.x - this.length / 2,
            this.position.y - this.length / 2
          ),
          !this.rotated,
          this.lightness
        )
      );
      squares.push(
        new Square(
          Math.sqrt(this.length * this.length * 2),
          new Position(
            this.position.x + this.length / 2,
            this.position.y - this.length / 2
          ),
          !this.rotated,
          this.lightness
        )
      );
    }
    return squares;
  }
}
