var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    var imgSaw = 'img/hey-phid.png'
    function createSawBlade(x,y){
    var hitZoneSize = 15;
    var damageFromObstacle = 35;
    var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
    sawBladeHitZone.x = x;
    sawBladeHitZone.y = y;
    game.addGameItem(sawBladeHitZone);
    var obstacleImage = draw.bitmap(imgSaw);
    sawBladeHitZone.addChild(obstacleImage);
    obstacleImage.x = -50
    obstacleImage.y = -75
    }
    // createSawBlade(500, 220)
    // createSawBlade(900, 275)
    // createSawBlade(1200, 300)
    function createEnemy(x,y) {
    var enemy = game.createGameItem("enemy", 25);
    var redSquare = draw.bitmap('img/tunnel-bear.png');
    redSquare.regX = redSquare.image.width / 2
    redSquare.regY = redSquare.image.height / 2
    redSquare.x = -0;
    redSquare.y = -0;
    redSquare.scaleX = redSquare.scaleY = 100 / redSquare.image.height;
    enemy.addChild(redSquare);
    enemy.x = x;
    enemy.y = y;
    game.addGameItem(enemy);
    enemy.velocityX = -1
    enemy.velocityY = 0
    enemy.rotationalVelocity = 0
    enemy.onPlayerCollision = function () {game.changeIntegrity(-20)};
    enemy.onProjectileCollision = function () {game.increaseScore(100); enemy.fadeOut();};
    }
    // createEnemy(400, groundY - 20);
    // createEnemy(800, groundY - 70);
    // createEnemy(1200, groundY - 50);
    function createReward(x,y){
      var reward = game.createGameItem("reward", 25);
      var blueCircle = draw.rect(50, 50, "blue");
      blueCircle.x = -25;
      blueCircle.y = -25;
      reward.addChild(blueCircle);
      reward.x = x;
      reward.y = y;
      game.addGameItem(reward);
      reward.velocityX = -1
      reward.velocityY = 0
      reward.rotationalVelocity = 100
      reward.onPlayerCollision = function () {game.changeIntegrity(+50); reward.fadeOut();};
      reward.onProjectileCollision = function () {game.increaseScore(200); reward.fadeOut();};
    } 
    // createReward(900, groundY - 50)
    function createMarker(x, y){
      var end = game.createGameItem("end", 25);
      var endBox = draw.rect(50, 50, "yellow");
      endBox.x = -25;
      endBox.y = -25;
      end.addChild(endBox);
      end.x = x;
      end.y = y;
      game.addGameItem(end);
      end.velocityX = -1
      end.velocityY = 0
      end.rotationalVelocity = 100
      end.onPlayerCollision = function () {game.changeIntegrity(+100);game.increaseScore(1000); end.fadeOut(); startLevel();};
    } 
    // createMarker(1500, groundY - 50)
    
    function startLevel() {
    
      // TODO 13 goes below here
      var level = levelData[currentLevel];
      var levelObjects = level.gameItems;
      for (i = 0; i < levelObjects.length; i++){
        if (levelObjects[i].type === "sawblade"){
          createSawBlade(levelObjects[i].x, levelObjects[i].y);
        }
        if (levelObjects[i].type === 'enemy'){
          createEnemy(levelObjects[i].x, levelObjects[i].y)
        }
        if (levelObjects[i].type === 'reward'){
          createReward(levelObjects[i].x, levelObjects[i].y)
        }
        if (levelObjects[i].type === 'end'){
          createMarker(levelObjects[i].x, levelObjects[i].y)
        }
      }


      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
