const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


let index = 0;
let entered = [];

function init(e) {
  var keyed = parseInt(e.detail || e.which);
  $("body").on("keydown", function() {
    if(keyed === code[index]) {
      entered.push(keyed);
      index++;
    }
    if(entered === code) {
      alert("Congratulations!");
    }
  });
}
