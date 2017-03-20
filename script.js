// Liz Rodriguez
// https://lizrodriguez.github.io
jQuery(function() {
  //create board and show rules
  // let score = {barista: 0, zombie: 0}; //object to keep score
  let baristaScore = 0;
  let zombieScore = 0;
  let timer = 30;
  let zombieSpawn;

  function displayBoard(){
    $('#board').hide();  //hide cafe board by default
    $('#gameOver').hide(); //hide gameOver until needed
    //if start button is pressed

    $('#start').click(function() {
      $('#rules').hide(); //hide rules
      $('#board').show(); //then display cafe
      // console.log("start button clicked");
    });
  }
  displayBoard();

function gameLevelEasy(){
    $('#gameLevelEasy').click(function() {
    // console.log("ready button clicked");
    $('#boardInstruction').remove();
    $('h2').remove();
    $('#gameLevelEasy').remove();
    $('#gameLevelHard').remove();
    $('#timer').text('Timer: ' + timer);
    setTimeout(countdownByOne, 1000);

    function countdownByOne(){
      timer -= 1;
      $('#timer').text('Timer: ' + timer);
      if(timer > 0){
        setTimeout(countdownByOne, 1000);
      }
      else {
        clearInterval(zombieSpawn); //stops zombies from spawning - https://www.w3schools.com/jsref/met_win_clearinterval.asp
        $('.zombietrakr').remove(); //removes all zombies with the class zombie

  if (baristaScore > zombieScore){
            $('#gameOver').show();
            $('#gameOver').text("You win, you saavy Barista!");
            // console.log("You win, you saavy Barista!");
            } else {
              $('#gameOver').show();
              $('#gameOver').text("You lose! The customers left angry and without coffee.");
              // console.log("You lose! The customers left angry and without coffee.");
            }
            if (baristaScore === zombieScore){
              $('#gameOver').show();
              $('#gameOver').text("You tied. Meh.");
              // console.log("You tied");
            }
      }
    }//end countDownByOne
    zombieSpawn = setInterval(function(){ //create zombies every x seconds
    createZombie();
    }, 2500);
  });//end button
}//end gamelevelEasy
gameLevelEasy();



function gameLevelHard(){
    $('#gameLevelHard').click(function() {
    // console.log("ready button clicked");
    $('#boardInstruction').remove();
    $('h2').remove();
    $('#gameLevelEasy').remove();
    $('#gameLevelHard').remove();
    $('#timer').text('Timer: ' + timer);
    setTimeout(countdownByOne, 1000);

    function countdownByOne(){
      timer -= 1;
      $('#timer').text('Timer: ' + timer);
      if(timer > 0){
        setTimeout(countdownByOne, 1000);
      }
      else {
        clearInterval(zombieSpawn); //stops zombies from spawning - https://www.w3schools.com/jsref/met_win_clearinterval.asp
        $('.zombietrakr').remove(); //removes all zombies with the class zombie

  if (baristaScore > zombieScore){
            $('#gameOver').show();
            $('#gameOver').text("You win, you saavy Barista!");
            // console.log("You win, you saavy Barista!");
            } else {
              $('#gameOver').show();
              $('#gameOver').text("You lose! The customers left angry and without coffee.");
              // console.log("You lose! The customers left angry and without coffee.");
            }
            if (baristaScore === zombieScore){
              $('#gameOver').show();
              $('#gameOver').text("You tied. Meh.");
              // console.log("You tied");
            }
      }
    }//end countDownByOne
    zombieSpawn = setInterval(function(){ //create zombies every x seconds
    createZombie();
    }, 700);
  });//end button
}//end gamelevelEasy
gameLevelHard();


  function createZombie(){
    //create zombie with class zombiein
    $zombies = $('<div class="zombieIn"></div>');
    $zombies.addClass("zombietrakr"); //to track zombie for removal
    $zombies.appendTo($('#board'));
    $('body').css('cursor', 'url(images/coffee_cup_50x50.gif), auto');//http://madgharr.deviantart.com/art/Coffee-16x16-369083436

    //position zombies in random locations
    let x = Math.random() * 600;
    let y = Math.random() * 400;
    $zombies.css('top', y);
    $zombies.css('left', x);
    // console.log('x : ' + x + ' y : ' + y);
    setTimeout(function(){
      angryZombie($zombies);
      }, Math.random()*2000); //after x seconds, zombies start to get angry
  }//end createZombie

  function angryZombie($zombies){
    if (timer ===0){
      return; //will exit if game is over (timer ===0)
    }
    //zombieIn is already on the board
    setTimeout(function(){
      $zombies.removeClass("zombieIn").addClass("zombietrakr zombieOut");
      }, 2000); //after x sec, show zombieOut

    setTimeout(function(){
      $zombies.removeClass("zombieOut").addClass("zombietrakr zombieAngry");
      }, 4000); //after x sec, show zombieAngry

      if($('.zombieAngry')[0]){ //http://stackoverflow.com/questions/5783280/check-if-div-with-certain-class-name-exists
        zombieScore += 1;   //increase zombie score if no hits
        $('#zombieScore').text(' Zombie Score: ' + zombieScore);
        $('.zombieAngry').remove();
        }

    $zombies.on("click", function(){  //shoot espresso at zombies, they become happy
      $zombies.removeClass("zombieAngry").addClass('zombietrakr zombieHappy');
      setTimeout(function(){ //remove happy zombies after x seconds
      $zombies.remove();
      }, 500);
      baristaScore += 1;
       //count points towards you/barista
      $('#baristaScore').text('Barista Score: ' + baristaScore);
      $('#zombieScore').text('  Zombie Score: ' + zombieScore);
      }); //end onclick
  }//end angryZombie
  // $zombies.attr('class', 'zombietrakr'); //add a zombie class to track all zombies on the board, regardless of main class
});
