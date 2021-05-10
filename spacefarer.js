let myShader, myCam;
function blobDraw(x, y, z, r, a=0)
{
	push();
	translate(x, y, z);
	rotateZ(a * Math.PI / 180);
	sphere(r, 80, 80);
	pop();
}

function preload()
{
	myShader=loadShader('shaders/shader.vert','shaders/shader.frag');
}

function setup()
{
	frameRate(60);
	createCanvas(windowWidth,windowHeight,WEBGL);
	myCam=new lybellP5Camera(0, 0, -500, 0,0,0);
	myCam.initialize();
	noStroke();
}

function draw()
{
	clear();
	myShader.setUniform("uFrameCount", frameCount);
	shader(myShader);
	blobDraw(758,-457,333,50,30);
	blobDraw(463,-221,133,21,-45);
	blobDraw(-292,192,-115,72,22);
	blobDraw(-540,-280,121,25,132);
	blobDraw(-575,-339,345,15,-160);
	blobDraw(794, 286, 1000, 25, 70);
}

function windowResized()
{
	resizeCanvas(windowWidth, windowHeight, false);
	myCam.apply();
}
