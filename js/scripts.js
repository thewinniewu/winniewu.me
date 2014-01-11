var tmovx = 80; //need to change tsize in stylesheet.scss when changed
var tmovy = tmovx * 2 * 0.866 - 1;
var tmovx = tmovx + 2;

var dOffsetsY = [0, -1, -1, -1, -1, 0, -1, -1, -1, 0, -1];
var dOffsetsX = [0, 1, 4, 3,  8, 1, 3, 5, 7, 2, 6];

$(document).ready( function() {

var wrapper = document.getElementById("w-wrapper");

for (var i = 0; i < 11; i++) {
    var triangle = document.createElement("div");
    if (i === 1 || i === 3) {
        triangle.id = "triangle-up";
    } 
    else {
        triangle.id = "triangle-down";
    }
    triangle.style.marginTop = (tmovy * dOffsetsY[i]);
    triangle.style.marginLeft = (tmovx * dOffsetsX[i]); 
    wrapper.appendChild(triangle);
}

});
