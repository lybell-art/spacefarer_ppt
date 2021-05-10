let myShader, myCam, slider;
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
	slider=[null,null,null,null];
	for(let i=0;i<4; i++)
	{
		if(i<3) slider[i]=createSlider(-1000, 1000, 0);
		else slider[i]=createSlider(0,100, 50);
		slider[i].position(10, 10 + i*40);
	}
}

function draw()
{
	clear();
	myShader.setUniform("uFrameCount", frameCount);
	shader(myShader);
	blobDraw(758,-457,333,50,30);
	blobDraw(463,-221,133,21,-45);
	blobDraw(292,192,-115,72,22);
	blobDraw(slider[0].value(), slider[1].value(), slider[2].value(), slider[3].value());
}

function windowResized()
{
	resizeCanvas(windowWidth, windowHeight, false);
	myCam.apply();
}
