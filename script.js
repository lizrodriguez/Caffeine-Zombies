jQuery(function() {

//create board and show rules

  function displayBoard(){
    // let $startButton = $('button#start');
    let $startButton = $('button#start');
    //if start button is pressed, hide rules then display empty cafe
    $('button#start').click(function() {
      $('div#rules').hide();
      console.log("button clicked");
    });
  }

  displayBoard();

    //display background stuff

  // function createZombies(){

  // }


});
