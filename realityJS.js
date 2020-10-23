const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('controls_color');
const reset = document.querySelector('.reset');

ctx.strokeStyle =  'black';
ctx.lineWidth = 2.5;

ctx.fillStyle = 'white';
ctx.fillRect = (0, 0, canvas.width, canvas.height);

var painting = false;

function stopPainting(){
  painting = false;
}
function startPainting(){
  painting = true;
}

function onMouseMove(e){
  var x = e.offsetX;
  var y = e.offsetY;

  if(!painting){
    ctx.beginPath();
    ctx.moveTo(x,y);
  }else{
    ctx.lineTo(x,y);
    ctx.stroke();
  }
}

if(canvas){
  canvas.addEventListener('mousemove',onMouseMove);
  canvas.addEventListener('mousedown',startPainting);
  canvas.addEventListener('mouseup',stopPainting);
}
// console.log(Array.from(colors));

Array.from(colors).forEach(function(color){
    color.addEventListener('click',function(e){
      var color = e.target.style.backgroundColor;
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
    });
});

reset.addEventListener('click',function(e){
  location.reload();
})
