const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground;
var world;
var r1,l1;


function setup() {
	createCanvas(1600,700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.5,
		frictionAir:0,
		density:1.2
		 
		
	}

	ball = Bodies.circle(260,100,20,ball_options);
	World.add(world,ball);

  var ground_options={
    isStatic:true
  }
	ground=Bodies.rectangle(width/2,670,2500,20,ground_options);
	World.add(world,ground);

 
    var r1_options={
     isStatic:true

	}

	r1=Bodies.rectangle(width/2,550,20,20,r1_options)
	World.add(world,r1);
	


	var l1_options={
     isStatic:true


		
	}

	l1=Bodies.rectangle(1100,550,20,20,l1_options)
	World.add(world,l1);
    
    
 
 

	 
	

  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background("orange");


  ellipse(ball.position.x,ball.position.y,40,40);
  rect(ground.position.x,ground.position.y,2500,20);
  rect(r1.position.x,r1.position.y,25,221);
  rect(l1.position.x,l1.position.y,25,221);

  
}

function keyPressed(){

if(keyCode === UP_ARROW)      

Matter.Body.applyForce(ball,ball.position,{x:65,y:-65});

}

