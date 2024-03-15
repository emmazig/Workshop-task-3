# Workshop-3

this is the URL -- (https://emmazig.github.io/Workshop-3/)

- Create folder on left - drag and drop images into folder
- Create variable for each image
- Use preLoad function to load the images 
    - filter(), tint() to manipulate images 

### Arrays
- Can have multiple things under one variable — use [ ] 
- Indexes start at 0 ( 0, 1, 2, 3…..)
- Can use random variable- takes a random image from the array. - (put in setup)
- Frame rate – in setup
-- (how many times the draw loop runs per second)
  

Let ____ = [ 30, 70, 60, 50];
rect( 100, 100, ____[2], 100);
→ 2 = 60

Let ___, ___, ___;
Is the same as:
Let __;
Let __;
Let __;

## EXAMPLE

Let imgs = [ ];
Let __,__,__;
Function preLoad () {
	__ = loadImage ( ‘ foldername/imagename’);
	(same with other images)

(in set up)

imgs.push(___);
Repeat with other images

(in draw)

image(imgs[ index ], xpos, ypos);


## PIXELS

(in setup) → pixelDensity (1);

Pixels are stored in an array
4 elements in the array for each pixel ( RGBA)

To find the values of a given pixel on the screen:
( xvalue + value * width) * 4


### All images from pexels.com
