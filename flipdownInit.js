//COUNTDOWN CLOCK
var flipdown = new FlipDown(1593543600, "flipdown", {
    theme: 'light' // or dark
});
flipdown.start();
flipdown.ifEnded(() => {
    $(".yellowButt").css("background-color", "red");
    console.log('The countdown has ended!');
  });
