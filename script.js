jQuery(function() {
  //create board and show rules
    function displayBoard(){
      $('div#board').hide();  //hide cafe board by default
      //if start button is pressed
      $('button#start').click(function() {
        $('div#rules').hide(); //hide rules
        $('div#board').show(); //then display empty cafe
        console.log("start button clicked");
      });
    }
    displayBoard();

    $('button#ready').click(function() {
    console.log("ready button clicked");
    $('p#board').remove();
    $('button#ready').remove();
    createZombie(); //create a look to get extra zombies?
    });

    function createZombie(){
      let $zombies = $('div').last().addClass('zombiein');
      $zombies.appendTo($('<div id="board>'));
      $zombies.css('top', Math.random() * 400);
      $zombies.css('left', Math.random() * 600);
      setTimeout(function(){
      angryZombie();
      }, Math.random()*5000); //after a few seconds, show zombieout
    }

    function angryZombie(){
      let $zombies = $('div').last().addClass('zombieout');
      $zombies.appendTo($('<div id="board>'));
    }

    function shootZombie(){
      let $zombies = $('div').last();
      $zombies.appendTo($('<div id="board>'));
      $zombies.on("click", function(){
      $zombies.addClass('zombiehappy');
      });
    }
shootZombie();

});
