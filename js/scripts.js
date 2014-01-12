var tmovx = 85; //need to change tsize in stylesheet.scss when changed
var tmovy = tmovx * 2 * 0.869 - 1;
var tmovx = tmovx + 2;

var dOffsetsY = [0, -1, -1, -1, -1, -1, 0, -1, -1, -1, -1, -1, 0, -1];
var dOffsetsX = [0, 1, 3, 4, 7, 8, 1, 2, 3, 5, 6, 7, 2, 6];

$(document).ready( function() {

// HOME TRIANGLES RENDERING


 
var wrapper = document.getElementById("home");

for (var i = 0; i < 14; i++) {
    var triangle = document.createElement("div");
    if (i === 1 || i === 2 || i === 4 || i === 7 || i === 10) {
        triangle.id = "triangle-up";
        if (i === 7 || i === 10)
            triangle.style.borderBottomColor = "rgba(255,255,255,0.5)";
    } 
    else {
        triangle.id = "triangle-down";
    } 
    
    triangle.style.marginTop = (tmovy * dOffsetsY[i]);
    triangle.style.marginLeft = (tmovx * dOffsetsX[i] - tmovx/2); 
    
   
    wrapper.appendChild(triangle);
}
});

// NAVIGATION LOGIC
function navigate(target) {
   $(".w-wrapper").not("#" + target).fadeOut();
    $("#" + target).fadeIn(); 
    
}


