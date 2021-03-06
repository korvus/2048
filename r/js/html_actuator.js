function HTMLActuator() {
  this.tileContainer    = document.querySelector(".tile-container");
  this.scoreContainer   = document.querySelector(".score-container");
  this.bestContainer    = document.querySelector(".best-container");
  this.messageContainer = document.querySelector(".game-message");
  this.boutonSound      = document.querySelector(".inset .music");
  this.doomGuy      = document.querySelector("#head");

  this.score = 0;
}

HTMLActuator.prototype.actuate = function (grid, metadata) {
  var self = this;

  window.requestAnimationFrame(function () {
    self.clearContainer(self.tileContainer);

    grid.cells.forEach(function (column, iteration1) {
      column.forEach(function (cell) {
        if (cell) {
          self.addTile(cell, iteration1);
        }
      });
    });

    self.updateScore(metadata.score);
    self.updateBestScore(metadata.bestScore);

    if (metadata.terminated) {
      if (metadata.over) {
        self.message(false); // You lose
        self.setDoomGuy("dead");
      } else if (metadata.won) {
        self.message(true); // You win!
        self.setDoomGuy("win");
      }
    }

  });
};

// Continues the game (both restart and keep playing)
HTMLActuator.prototype.continueGame = function () {
  this.clearMessage();
};

HTMLActuator.prototype.clearContainer = function (container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

HTMLActuator.prototype.addTile = function (tile, iter1) {
  var self = this;
  var wrapper   = document.createElement("div");
  var inner     = document.createElement("div");
  var position  = tile.previousPosition || { x: tile.x, y: tile.y };
  var positionClass = this.positionClass(position);

  // We can't use classlist because it somehow glitches when replacing classes
  var classes = ["tile", "tile-" + tile.value, positionClass];

  if (tile.value > 2048) classes.push("tile-super");

  this.applyClasses(wrapper, classes);

  if(iter1=="hide"){
    classes.push("tile-old");
    this.applyClasses(wrapper, classes);
    wrapper.style.backgroundImage="url('r/css/i/explosions.gif?"+Math.random()+"')";
  }

  inner.classList.add("tile-inner");
  inner.textContent = tile.value;

  if (tile.previousPosition) {
    // Make sure that the tile gets rendered in the previous position first
    window.requestAnimationFrame(function () {
      classes[2] = self.positionClass({ x: tile.x, y: tile.y });
      self.applyClasses(wrapper, classes); // Update the position
    });
  }else if(tile.mergedFrom){
    classes.push("tile-merged");
    this.applyClasses(wrapper, classes);

    /* Render the tiles that merged - lignes a supprimer si besoin de ne pas avoir de superpositions du tout */
    tile.mergedFrom.forEach(function (merged) {
      self.addTile(merged, "hide");
    });
  } else {
    classes.push("tile-new");
    this.applyClasses(wrapper, classes);
  }

  // Add the inner part of the tile to the wrapper
  wrapper.appendChild(inner);

  // Put the tile on the board
  this.tileContainer.appendChild(wrapper);
};

HTMLActuator.prototype.applyClasses = function (element, classes) {
  element.setAttribute("class", classes.join(" "));
};

HTMLActuator.prototype.normalizePosition = function (position) {
  return { x: position.x + 1, y: position.y + 1 };
};

HTMLActuator.prototype.positionClass = function (position) {
  position = this.normalizePosition(position);
  return "tile-position-" + position.x + "-" + position.y;
};

HTMLActuator.prototype.updateScore = function (score) {
  this.clearContainer(this.scoreContainer);

  var difference = score - this.score;
  this.score = score;

  this.scoreContainer.textContent = this.score;

  if (difference > 0) {
    var addition = document.createElement("div");
    addition.classList.add("score-addition");
    addition.textContent = "+" + difference;

    this.scoreContainer.appendChild(addition);
  }
};

HTMLActuator.prototype.updateBestScore = function (bestScore) {
  this.bestContainer.textContent = bestScore;
};

HTMLActuator.prototype.message = function (won) {
  var type    = won ? "game-won" : "game-over";
  var message = won ? "You win!" : "Game over!";

  this.messageContainer.classList.add(type);
  this.messageContainer.getElementsByTagName("p")[0].textContent = message;
};

HTMLActuator.prototype.clearMessage = function () {
  // IE only takes one value to remove at a time.
  this.messageContainer.classList.remove("game-won");
  this.messageContainer.classList.remove("game-over");
};

HTMLActuator.prototype.manageBtSounds = function () {
  // IE only takes one value to remove at a time.
  if(this.boutonSound.classList[1]=="off"){
    this.switchSoundToOn();
  }else{
    this.switchSoundToOff();
  }
};

HTMLActuator.prototype.switchSoundToOn = function () {
  this.boutonSound.classList.remove("off");
  this.boutonSound.classList.add("on");
}

HTMLActuator.prototype.switchSoundToOff = function () {
  // IE only takes one value to remove at a time.
  this.boutonSound.classList.remove("on");
  this.boutonSound.classList.add("off");
};

HTMLActuator.prototype.setDoomGuy = function (cn){
  window.clearTimeout(this.timerwow);
  if(cn == "letprevious"){
    this.doomGuy.classList.remove("wow");
  }else{
    var allClass = this.doomGuy.classList;
    for(var i=0;i<allClass.length;i++){
      this.doomGuy.classList.remove(allClass[i]);
    }
    this.doomGuy.classList.add(cn);
  }
}

HTMLActuator.prototype.setDoomGuyPassenger = function (cn) {
  var allClass = this.doomGuy.classList;
  var that = this;
  var callInitDoomGuy = function(){
    that.setDoomGuy("letprevious");
  }

  for(var i=0;i<allClass.length;i++){
    this.doomGuy.classList.remove(allClass[i]);
  }
  this.doomGuy.classList.add(cn);
  this.timerwow = setTimeout(callInitDoomGuy,300);

};