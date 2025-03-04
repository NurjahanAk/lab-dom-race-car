class Projectile {
  constructor(gameScreen, carLeft, carTop) {
    this.left = carLeft;
    this.top = carTop;
    this.width = 20;
    this.height = 70;
    this.boom = new Audio("../assets/boom.wav");
    this.boom.volume = 0.1;
    this.boom.play();
    this.element = document.createElement("img");
    this.element.src = "../images/bullet.png";
    this.element.style.position = "absolute";
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    gameScreen.appendChild(this.element);
  }
  move() {
    this.top -= 6;
    this.updatePosition();
  }
  updatePosition() {
    this.element.style.top = `${this.top}px`;
  }
  didCollide(obstacle) {
    const projectileRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      projectileRect.left < obstacleRect.right &&
      projectileRect.right > obstacleRect.left &&
      projectileRect.top < obstacleRect.bottom &&
      projectileRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}
