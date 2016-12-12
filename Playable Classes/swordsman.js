var Swordsman = function(player, count)
{
  this.player = player;
  this.count = count;
  this.name = "Swordsman";
  this.health = 110;
  this.maxHealth = 100;
  this.strength = 30;
  this.defense = 35;
  this.intellect = 0;
  this.moveCounter = 6;
  this.maxMoves = 6;
  this.item = "ring";
  this.range = 1;
  //possible attributes that Swordsman make use of
  this.attrib = ["strength"];
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
    return this.strength + (this.strength * .5);
  }
  this.spellOneDescr = function()
  {
    return "Gouge: Gouge your target for 150% of your strength";
  }

  this.spellTwo = function()
  {
    return 10;
  }
  this.spellTwoDescr = function()
  {
    return "Armor Up: Increase your target's defense by 10";
  }

  this.spellThree = function()
  {
    return this.strength*.10;
  }
  this.spellThreeDescr = function()
  {
    return "Imbue Weapon: Coat your target's weapon in venom increasing "
    + "their Strength by 10% of your strength";
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

  this.addStrength = function(strength)
  {
    this.strength += strength;
  }
  this.addIntellect = function(intellect)
  {
    this.intellect += intellect;
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
