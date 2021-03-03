var wall;
var speed, weight, bullet;
var deformation;

function setup() {
  createCanvas(1200, 400);

  speed = random(223,321);
  weight = random(30,52)
  thickness=random(22,83)

  bullet = createSprite(50, 200, 100, 30);
  
  bullet.velocityX = speed;
  wall = createSprite(1100,200,thickness,500);
}

function draw() {
  background(245);
  drawSprites();

  if(abs(wall.x-bullet.x)<(100+ wall.width/2)){
     deformation = Math.round((0.5*weight*speed*speed)/(thickness*thickness*thickness)); 
      bullet.velocityX=0;
    if(deformation<10){
       bullet.shapeColor="green";
    }
     else if(deformation>10){
       bullet.shapeColor="red";
    }
  }
}

function hasCollided(lbullet, lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge >= wallLeftEdge){
    return true
  }
  return false;
}

if(hasCollided(bullet, wall)){
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

  if(damage > 10){
    wall.shapeColor = color(255,0,0);
  }

  if(damage < 10){
    wall.shapeColor = color(0,255,0);
  }
}