const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;

//To check space pressed
let spacePressed = false;

//To check move up and down
let angle = 0;

//To control color spectrum
let hue = 0;

//Frame count of loop
let frame = 0;