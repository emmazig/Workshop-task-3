
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
  
}

function draw() {
  background(220);

  let r = random(imgs);
  let a = random (imgs1);
  let n = random(imgs2);
  let d = random(imgs3);

  image(r, 0, 0, 200, 200);
  image(a, 200, 200, 200, 200 );
  image(n, 0, 200, 200, 200);
  image(d, 200, 0, 200, 200);


    counter ++;
   

     if ( counter > 3 ){
      d.loadPixels();
  
      for (let y = 0; y < d.height; y++){
        for(let x = 0; x < d.width/ 2; x++){
          let index = (x + y * d.width) * 4;
          a.pixels[index] = 255 
          d.pixels[index + 1] = 0
          d.pixels[index + 2] = 150
          d.pixels[index + 3] = 255
        }
       }
        d.updatePixels();
     }

  //   r.loadPixels();
  
  // for (let y = 0; y < r.height; y++){
  //   for(let x = 0; x < r.width/4; x++){
  //     let index = (x + y * r.width) * 4;
  //    // r.pixels[index] = 255 
  //     //r.pixels[index + 1] = 0
  //     r.pixels[index + 2] = 0
  //     r.pixels[index + 3] = 255
  //   }
  //  }
  //   r.updatePixels();


  //   a.loadPixels();
  
  //   for (let y = 0; y < a.height/2; y++){
  //     for(let x = 0; x < a.width/3; x++){
  //       let index = (x + y * a.width) * 4;
  //       //a.pixels[index] = 255 
  //       a.pixels[index + 1] = 150
  //       a.pixels[index + 2] = 0
  //       a.pixels[index + 3] = 255
  //     }
  //    }
  //     a.updatePixels();

  //     n.loadPixels();
  
  //   for (let y = 0; y < n.height/3; y++){
  //     for(let x = 0; x < n.width; x++){
  //       let index = (x + y * n.width) * 4;
  //       a.pixels[index] = 255 
  //       //n.pixels[index + 1] = 150
  //       n.pixels[index + 2] = 0
  //       n.pixels[index + 3] = 255
  //     }
  //    }
  //     n.updatePixels();

      
  



}

