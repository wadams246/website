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