function find_player_color() {
  var colorname = prompt("What is your name? first last or both, spaces are ok");
  if (colorname != null) {
        document.getElementById("demo").innerHTML = "This is your color "+ colorname;
  document.bgColor=colorname;
  }
  else {alert("Sorry, that isn't a recognized word, try again!" )}
  
}
$(document).ready(function(){
    $("#howToBtn").click(function(){
        $("p").toggle();
    });
  });