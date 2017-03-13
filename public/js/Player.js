function Player(centreX, centreY, radius, team, game, socketId) {
  this.centreX = centreX
  this.centreY = centreY
  this.radius = radius 
  this.team = team
  // this.matterObj = game.Matter.Bodies.circle(this.centreX, this.centreY, this.radius)
  // game.Matter.World.add(game.engine.world, this.matterObj)
  // this.game.components.players[socketId] = this
}

Player.prototype.update = function() {
  // this.game.Matter.Engine.update(this.game.engine)
}

Player.prototype.draw = function(ctx) {
  ctx.fillStyle = this.team
  ctx.beginPath() 
  // ctx.arc(this.matterObj.position.x , this.matterObj.position.y, this.matterObj.circleRadius, 0, 2 * Math.PI, false)
  ctx.fill() 
}


module.exports = Player