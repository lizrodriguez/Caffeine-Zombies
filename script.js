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
    createZombie();
    });

  function createZombie(){
    let $zombies = $('div').last().addClass('zombies');
    $zombies.appendTo($('<div id="board>'));

    // $zombies.first($('<div id="board" style="display: block;">'));
    // setTimeout(function(){
    // $('div#zombie').show();
    // }, 2000); //hide the p text after 5 seconds
  }
  // createZombie();



});
