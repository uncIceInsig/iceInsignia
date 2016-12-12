var Druid = function(player, count)
{
  this.player = player;
  this.count = count;
  this.name = "Druid";
  this.health = 110;
  this.maxHealth = 110;
  this.strength = 50;
  this.defense = 35;
  this.intellect = 25;
  this.moveCounter = 5;
  this.maxMoves = 5;
  this.item = "potion";
  this.range = 3;
  //possible attributes that Warriors make use of
  this.attrib = ["defense", "strength", "intellect"];
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
    return this.intellect * .75;
  }
  this.spellOneDescr = function()
  {
    return "Star Fire: Cast a quick beam of sun light that causes "
    + "75% of your Intellect in Nature damage";
  }

  this.spellTwo = function()
  {
    return this.strength * .90;
  }
  this.spellTwoDescr = function()
  {
    return "Swipe: Swipe an enemy for 90% of your Strength";
  }

  this.spellThree = function()
  {
    return this.intellect;
  }
  this.spellThreeDescr = function()
  {
    return "Healing Touch: Heal your target for 100% of your intellect";
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

  this.setHealth = function()
  {
    this.health = this.getMaxHealth();
  }
  this.addDefense = function(defense)
  {
    this.defense += defense;
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
