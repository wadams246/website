var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width / 2;
var y = 10;
var dx = 3;
var dy = 3;
var score = 0;
var gravity = 0.4;
var bounce = 0.85;

/*user input controls*/
var rightPressed = false;
var leftPressed = false;
var paused = false;
var stop = false;

/*top brick variables*/
var ballRadius = 10;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;
var brickRowCount = 5;
var brickColumnCount = 3;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;

var bricks = [];
for (c = 0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(r = 0; r<brickRowCount; r++) {
        bricks [c] [r] = { x: 0, y: 0, status: 1 };
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = true;
    }
    else if (e.keyCode == 37) {
        leftPressed = true;
    }
    
    if (e.keyCode == 80 && paused == false) {
        paused = true;
        console.log(paused);
    } else if (e.keyCode == 80 && paused == true) {
        paused = false;
        console.log(paused);
    }
}

function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = false;
    }
    else if (e.keyCode == 37) {
        leftPressed = false;
    }
}

function collisionDetection() {
    for (c = 0; c < brickColumnCount; c++) { 
        for (r = 0; r < brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.status == 1) {
                if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;
                    if(score == brickRowCount * brickColumnCount) {
                        alert ("YOU WIN, CONGRATULATIONS!");
                        document.location.reload();
                    }
                }
            }
        }
    }
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#009AFF";
    ctx.fill();
    ctx.closePath();
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#009AFF";
    ctx.fill();
    ctx.closePath();
}

/*draw brick function using a 2d array*/
function drawBricks() {
    for (c = 0; c < brickColumnCount; c++) {
        for (r = 0; r < brickRowCount; r++) {
            if (bricks[c][r].status ==1) {
                var brickX = (r * (brickWidth + brickPadding)) + brickOffsetLeft;
                var brickY = (c * (brickHeight + brickPadding)) + brickOffsetTop;
                bricks [c][r].x = brickX;
                bricks [c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: " + score, 8, 20);
}
function draw() {
    if (paused == false) {  //checks if game is paused before drawing new frame
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        drawBall();

        if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
            dx = -dx;
        }
        if (y + dy >= canvas.height - ballRadius) {
            dy *= -bounce;
            if (dy > -1) {
                stop = true;
            }
        }
        
        /*else if (y + dy > canvas.height - ballRadius) {
            if (x > paddleX && x < paddleX + paddleWidth) {
                dy = -dy;
            }
            else {
                document.location.reload();
            }
        }

        if (rightPressed && paddleX < canvas.width - paddleWidth) {
            paddleX += 7;
        }
        else if (leftPressed && paddleX > 0) {
            paddleX -= 7;
        }*/
        
        if (stop == false){
            dy += gravity;
            y += dy;    
        }
          
    }
}

setInterval(draw, 16.67);

