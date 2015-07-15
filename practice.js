<<<<<<< HEAD
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(240, 160, 100, 40);
ctx.strokeStyle = "rdba(0, 0, 255, .1)";
ctx.stroke();
ctx.closePath();
=======
<<<<<<< HEAD
=======
function init() {
    var stage = new createjs.State(id("demoCanvas"));
    var circle = new createjs.Shape();

    circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
    circle.x = 100;
    circle.y = 100;
    
    stage.addChile(circle);
    stage.update();
}

>>>>>>> 1ff4fdaea4954c609ad0986651e69e071f91c485
>>>>>>> 85ac1cc0def7f80af412817703818b3564dc8808
