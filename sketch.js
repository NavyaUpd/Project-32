const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, leftWall, rightWall;
var ballArr = [];
var score = 0;
var gamestate = "play";
var rules, rules1, rules2, rules3, rules4, rules5;
var count = 0;

rules = "--- RULES --- "
rules1 = "1. Press SPACE to create a new ball at mouse's X position"
rules2 = "2. Match 2 balls of the same colour to score points"
rules3 = "3. Whenever you match 2 balls, a new ball of a score higher than "
rules4 = "what you matched appears (If you matched 2 balls of 50, no ball appears)"
rules5 = "4. Make sure that the number of balls never exceeds 15."



function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  }
  ground = Bodies.rectangle(400,410,800,20,options);
  World.add(world, ground);
  leftWall = Bodies.rectangle(-10,200,20,400,options);
  World.add(world, leftWall);
  rightWall = Bodies.rectangle(810,200,20,400,options);
  World.add(world, rightWall);

  ballArr.push(new Ball(random(0,800),0,Math.floor(random(1,6))*10));

}

function draw() {
  background("aqua");  
  Engine.update(engine);

  textSize(20)
  fill("black");
  text("Score: " + score, 20, 20);
  if(gamestate !== "end"){
    text("No. of balls: " + ballArr.length, 20, 40);
  }

  if(count <= 3){
    textSize(20)
    fill("black");
    text(rules, 300, 20+70);
    text(rules1, 70, 40+70);
    text(rules2, 70, 60+70);
    text(rules3, 70, 80+70);
    text(rules4, 70, 100+70);
    text(rules5, 70, 120+70);
  }

  if(keyWentDown("SPACE") && gamestate !== "end"){
    ballArr.push(new Ball(mouseX,0,Math.floor(random(1,6))*10));
    count++;
  }

  for(var j = 0; j < ballArr.length; j++){
    for(var i = 0; i < ballArr.length; i++){
      if(Matter.SAT.collides(ballArr[i].body, ballArr[j].body).collided && ballArr[i].size === ballArr[j].size && j !== i){
        var newX = ballArr[i].body.position.x;
        var newY = ballArr[i].body.position.y;
        if(gamestate !== "end"){
        if(ballArr[i].size === 10){
          score += 10;
        }else if(ballArr[i].size === 20){
          score += 20;
        }else if(ballArr[i].size === 30){
          score += 30;
        }else if(ballArr[i].size === 40){
          score += 40;
        }else if(ballArr[i].size === 50){
          score += 50;
        }
        }
        if (ballArr[i].size !== 50){
          var newSize = ballArr[i].size + 10;
          ballArr.push(new Ball(newX, newY, newSize));
        }

        World.remove(world, ballArr[i].body);
        World.remove(world, ballArr[j].body);
        ballArr.splice(i,1);
        ballArr.splice(j,1);
        
      }
    }
  }
  if (gamestate !== "end"){
    for(var i = 0; i < ballArr.length; i++){
      ballArr[i].display();
    }
  }

  if(ballArr.length >= 15){
    gamestate = "end";
  }

  if (gamestate === "end"){
    textSize(100);
    fill("red");
    text("GAME OVER", 100, 300);
    textSize(20);
    text("No. of balls: " + "15", 20, 40)
  }  
}