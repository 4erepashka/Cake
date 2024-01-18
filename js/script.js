import {createNoise2D} from "https://cdn.skypack.dev/simplex-noise@4.0.0";

window.requestFrame = (function(){
	return  window.requestAnimationFrame       ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame    ||
		function( callback ){
		window.setTimeout(callback, 1000 / 10);
	};
})();

const noise2D = createNoise2D();
const canvas = document.getElementById("bg");
canvas.setAttribute('width', window.innerWidth);
canvas.setAttribute('height', '1200px');

const context = canvas.getContext("2d");

const startTime = new Date().getTime();
const dripDist = 45;
const minSpeed = 0.3;
let currentTime = 0;

const dripsAmount = Math.floor(canvas.width / dripDist) + 3; 

const colors = ['rgba(204, 204, 255, 1)', 'rgb(213,237,255)', 'rgba(204, 204, 255, 1)','rgb(213,237,255)' ];
let waves = [];
let currentWave = undefined;

if(colors.length > 0) {
  currentWave = createWave(0, colors[0])
  waves.push(currentWave);
}

function resizeCanvas() {
  canvas.setAttribute('width', window.innerWidth);
  canvas.setAttribute('height', window.innerHeight);
}

function createWave(colorIndex, color) {
  let drips = [];
  for(let i = 0; i < dripsAmount; i++) {
    drips.push(0);
  }
  
  return {
    drips: drips,
    color: color,
    colorIndex: colorIndex,
    isDone: false
  }
}

function render() {
  let now = new Date().getTime();
  currentTime = (now - startTime) / 1000;
  
  for(let i = 0; i < waves.length; i++) {
    let linePoints = [];
    for(let j = 0; j < waves[i].drips.length; j++) {
      waves[i].drips[j] += minSpeed + (noise2D((j * dripsAmount), currentTime) + 1);
      
      let linePoint = {
              x: dripDist * j, 
              y: waves[i].drips[j]
            };
      
      linePoints.push(linePoint);
      
      if(linePoint.y > canvas.height && !waves[i].isDone) {
        waves[i].isDone = true;
      }
    }

    if(linePoints.length > 0) {
      context.beginPath(); 
      context.strokeStyle = waves[i].color;
      context.fillStyle = waves[i].color;
      context.moveTo(0, 0); 
      context.lineTo(linePoints[0].x, linePoints[0].y);

      let p = 0;

      for (p = 1; p < linePoints.length - 2; p ++){
        var xc = (linePoints[p].x + linePoints[p + 1].x) / 2;
        var yc = ((linePoints[p].y + linePoints[p + 1].y) / 2);

        context.quadraticCurveTo(linePoints[p].x, linePoints[p].y, xc, yc); 
      }

      context.quadraticCurveTo(linePoints[p].x, linePoints[p].y, linePoints[p+1].x,linePoints[p+1].y);
      context.lineTo(canvas.width, 0); 
      context.stroke();
      context.fill();
    }    
  }
  
  if(currentWave && currentWave.isDone) {
    let nextColorIndex = currentWave.colorIndex + 1;

    if(nextColorIndex >= colors.length) {
        nextColorIndex = 0;
    }
    
    currentWave = createWave(nextColorIndex, colors[nextColorIndex]);
    waves.push(currentWave);
    
    if(waves.length == 3) {
      waves.shift();
    }
  }  
  
  requestFrame(render);
}

window.addEventListener('resize', resizeCanvas);

render();