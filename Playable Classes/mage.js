var Mage = function(player, count)
{
  this.player = player;
  this.count = count;
  this.name = "Mage";
  this.health = 80;
  this.maxHealth = 80;
  this.strength = 5;
  this.defense = 30;
  this.intellect = 60;
  this.moveCounter = 5;
  this.maxMoves = 5;
  this.item = "book";
  this.range = 3;
  //possible attributes that Mages make use of
  this.attrib = ["intellect"];
  this.getName = function()
  {
    return this.name;
  }
  this.getPlayer = function()
  {
    return this.player;
  }
  this.spellOne = function()
  {
    return 25;
  }
  this.spellOneDescr = function()
  {
    return "Mystic Barrier: Increase your target's Defense by 25.";
  }

  this.spellTwo = function()
  {
    //this.addIntellect(30);
    return 10;
  }
  this.spellTwoDescr = function()
  {
    return "Power Infusion: Increase your target's Intellect by 10.";
  }

  this.spellThree = function()
  {
    return this.intellect + (this.intellect * .25);
  }
  this.spellThreeDescr = function()
  {
    return "Arcane Missile: Throw an Arcane missile that deals " +
    "125% of your Intellect in Arcane damage.";
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

  this.addDefense = function(defense)
  {
    this.defense += defense;
  }

  this.subDefense = function(defense)
  {
    this.defense -= defense;
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

  this.subStrength = function(strength)
  {
    this.strength -= strength;
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
