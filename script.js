jQuery(function() {
  //create board and show rules
  let score = {barista: 0, zombie: 0}; //object to keep score

  let timer = 10;
  let zombieSpawn;

  function displayBoard(){
    $('div#board').hide();  //hide cafe board by default
    //if start button is pressed
    $('button#start').click(function() {
      $('div#rules').hide(); //hide rules
      $('div#board').show(); //then display empty cafe
      // console.log("start button clicked");
      $('#gameover').hide();
    });
  }
  displayBoard();

  $('button#ready').click(function() {
    // console.log("ready button clicked");
    $('#boardInstruction').remove();
    $('button#ready').remove();

    $('#timer').text('Timer: ' + timer);
    setTimeout(countdownByOne, 1000);
    // createZombie(); //create a loop to get extra zombies?

    function countdownByOne(){
      timer -= 1;
      $('#timer').text('Timer: ' + timer);

      if(timer > 0){
        setTimeout(countdownByOne, 1000);
      }
      else {
        $('#gameover').show();
        clearInterval(zombieSpawn); //stops zombies from spawning
      }


    }

    zombieSpawn = setInterval(function(){
      createZombie();
      }, 2500);
  });

  function createZombie(){
  // let $zombies = $('div').last().addClass('zombiein');
  let $zombies = $('<div class="zombiein"></div>');
  $zombies.appendTo($('#board'));// $zombies.appendTo($('<div id="board>'));
  let x = Math.random() * 600;
  let y = Math.random() * 400;

  $zombies.css('top', y);
  $zombies.css('left', x);

  console.log('x : ' + x + ' y : ' + y);

    setTimeout(function(){
    angryZombie($zombies);
    }, Math.random()*5000); //after random amount of time, show zombieout/angry zombie
  }

  function angryZombie(zombies){
    if (timer ===0){
      return; //will exit if game is over (timer ===0)
    }

    zombies.addClass('zombieout');
  }

  // //if zombie doesn't get hit after 3 seconds, then display zombieAngrier increase its score
  // score.zombie+=10;
  // console.log("zombie score: " + score.zombie);

  function shootZombie(){
    let $zombies = $('div').last();
    $zombies.appendTo($('<div id="board>'));
      $zombies.on("click", function(){
        $zombies.addClass('zombiehappy');
        setTimeout(function(){
        $zombies.remove();
        }, 1000);
        score.barista+=10;
        console.log("barista score: " + score.barista);
       //count points towards you/barista
      });
  }
  //shootZombie();

});
