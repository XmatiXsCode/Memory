class object
{
  constructor(px, py, dim, pic, showing, guessed)
  {
    this.px = px;
    this.py = py;
    this.dim = dim;
    this.pic = pic;
    this.shownig = showing;
    this.guessed = guessed;
  }
  show()
  {
    if(this.showing==true)
    {
      fill(200);
      rect(this.px, this.py, this.dim);
      image(this.pic, this.px, this.py, this.dim, this.dim);
    }
    else
    {
      fill(125);
      noStroke();
      rect(this.px, this.py, this.dim);
    }
  }
}