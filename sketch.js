
let imgs = [];
let imgs1 =[];
let imgs2 = [];
let imgs3 = [];
let arch, bike, bus; 
let car, fab, lem, mon; 
let mot, patt, sea; 
let sign, sky, wall, win;

let counter = 0

 
function preload(){
  arch = loadImage('images/arch.png');
  bike = loadImage('images/bike.png');
  bus = loadImage('images/bus.png');
  car = loadImage('images/car.png');
  fab = loadImage('images/fab.png');
  lem = loadImage('images/lem.png');
  mon = loadImage('images/mon.png');
  patt = loadImage('images/patt.png');
  sea = loadImage('images/sea.png');
  sign = loadImage('images/sign.png');
  sky = loadImage('images/sky.png');
  wall = loadImage('images/wall.png');
  win = loadImage('images/win.png');
  
}

function setup() {

  createCanvas(400, 400);
  background(220);
  frameRate (1)
  imgs.push(arch);
  imgs.push(bike);
  imgs.push(bus);
  imgs1.push(car);
  imgs1.push(fab);
  imgs1.push(lem);
  imgs1.push(mon);
  imgs2.push(patt);
  imgs2.push(sea);
  imgs2.push(sign);
  imgs3.push(sky);
  imgs3.push(wall);
  imgs3.push(win);

  let r = random(imgs);
  let a = random (imgs1);
  let n = random(imgs2);
  let d = random(imgs3);

  image(r, 0, 0, 200, 200);
  image(a, 200, 200, 200, 200 );
  image(n, 0, 200, 200, 200);
  image(d, 200, 0, 200, 200);

}

function draw() {
 
  counter ++;

  if (counter > 3){
    filter(BLUR, 1);
  }

if (counter > 5){
  let x = random (lem.width)
  let y = random (lem.height)
  let c = lem.get(int(x), int(y))
  fill(c)
  noStroke()
  rect(x, y, 20, 20)
  
}
  
if (counter > 6){
  frameRate (50)
  
}
}
