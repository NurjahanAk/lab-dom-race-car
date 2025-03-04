window.onload = function () {
  const startButtonElement = document.getElementById("start-button");
  const restartButtonElement = document.getElementById("restart-button");
  let ourNewGame;
  //all the event listeners here
  startButtonElement.addEventListener("click", function () {
    ourNewGame = new Game();
    startGame();
  });
  restartButtonElement.addEventListener("click", () => {
    //refresh the page to start again
    // window.location.reload();
    //hide the game over
    ourNewGame.gameOverScreen.style.display = "none";
    //show the game screen
    ourNewGame.gameScreen.style.display = "block";
    //remove the image of the player from the first game
    ourNewGame.player.element.remove();
    //this reassigns the ourNewGame variable
    ourNewGame = new Game();
    ourNewGame.start();
  });

  //keyboard event listeners
  window.addEventListener("keydown", (event) => {
    if (event.code === "ArrowUp") {
      ourNewGame.player.directionY = -5;
    } else if (event.code === "ArrowDown") {
      ourNewGame.player.directionY = 5;
    } else if (event.code === "ArrowLeft") {
      ourNewGame.player.directionX = -5;
    } else if (event.code === "ArrowRight") {
      ourNewGame.player.directionX = 5;
    } else if (event.code === "Space") {
      if (!ourNewGame.player.isShooting) {
        const theCarLeft = ourNewGame.player.positionLeft;
        const theCarTop = ourNewGame.player.positionTop;
        ourNewGame.projectiles.push(
          new Projectile(ourNewGame.gameScreen, theCarLeft + 52, theCarTop - 50)
        );
        ourNewGame.player.isShooting = true;

        setTimeout(() => {
          ourNewGame.player.isShooting = false;
        }, 1000);
      }
    }
  });
  window.addEventListener("keyup", (e) => {
    if (e.code === "ArrowUp") {
      ourNewGame.player.directionY = 0;
    } else if (e.code === "ArrowDown") {
      ourNewGame.player.directionY = 0;
    } else if (e.code === "ArrowLeft") {
      ourNewGame.player.directionX = 0;
    } else if (e.code === "ArrowRight") {
      ourNewGame.player.directionX = 0;
    }
  });

  //all of my functions here
  function startGame() {
    console.log("start game");
    ourNewGame.start();
  }
};
