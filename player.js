var Player = function(playerName)
{
  this.team = [];
  this.playerName = playerName
  this.count = 0;
  this.addClass = function(name, id)
  {
    switch(name)
    {
      case "Mage":
      case 'm':
        this.team.push(new Mage(this.playerName, this.count));
        break;
      case "Warrior":
      case 'f':
        this.team.push(new Warrior(this.playerName, this.count));
        break;
      case "Priest":
      case 'p':
        this.team.push(new Priest(this.playerName, this.count));
        break;
      case "Druid":
      case 'd':
        this.team.push(new Druid(this.playerName, this.count));
        break;
      case "Swordsman":
      case 's':
        this.team.push(new Swordsman(this.playerName, this.count));
        break;
    }
    this.count+=1;
  }
  this.getName = function()
  {
    return this.playerName;
  }
  this.hasMoves = function()
  {
    for(var i = 0; i < this.team.length; i++)
    {
      if(this.team[i].moveCounter > 0)
      {
        return true;
      }
    }
    return false;
  }
  this.resetMoves = function()
  {
    for(var i = 0; i < this.team.length; i++)
    {
      this.team[i].resetMoves();
    }
  }
  this.removeChar = function(choice)
  {
    for(var i = 0; i < this.team.length; i++)
    {
      if(this.team[i].count == choice)
      {
        this.team.splice(i, 1);
        break;
      }
    }
  }
  this.getTeamLength = function()
  {
    return this.team.length;
  }
};
