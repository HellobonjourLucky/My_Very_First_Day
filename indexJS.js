//expectaion JS
var canvas = document.querySelector('canvas');

canvas.width = 615;
canvas.height = 350;

var c = canvas.getContext('2d');

function Circle(x, y, dx, dy,radius){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function(){
    // console.log(x, y);
    c.beginPath(); //seperate previouse line(disconnecting)
    c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    c.strokeStyle = 'bule';
    c.stroke();
    c.fill();
  }

  this.update = function(){
    if(this.x+this.radius > canvas.width || this.x-this.radius < 0){
      this.dx = -this.dx;
    }
    if(this.y+this.radius > canvas.height || this.y-this.radius < 0){
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
}


var circleArray = [];
for(var i = 0; i<50; i++){
  var radius = 30;
  var x = Math.random()* (innerWidth - radius*2) + radius;
  var y = Math.random()* (innerHeight - radius*2) + radius;
  var dx = Math.random();
  var dy = Math.random();
  circleArray.push(new Circle(x, y, dx, dy, radius));
  // console.log(circleArray);
}

function animate(){
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  // circle.update();
  c.font = "bold 150px Arial";
  c.fillStyle = "#fff";
  c.fillText("Hello", 140, 220);
  // circle.update();
  for(var i = 0; i<circleArray.length; i++){
    circleArray[i].update();
  }
}

animate();
