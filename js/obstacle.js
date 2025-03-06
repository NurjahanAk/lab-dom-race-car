class Obstacle {
  constructor(gameScreen) {
    this.possibleXPositions = [80, 270, 80, 80, 270];
    this.randomIndex = Math.floor(
      Math.random() * this.possibleXPositions.length
    );
    this.left = this.possibleXPositions[this.randomIndex];
    this.top = -300;
    this.width = 125;
    this.height = 190;
    this.element = document.createElement("img");
    this.element.src = "images/truck.png";
    this.element.style.position = "absolute";
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    gameScreen.appendChild(this.element);
  }
  move() {
    this.top += 3;
    this.updatePosition();
  }
  updatePosition() {
    this.element.style.top = `${this.top}px`;
  }
}
