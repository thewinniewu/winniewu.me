var tmovx = 85; //need to change tsize in stylesheet.scss when changed
var tmovy = tmovx * 2 * 0.869 - 1;
var tmovx = tmovx + 2;

var dOffsetsY = [0, -1, -1, -1, -1, -1, 0, -1, -1, -1, -1, -1, 0, -1];
var dOffsetsX = [0, 1, 3, 4, 7, 8, 1, 2, 3, 5, 6, 7, 2, 6];

$(document).ready( function() {

var wrapper = document.getElementById("w-wrapper");

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
    var artlink = document.createElement("div");
    artlink.id = "artlink";
    artlink.innerHTML = '<a href="http://people.fas.harvard.edu/~weiwu/home.html" target=blank> ART </a>'; 
    wrapper.appendChild(artlink);
    
    var codelink = document.createElement("div");
    codelink.id = "codelink";
    codelink.innerHTML ='<a href="http://www.github.com/thewinniewu" target=blank> CODE </a>';
    wrapper.appendChild(codelink);



});
