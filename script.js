jQuery(function() {
  //create board and show rules
  // let score = {barista: 0, zombie: 0}; //object to keep score
  let baristaScore = 0;
  let zombieScore = 0;
  let timer = 30;
  let zombieSpawn;
  // let $zombies = $('<div class="zombie"></div>');

  function displayBoard(){
    $('#board').hide();  //hide cafe board by default
    //if start button is pressed
    $('#start').click(function() {
      $('#rules').hide(); //hide rules
      $('#board').show(); //then display cafe
      console.log("start button clicked");
      $('#gameover').hide();
    });
  }
  displayBoard();

  $('#ready').click(function() {
    console.log("ready button clicked");
    $('#boardInstruction').remove();
    $('#ready').remove();
    $('#timer').text('Timer: ' + timer);
    setTimeout(countdownByOne, 1000);

    function countdownByOne(){
      timer -= 1;
      $('#timer').text('Timer: ' + timer);
      if(timer > 0){
        setTimeout(countdownByOne, 1000);
      }
      else {
        clearInterval(zombieSpawn); //stops zombies from spawning
        $('#gameover').show();
      }
    }

    zombieSpawn = setInterval(function(){ //create zombies every 2.5 seconds
    createZombie();
    }, 2500);
  });//end buttonready

  function createZombie(){
    //create zombie with class zombiein
    $zombies = $('<div class="zombieIn"></div>');
    $zombies.appendTo($('#board'));
    //position zombies in random locations
    let x = Math.random() * 600;
    let y = Math.random() * 400;
    $zombies.css('top', y);
    $zombies.css('left', x);
    // console.log('x : ' + x + ' y : ' + y);
    setTimeout(function(){
      angryZombie($zombies);
      }, Math.random()*1000); //after x seconds, zombies start to get angry
  }//end createZombie

  function angryZombie($zombies){
    if (timer ===0){
      return; //will exit if game is over (timer ===0)
    }
    //zombieIn is already on the board
    setTimeout(function(){
      $zombies.removeClass("zombieIn").addClass("zombieOut");
      }, Math.random()*3000); //after x sec, show zombieOut

    setTimeout(function(){
      $zombies.removeClass("zombieOut").addClass('zombieAngry');
      }, Math.random()*3000); //after x sec, show zombieAngry
    zombieScore += 1;   //increase zombie score if no hits
    console.log("zombie score: " + zombieScore);

    $zombies.on("click", function(){  //shoot espresso, they become happy
    $zombies.removeClass("zombieAngry").addClass('zombieHappy');

    console.log("zombie is happy");
    setTimeout(function(){ //remove happy zombies after x seconds
    $zombies.remove();
    }, 500);
    baristaScore += 1;
    console.log("barista score: " + baristaScore);
     //count points towards you/barista
    $('#baristaScore').text('Barista Score: ' + baristaScore);
    $('#zombieScore').text('Zombie Score: ' + zombieScore);

    });

  }

});
