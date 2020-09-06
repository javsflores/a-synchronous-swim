
$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    var direction = arrowPress[1];
    SwimTeam.move(direction.toLowerCase());
    // console.log('window.ajaxCommand', window)
  }

});




// $('body').ready(() => {
  // $('body').on('keydown', (event) => {

  // while ()
// })

console.log('Client is running in the browser!');

