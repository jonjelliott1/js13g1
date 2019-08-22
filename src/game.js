// initialize the game and setup the canvas
    let { canvas, context } = kontra.init();

    // create a basic sprite with a velocity
    window.sprite = kontra.Sprite({
      x: 10,
      y: 10,
      dx: 3,
      dy: 0,
      width: 20,
      height: 40,
      color: 'red'
    });

    // create a basic sprite with a velocity
    window.sprite2 = kontra.Sprite({
      x: 10,
      y: 10,
      dx: 3,
      dy: 0.5,
      width: 20,
      height: 40,
      color: 'green'
    });

    // create the game loop to update and render the sprite
    window.loop = kontra.GameLoop({
      update: function() {
        sprite.update();
		sprite2.update();

        // reset the sprites position when it reaches the edge of the game
        if (sprite.x > canvas.width) {
          sprite.x = -sprite.width;
        }
		 // reset the sprites position when it reaches the edge of the game
        if (sprite2.x > canvas.width) {
          sprite2.x = -sprite2.width;
        }
		 if (sprite2.y > canvas.height) {
          sprite2.y = -sprite2.height;
        }
      },
      render: function() {
        sprite.render();
		sprite2.render();
      }
    });

    // start the loop
    loop.start();
  