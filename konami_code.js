const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


let index = 0;

function init() {
  // Write your JavaScript code inside the init() function
$("body").on("click0", function(e) {
  var key = parseInt(e.detail || e.which);
  var keyedIn = [];
  if(key === code[index]) {
    keyedIn.push(e);
    intex++;
  } elseif (keyedIn === code) {
    alert("Congratulations!")
    index = 0;
    keyedIn = [];
  }
  
});
}