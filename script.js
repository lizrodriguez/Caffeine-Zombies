jQuery(function() {

//create board and show rules
  $('div#board').hide();  //hide cafe board by default
  function displayBoard(){
    //if start button is pressed
    $('button#start').click(function() {
      $('div#rules').hide(); //hide rules
      $('div#board').show(); //then display empty cafe
      console.log("button clicked");
    });
  }

  displayBoard();

    //display background stuff

  // function createZombies(){

  // }


});
