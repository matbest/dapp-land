var MazeCreator = {
  type: "circle",
  centerX : 10,
  centerY :10,
  radius: 7,
  startX: 6,
  startY: 6,

  Start : function()
  {
    //  this.BlockCircle(24,24,10,true,'black',true);
    MazeWorldModel.BlockCircle(this.centerX,this.centerY,this.radius,true,'black',true);
  },
  Finish : function()
  {
    //this.BlockCircle(24,24,10,true,'black',true);
  //  MazeWorldModel.BlockCircle(this.centerX,this.centerY,this.radius,true,'blue',false);
  //  MazeWorldModel.FillSquare(this.startX,this.startY,'pink',0.5);
  }
}
