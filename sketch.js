let pictures = [];

function preload()
{
  pictures =
  [
    loadImage("001.png"),
    loadImage("004.png"),
    loadImage("007.png"),
    loadImage("010.png"),
    loadImage("011.png"),
    loadImage("012.png"),
    loadImage("013.png"),
    loadImage("015.png")
  ]
}

let objects = [];
let how_much = [0, 0, 0, 0, 0, 0, 0, 0];
let checking = [];
let px = 27, py = 10, dim = 75, randpic, val = 0, ok = "-";

function setup() {
  createCanvas(400, 400);
  for(let i = 16;i>0;i--)
  {
    randpic = floor(random(0, 8));
    if(how_much[randpic]==2)
    {
      while(how_much[randpic]==2)
      {
        randpic = floor(random(0, 8));
      }
    }
    how_much[randpic]++;
    objects.push(new object(px, py, dim, pictures[randpic], false, false));
    px = px + dim + dim/5;
    if(px>340)
    {
      px = 27;
      py = py + dim + dim/5;
    }
  }
}

function draw() {
  background(220);
  for(let ob of objects)
  {
    if(mouseIsPressed && mouseX>ob.px && mouseX<ob.px+ob.dim && mouseY>ob.py && mouseY<ob.py+ob.dim)
    {
      if(val<2)
      {
        ob.showing = true;
        once();
      }
    }
    ob.show();
  }
  textAlign(CENTER);
  textSize(30);
  fill(0);
  if(ok=="-")
  {
    text("", 200, 390);
  }
  else if(ok==true)
  {
    text("Dobre dopasowanie!", 200, 390);
  }
  else if(ok==false)
  {
    text("Złe dospasowanie!", 200, 390);
  }
}

function once()
{
  val = 0;
  checking = [];
  for(let ob of objects)
  {
    if(ob.showing==true && ob.guessed==false)
    {
      val++;
      checking.push(ob.pic);
    }
  }
  if(val==2)
  {
    if(checking[0]==checking[1])
    {
      ok = true;
    }
    else
    {
      ok = false;
    }
    setTimeout(function()
    {
      if(checking[0]==checking[1])
      {
        for(let ob of objects)
        {
          if(checking[0]==ob.pic)
          {
            ob.guessed = true;
          }
        }
      }
      else
      {
        for(let ob of objects)
        {
          if(ob.showing==true && ob.guessed==false)
          {
              ob.showing = false;
          }
        }
      }
      val = 0;
      ok = "-";
    }, 1000);
  }
}