var Warrior = function(player, count)
{
   this.player = player;
   this.count = count;
   this.name = "Warrior";
   this.health = 160;
   this.maxHealth = 150;
   this.strength = 20;
   this.defense = 60;
   this.intellect = 0;
   this.moveCounter = 6;
   this.maxMoves = 6;
   this.item = "mail";
   this.range = 1;
   //possible attributes that Warriors make use of
   this.attrib = ["defense", "strength"];
   this.getName = function()
   {
     return this.name;
   }
   this.getPlayer = function()
   {
     return this.player;
   }
   //defense buff
 this.spellOne = function()
 {
     return 20;
 }
 this.spellOneDescr = function()
 {
   return "Raise Shield: Increase a target's Defense by 20";
 }

   //attack buff
 this.spellTwo = function()
 {
     return 15;
 }
 this.spellTwoDescr = function()
 {
   return "Inner Rage: Increase a target's Strength by 15";
 }

   //health buff
 this.spellThree = function()
 {
     return this.health * .05;
 }
 this.spellThreeDescr = function()
 {
   return "Endurance: Increase a target's health by 5% of your current health";
 }

   //auto attack
 this.autoAttack = function()
 {
     return this.strength;
 }
 this.getAutoAttackDescr = function()
 {
   return "Deal " + this.getStrength() + " damage";
 }
 //GETTERS

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
 this.addIntellect = function(intellect)
   {
     this.intellect += intellect;
   }

 //SETTERS
 this.addHealth = function(health)
   {
     this.health += health;
   }

 this.subHealth = function(health)
   {
     this.health -= Math.abs(health - (.25 * this.getDefense()));
   }

 this.addStrength = function(strength)
   {
     this.strength += strength;
   }

 this.subStrength = function(strength)
   {
     this.strength -= strength;
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
 //Using inheritance would defintely be the better
 //route to take in this situation
 this.getItemDescr = function()
   {
     if(this.item == "book")
     {
       return "Book of Mormon - Increases your Intellect by 50";
     }
     else if(this.item == "mail")
     {
       return "Armor of Joseph Smith - Increases your defense by 45";
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
