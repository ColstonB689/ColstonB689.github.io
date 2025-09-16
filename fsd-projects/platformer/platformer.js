$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(0, 200, 200, 20, "blue")
    createPlatform(200, 0, 20, 75, "blue")
    createPlatform(300, 225, 200, 20, "blue")
    createPlatform(800, 375, 150, 20, "blue")
    createPlatform(500, 625, 100, 1, "grey")
    createPlatform(250, 500, 75, 1, "grey")
    createPlatform(0, 375, 100, 10, "blue")
    createPlatform(1200, 300, 5, 100, "blue")
    createPlatform(1300, 300, 100, 20, "blue")
    createPlatform(1300, 75, 10, 100, "blue")
    createPlatform(700, 500, 1000, 10, "blue")





    // TODO 3 - Create Collectables
    createCollectable("max", 25, 300);
    createCollectable("steve", 1330, 220);
    createCollectable("diamond", 1200, 650);



    
    // TODO 4 - Create Cannons
    createCannon("top",300,1500, 100, 80)
    createCannon("top",1260,1750, 100, 80)
    createCannon("left", 550, 20000, 1500, 1500)


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
