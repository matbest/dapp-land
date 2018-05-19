var MazeCreator = {
  type: "circle",
  centerX : 10,
  centerY :10,
  radius: 7,
  startX: 6,
  startY: 6,

  Start : function()
  {
    MazeWorldModel.BlockCircle(this.centerX,this.centerY,this.radius,true,'pink',true);
  },
  Finish : function()
  {
    //MazeWorldModel.BlockCircle(this.centerX,this.centerY,this.radius,true,'blue',false);
    MazeWorldModel.UnBlockCircleWall(this.centerX,this.centerY,this.radius,true,'blue',false);
    MazeWorldModel.FillSquare(this.startX,this.startY,'green',0.5);
  }
}
