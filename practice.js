function init() {
    var stage = new createjs.State(id("demoCanvas"));
    var circle = new createjs.Shape();

    circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
    circle.x = 100;
    circle.y = 100;
    
    stage.addChile(circle);
    stage.update();
}
