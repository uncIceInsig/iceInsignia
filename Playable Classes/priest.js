var Priest = function(player, count)
{
  this.player = player;
  this.count = count;
  this.name = "Priest";
  this.health = 75;
  this.maxHealth = 75;
  this.strength = 5;
  this.defense = 30;
  this.intellect = 40;
  this.moveCounter = 5;
  this.maxMoves = 5;
  this.item;
  this.range = 4;

  //possible attributes that Priests make use of
  this.attrib = ["intellect"];
  this.getName = function()
  {
    return this.name;
  }
  this.getPlayer = function()
  {
    return this.player;
  }
  //increase target's health
  this.spellOne = function()
  {
    return this.intellect + (this.intellect * .6);
  }
  this.spellOneDescr = function()
  {
    return "Great Heal: Heal your target for 160% of your intellect";
  }

  //increase priest's intellect
  this.spellTwo = function()
  {
    return 10;
    //this.addIntellect(30);
  }
  this.spellTwoDescr = function()
  {
    return "Conviction: Increase your target's Intellect by 10";
  }

  //increase target's defense
  this.spellThree = function()
  {
    return this.intellect * .2;
  }
  this.spellThreeDescr = function()
  {
    return "Benediction: Increase your target's defense by 20% " +
    "of your intellect.";
  }

  this.autoAttack = function()
  {
    return this.strength;
  }
  this.getAutoAttackDescr = function()
  {
    return "Deal " + this.getStrength() + " damage.";
  }
  this.getRange = function()
  {
    return this.range;
  }
  this.getHealth = function()
  {
    return this.health;
  }
  this.getMaxHealth = function()
  {
    return this.maxHealth;
  }

  this.getStrength = function()
  {
    return this.strength;
  }

  this.getDefense = function()
  {
    return this.defense;
  }

  this.getIntellect = function()
  {
    return this.intellect;
  }
  this.addHealth = function(health)
  {
    this.health += health;
  }

  this.subHealth = function(health)
  {
    this.health -= Math.abs(health - (.25 * this.getDefense()));
  }

  this.addIntellect = function(intellect)
  {
    this.intellect += intellect;
  }

  this.subIntellect = function(intellect)
  {
    this.intellect -= intellect;
  }
  this.addStrength = function(strength)
  {
    this.strength += strength;
  }

  this.addDefense = function(defense)
  {
    this.defense += defense;
  }

  this.subDefense = function(defense)
  {
    this.defense -= defense;
  }
  this.setHealth = function()
  {
    this.health = this.getMaxHealth();
  }
  this.resetMoves = function()
  {
    this.moveCounter = this.maxMoves;
  }
  this.getItemDescr = function()
  {
    if(this.item == "book")
    {
      return "Book of Mormon - Increase your Intellect by 50";
    }
    else if(this.item == "mail")
    {
      return "Armor of Joseph Smith - Increase your defense by 45";
    }
    else if(this.item == "potion")
    {
      return "Kool Aid - Restores or adds 60 health.";
    }
    else if(this.item == "ring")
    {
      return "The One Ring - Increase your Strength by 30";
    }
    else if(this.item == "boot")
    {
      return "Nikes - Increase max movement by 1";
    }
    else {
      return "No item";
    }
  }
  this.setItem = function(item)
  {
    this.item = item;
  }
  this.useItem = function()
  {
    if(this.item == "book")
    {
      this.addIntellect(50);
      this.item = "";
    }
    else if(this.item == "mail")
    {
      this.addDefense(45);
      this.item = "";
    }
    else if(this.item == "potion")
    {
      this.addHealth(60);
      this.item = "";
    }
    else if(this.item == "ring")
    {
      this.addStrength(30);
      this.item = "";
    }
    else if(this.item == "boot")
    {
      this.maxMoves = this.maxMoves + 1;
      this.item = "";
    }
  }
};
