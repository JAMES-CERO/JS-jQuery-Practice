function createDiv(){

$(document).ready(function() {
    var dd = {
      id: "newDiv",
      css: {
        "color": "gray"
      }
    };

var $div = $("<div>", dd);
$div.html("auch!");
$("body").append($div);
});
}