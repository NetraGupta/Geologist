class Stone{
	constructor(x,y,r)
	{
	var options ={ 
		restitution :0.8,
		density:12,
		friction:0.9,
	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			ellipseMode(CENTER)
			strokeWeight(2);
			stroke("white");
			fill("black");
			ellipse(0,0,this.r,this.r)

			pop()
	}

}