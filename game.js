$(document).ready(function(){

  $('.p2hov').on('click', function(e){
    e.preventDefault();
    window.location.href = 'destroy.php';
  });

  var settings = {
    height: 15,
    width: 15,
    boardType: 0
  };

  var diff = prompt('Welcome to the game! Please select your game board:\n\nMeadow (m)   --Default\nDesert (d)\nTundra (t)')
  switch (diff) {
    case 'Desert':
    case 'desert':
    case 'd':
      settings.boardType = 'Desert';
      break;
    case 'Tundra':
    case 'tundra':
    case 't':
      settings.boardType = 'Tundra';
      break;
    case 'Meadow':
    case 'meadow':
    case 'm':
    default:
      settings.boardType = 'Meadow';
      break;
  }




  //parsing URL data
  var url = document.location.href;
  params = url.split('?')[1].split('&');

  user1 = params[0].split('=')[1];
  user2 = params[1].split('=')[1];
  p1Pieces = params[2].split('=')[1];
  p2Pieces = params[3].split('=')[1];
  p1Items = params[4].split('=')[1];
  p2Items = params[5].split('=')[1];


  p1itemArray = new Array(5);
  p2itemArray = new Array(5);

  for (var i = 0; i < p1itemArray.length; i++) {
    switch (p1Items.charAt(i)) {
      case 'b':
        p1itemArray[i] = 'book';
        break;
      case 'm':
        p1itemArray[i] = 'mail';
        break;
      case 'p':
        p1itemArray[i] = 'potion';
        break;
      case 'e':
        p1itemArray[i] = 'ring';
        break;
      case 't':
        p1itemArray[i] = 'boot';
        break;
      default:
        p1itemArray[i] = '';
        break;

    }

    switch (p2Items.charAt(i)) {
      case 'b':
        p2itemArray[i] = 'book';
        break;
      case 'm':
        p2itemArray[i] = 'mail';
        break;
      case 'p':
        p2itemArray[i] = 'potion';
        break;
      case 'e':
        p2itemArray[i] = 'ring';
        break;
      case 't':
        p2itemArray[i]  ='boot';
        break;
      default:
        p2itemArray[i] = '';
        break;

    }
  }




var board;
var playerOne = new Player(user1);
var playerTwo = new Player(user2);
var selectedCell;
var targetCell;
var spellID;

var Game = function()
{
    this.gameLoop = function()
    {
      var playerOneTurn = true;
      $(document).on("click", "td", function()
      {
          //Pass cell coordinates to a function as type long, not jQuery objects
          if(this.id == "spellOne" || this.id == "spellTwo" || this.id == "spellThree" || this.id == "autoAttack")
          {
            spellID = this.id;
            castSpell();
            //alert("out of cast Spell" + targetCell);
          }
          else if(this.id == "pass")
          {
            selectedCell.player.moveCounter = 0;
            drawInfo();
          }
          else if(this.id == "item")
          {
            selectedCell.player.useItem();
            selectedCell.player.moveCounter = 0;
            drawInfo();
          }
          else
          {
            var x = this.cellIndex;
            var y = this.parentNode.rowIndex;
            selectedCell = queryBoard(x,y);
            if(selectedCell.player != null)
            {
              drawInfo();
            }
          }
      });

      $(document).keydown(function(e) {
        if(playerOne.hasMoves() == false && playerTwo.hasMoves() == false)
        {
          playerOne.resetMoves();
          playerTwo.resetMoves();
          drawInfo();
          return;
        }
        if(e.which == 37)
        {
          if(selectedCell.player != null)
          {
            if((board[selectedCell.x-1][selectedCell.y].terrain != "rock" &&
            board[selectedCell.x-1][selectedCell.y].player == null &&
            board[selectedCell.x-1][selectedCell.y].terrain != "water" &&
            board[selectedCell.x-1][selectedCell.y].terrain != "berg" &&
            board[selectedCell.x-1][selectedCell.y].terrain != "weed") && selectedCell.player.moveCounter > 0)
            {
              selectedCell.player.moveCounter -= 1;
              board[selectedCell.x - 1][selectedCell.y].player = board[selectedCell.x][selectedCell.y].player;
              board[selectedCell.x][selectedCell.y].player = null;
              selectedCell = board[selectedCell.x - 1][selectedCell.y];
              drawInfo();
              redraw();
            }
          }
        }
        else if(e.which == 40)
        {
          if(selectedCell.player != null)
          {
            if((board[selectedCell.x][selectedCell.y+1].terrain !== "rock" &&
            board[selectedCell.x][selectedCell.y+1].player == null &&
            board[selectedCell.x][selectedCell.y+1].terrain != "water"&&
            board[selectedCell.x][selectedCell.y+1].terrain != "berg" &&
            board[selectedCell.x][selectedCell.y+1].terrain != "weed") && selectedCell.player.moveCounter > 0)
            {
              selectedCell.player.moveCounter -= 1;
              board[selectedCell.x][selectedCell.y+1].player = board[selectedCell.x][selectedCell.y].player;
              board[selectedCell.x][selectedCell.y].player = null;
              selectedCell = board[selectedCell.x][selectedCell.y+1];
              drawInfo();
              redraw();
            }
          }
        }
        else if(e.which == 38)
        {
          if(selectedCell.player != null)
          {
            if((board[selectedCell.x][selectedCell.y-1].terrain != "rock" &&
            board[selectedCell.x][selectedCell.y-1].player == null &&
            board[selectedCell.x][selectedCell.y-1].terrain != "water"&&
            board[selectedCell.x][selectedCell.y-1].terrain != "berg" &&
            board[selectedCell.x][selectedCell.y-1].terrain != "weed") && selectedCell.player.moveCounter > 0)
            {
              selectedCell.player.moveCounter -= 1;
              board[selectedCell.x][selectedCell.y-1].player = board[selectedCell.x][selectedCell.y].player;
              board[selectedCell.x][selectedCell.y].player = null;
              selectedCell = board[selectedCell.x][selectedCell.y-1];
              drawInfo();
              redraw();
            }
          }
        }
        else if(e.which == 39)
        {
          if(selectedCell.player != null)
          {
            if((board[selectedCell.x+1][selectedCell.y].terrain != "rock" &&
            board[selectedCell.x+1][selectedCell.y].player == null &&
            board[selectedCell.x+1][selectedCell.y].terrain != "water"&&
            board[selectedCell.x+1][selectedCell.y].terrain != "berg" &&
            board[selectedCell.x+1][selectedCell.y].terrain != "weed")  && selectedCell.player.moveCounter > 0)
            {
              selectedCell.player.moveCounter -= 1;
              board[selectedCell.x+1][selectedCell.y].player = board[selectedCell.x][selectedCell.y].player;
              board[selectedCell.x][selectedCell.y].player = null;
              selectedCell = board[selectedCell.x+1][selectedCell.y];
              drawInfo();
              redraw();
            }
          }
        }

        if(playerOne.hasMoves() == false && playerTwo.hasMoves() == false)
        {
          playerOne.resetMoves();
          playerTwo.resetMoves();
          drawInfo();
          return;
        }
        if(playerOne.hasMoves()){
          $('.turn').empty();
          $('.turn').attr('id', 'playerOneTurn');
          $('.turn').innerHTML = "PLAYER ONE'S TEAM";
        }else{
          $('.turn').empty();
          $('.turn').attr('id', 'playerTwoTurn');
          $('turn').innerHTML = "PLAYER TWO'S TEAM";
        }

      });

      //outputs character information like class/name/health/moves left
      var drawInfo = function()
      {
        var infoTbl = $("#charInfo");
        infoTbl.empty();
        var html;
        var trName = $('<tr class = "name"></tr>');
        trName.append(('<td class = "name">Class: ' + selectedCell.player.getName() + '</td>'));
        infoTbl.append(trName);

        var trOwner = $('<tr class = "owner"></tr>');
        trOwner.append(('<td class = "owner">Owner: ' + selectedCell.player.getPlayer() + '</td>'));
        infoTbl.append(trOwner);

        var trHealth = $('<tr class = "health"></tr>');
        trHealth.append(('<td class = "health">Health: ' + selectedCell.player.getHealth() + '</td>'));
        infoTbl.append(trHealth);

        var trDefense = $('<tr class = "defense"></tr>');
        trDefense.append(('<td class = "defense">Defense: ' + selectedCell.player.getDefense() + '</td>'));
        infoTbl.append(trDefense);

        var trStrength = $('<tr class = "strength"></tr>');
        trStrength.append(('<td class = "strength">Strength: ' + selectedCell.player.getStrength() + '</td>'));
        infoTbl.append(trStrength);

        var trIntellect = $('<tr class = "intellect"></tr>');
        trIntellect.append(('<td class = "intellect">Intellect: ' + selectedCell.player.getIntellect() + '</td>'));
        infoTbl.append(trIntellect);

        var trMoveCounter = $('<tr class = "moveCounter"></tr>');
        trMoveCounter.append(('<td id = "moveCounter">Moves left: ' + selectedCell.player.moveCounter + '</td>'));
        infoTbl.append(trMoveCounter);
        //infoTbl.append(html);

        var trRange = $('<tr class = "range"></tr>');
        trRange.append(('<td id = "range">Range: ' + selectedCell.player.getRange() + '</td>'));
        infoTbl.append(trRange);

        var xVal = $('<tr class = "xVal"></tr>');
        xVal.append(('<td id = "x">Location: (' + selectedCell.x + ', ' + selectedCell.y + ')</td>'));
        infoTbl.append(xVal);

        /*
        var yVal = $('<tr class = "yVal"></tr>');
        yVal.append(('<td id = "y">Y ' + selectedCell.y + '</td>'));
        infoTbl.append(yVal);
        /*******************************************************************/
        var spellInfoTbl = $("#spellInfo");
        spellInfoTbl.empty();

        var trSpellOne = $('<tr id = "info"></tr>');
        var spellOne = document.createElement("button");
        spellOne.setAttribute("id", "spellOne");
        spellOne.innerHTML = "Cast";

        var spellOneTD = $('<td id = "spellOne"></td>');
        spellOneTD.append(spellOne);
        trSpellOne.append(spellOneTD);

        var spellOneDescr = $('<td id = "spellOneDescr"></td>');
        spellOneDescr.html(selectedCell.player.spellOneDescr());
        trSpellOne.append(spellOneDescr);
        /*******************************************************************/
        var trSpellTwo = $('<tr id = "info"></tr>');
        var spellTwo = document.createElement("button");
        spellTwo.setAttribute("id", "spellTwo");

        spellTwo.innerHTML = "Cast";
        var spellTwoTD = $('<td id = "spellTwo"></td>');
        spellTwoTD.append(spellTwo);
        trSpellTwo.append(spellTwoTD);

        var spellTwoDescr = $('<td id = "spellTwoDescr"></td>');
        spellTwoDescr.html(selectedCell.player.spellTwoDescr());
        trSpellTwo.append(spellTwoDescr);
        /*******************************************************************/
        var trSpellThree = $('<tr id = "info"></tr>');
        var spellThree = document.createElement("button");
        spellThree.setAttribute("id", "spellThree");

        spellThree.innerHTML = "Cast";
        var spellThreeTD = $('<td id = "spellThree"></td>');
        spellThreeTD.append(spellThree);
        trSpellThree.append(spellThreeTD);

        var spellThreeDescr = $('<td id = "spellThreeDescr"></td>');
        spellThreeDescr.html(selectedCell.player.spellThreeDescr());
        trSpellThree.append(spellThreeDescr);
        /*******************************************************************/
        var trAutoAttack = $('<tr id = "info"></tr>');
        var autoAttack = document.createElement("button");
        autoAttack.setAttribute("id", "autoAttack");

        autoAttack.innerHTML = "Cast";
        var autoAttackTD = $('<td id = "autoAttack"></td>');
        autoAttackTD.append(autoAttack);
        trAutoAttack.append(autoAttackTD);

        var autoAttackDescr = $('<td id = "autoAttackDescr"></td>');
        autoAttackDescr.html(selectedCell.player.getAutoAttackDescr());
        trAutoAttack.append(autoAttackDescr);
        /*******************************************************************/
        var trPass = $('<tr id = "info"></tr>');
        var pass = document.createElement("button");
        pass.setAttribute("id", "pass");

        pass.innerHTML = "Pass";
        var passTD = $('<td id = "pass"></td>');
        passTD.append(pass);
        trPass.append(passTD);

        var passDescr = $('<td id = "passDescr"></td>');
        passDescr.html("Pass");
        trPass.append(passDescr);
        /*******************************************************************/
        var trItem = $('<tr id = "item"></tr>');
        var item = document.createElement("button");
        item.setAttribute("id", "item");

        item.innerHTML = "Item";
        var itemTD = $('<td id = "item"></td>');
        itemTD.append(item);
        trItem.append(itemTD);

        var itemDescr = $('<td id = "itemDescr"></td>');
        itemDescr.html(selectedCell.player.getItemDescr());
        trItem.append(itemDescr);

        spellInfoTbl.append(trSpellOne);
        spellInfoTbl.append(trSpellTwo);
        spellInfoTbl.append(trSpellThree);
        spellInfoTbl.append(trAutoAttack);
        spellInfoTbl.append(trPass);
        spellInfoTbl.append(trItem);
      }

      //for scope reasons, we have a redraw function
      //in addition to the draw function
      var redraw = function()
      {
        var map = $("#gameTable");
        map.empty();
        for(var i = 0; i < settings.width; i++)
        {
          var tr = $("<tr></tr>", {class: "row"});
          map.append(tr);
          for(var l = 0; l < board[i].length; l++)
          {
            if(board[l][i].player == null)
            {
              if(board[l][i].getTerrain() == "water")
              {
                var element = $("<td>", {class: "water"});
                var img = document.createElement('img');
                img.src = "sprites/water2.gif";
                element.append(img);
                tr.append(element);
              }
              else if (board[l][i].getTerrain() == "land")
              {
                var element = $("<td>", {class: "land"});
                var img = document.createElement('img');
                img.src = "sprites/field.gif";
                element.append(img);
                tr.append(element);
              }
              else if (board[l][i].getTerrain() == "rock")
              {
                var element = $("<td>", {class: "rock"});
                var img = document.createElement('img');
                img.src = "sprites/stone.gif";
                element.append(img);
                tr.append(element);
              }
              else if (board[l][i].getTerrain() == "ice") {
                var element = $("<td>", {class: "ice"});
                var img = document.createElement('img');
                img.src = "sprites/ice2.png";
                element.append(img);
                tr.append(element);
              }
              else if (board[l][i].getTerrain() == "berg") {
                var element = $("<td>", {class: "berg"});
                var img = document.createElement('img');
                img.src = "sprites/ice.png";
                element.append(img);
                tr.append(element);
              }
              else if (board[l][i].getTerrain() == "sand") {
                var element = $("<td>", {class: "sand"});
                var img = document.createElement('img');
                img.src = "sprites/sand.jpg";
                element.append(img);
                tr.append(element);
              }
              else if (board[l][i].getTerrain() == "weed") {
                var element = $("<td>", {class: "weed"});
                var img = document.createElement('img');
                img.src = "sprites/weed.png";
                element.append(img);
                tr.append(element);
              }
            }
            else {
              if(board[l][i].player.getName() == "Mage")
              {
                if(board[l][i].player.getPlayer() == playerOne.getName())
                {
                  var element = $("<td>", {class: "playerOne"});
                }
                else {
                  var element = $("<td>", {class: "playerTwo"});
                }
                var img = document.createElement('img');
                img.src = "sprites/mage.gif";
                element.append(img);
                tr.append(element);
              }
              else if(board[l][i].player.getName() == "Warrior")
              {
                if(board[l][i].player.getPlayer() == playerOne.getName())
                {
                  var element = $("<td>", {class: "playerOne"});
                }
                else {
                  var element = $("<td>", {class: "playerTwo"});
                }
                var img = document.createElement('img');
                img.src = "sprites/tank.gif";
                element.append(img);
                tr.append(element);
              }
              else if(board[l][i].player.getName() == "Priest")
              {
                if(board[l][i].player.getPlayer() == playerOne.getName())
                {
                  var element = $("<td>", {class: "playerOne"});
                }
                else {
                  var element = $("<td>", {class: "playerTwo"});
                }
                var img = document.createElement('img');
                img.src = "sprites/priest.gif";
                element.append(img);
                tr.append(element);
              }
              else if(board[l][i].player.getName() == "Druid")
              {
                if(board[l][i].player.getPlayer() == playerOne.getName())
                {
                  var element = $("<td>", {class: "playerOne"});
                }
                else {
                  var element = $("<td>", {class: "playerTwo"});
                }
                var img = document.createElement('img');
                img.src = "sprites/druid.gif";
                element.append(img);
                tr.append(element);
              }
              else if(board[l][i].player.getName() == "Swordsman")
              {
                if(board[l][i].player.getPlayer() == playerOne.getName())
                {
                  var element = $("<td>", {class: "playerOne"});
                }
                else {
                  var element = $("<td>", {class: "playerTwo"});
                }
                var img = document.createElement('img');
                img.src = "sprites/swordsman.gif";
                element.append(img);
                tr.append(element);
              }
            }
          }
        }
      }
      //Queries the 2D board array
      var queryBoard = function(x, y)
      {
        return board[x][y];
      }
      var castSpell = function()
      {
        $("#gameTable td").click(spellHandler);
      };
      //main spell method that deals damage, healing, and buffs
      var spellHandler = function(e)
      {
          //this stops the global click listener
          e.stopPropagation();
          $("#gameTable td").off("click", spellHandler);
          var x = this.cellIndex;
          var y = this.parentNode.rowIndex;
          targetCell = queryBoard(x,y);
          if(targetCell.player != null)
          {
            var xOne = selectedCell.x;
            var yOne = selectedCell.y;
            var xTwo = targetCell.x;
            var yTwo = targetCell.y;
            var range = selectedCell.player.getRange();
            if (spellID == "spellOne")
            {
              if(selectedCell.player.getName() == "Priest")
              {

                if(selectedCell.player.moveCounter > 0 &&
                checkDistance(xOne, yOne, xTwo, yTwo, range))
                {
                  targetCell.player.addHealth(selectedCell.player.spellOne());
                  if(targetCell.player.getMaxHealth() < targetCell.player.getHealth())
                  {
                    targetCell.player.setHealth();
                  }
                  selectedCell.player.moveCounter = 0;
                  drawInfo();
                }
              }
              else if(selectedCell.player.getName() == "Mage")
              {
                if(selectedCell.player.moveCounter > 0 &&
                  checkDistance(xOne, yOne, xTwo, yTwo, range))
                {
                  targetCell.player.addDefense(selectedCell.player.spellOne());
                  selectedCell.player.moveCounter = 0;
                  drawInfo();
                }
              }
              if(selectedCell.player.getName() == "Warrior")
              {
                if(selectedCell.player.moveCounter > 0 &&
                  checkDistance(xOne, yOne, xTwo, yTwo, range))
                {
                  targetCell.player.addDefense(selectedCell.player.spellOne());
                  selectedCell.player.moveCounter = 0;
                  drawInfo();
                }
              }
              else if(selectedCell.player.getName() == "Druid")
              {
                if(selectedCell.player.moveCounter > 0 &&
                  checkDistance(xOne, yOne, xTwo, yTwo, range))
                {
                  targetCell.player.subHealth(selectedCell.player.spellOne());
                  selectedCell.player.moveCounter = 0;
                  if(targetCell.player.getHealth() <= 0)
                  {
                    removeChar(targetCell.player);
                    var x = targetCell.x;
                    var y = targetCell.y;
                    board[x][y].player = null;
                    redraw();
                  }
                  drawInfo();
                }
              }
              if(selectedCell.player.getName() == "Swordsman")
              {
                if(selectedCell.player.moveCounter > 0 &&
                  checkDistance(xOne, yOne, xTwo, yTwo, range))
                {
                  targetCell.player.subHealth(selectedCell.player.spellOne());
                  selectedCell.player.moveCounter = 0;
                  if(targetCell.player.getHealth() <= 0)
                  {
                    removeChar(targetCell);
                    var x = targetCell.x;
                    var y = targetCell.y;
                    board[x][y].player = null;
                    redraw();
                  }
                  drawInfo();
                }
              }
            }
            else if(spellID == "spellTwo")
            {
              if(selectedCell.player.getName() == "Priest")
              {
                if(selectedCell.player.moveCounter > 0 &&
                  checkDistance(xOne, yOne, xTwo, yTwo, range))
                {
                  targetCell.player.addIntellect(selectedCell.player.spellTwo());
                  selectedCell.player.moveCounter = 0;
                  drawInfo();
                }
              }
              else if(selectedCell.player.getName() == "Mage")
              {
                if(selectedCell.player.moveCounter > 0 &&
                  checkDistance(xOne, yOne, xTwo, yTwo, range))
                {
                  targetCell.player.addIntellect(selectedCell.player.spellTwo());
                  selectedCell.player.moveCounter = 0;
                  drawInfo();
                }
              }
              else if(selectedCell.player.getName() == "Warrior")
              {
                if(selectedCell.player.moveCounter > 0 &&
                  checkDistance(xOne, yOne, xTwo, yTwo, range))
                {
                  targetCell.player.addStrength(selectedCell.player.spellTwo());
                  selectedCell.player.moveCounter = 0;
                  drawInfo();
                }
              }
              else if(selectedCell.player.getName() == "Druid")
              {
                if(selectedCell.player.moveCounter > 0 &&
                  checkDistance(xOne, yOne, xTwo, yTwo, range))
                {
                  targetCell.player.subHealth(selectedCell.player.spellTwo());
                  selectedCell.player.moveCounter = 0;
                  if(targetCell.player.getHealth() <= 0)
                  {
                    removeChar(targetCell);
                    var x = targetCell.x;
                    var y = targetCell.y;
                    board[x][y].player = null;
                    redraw();
                  }
                  drawInfo();
                }
              }
              else if(selectedCell.player.getName() == "Swordsman")
              {
                if(selectedCell.player.moveCounter > 0 &&
                  checkDistance(xOne, yOne, xTwo, yTwo, range))
                {
                  targetCell.player.addDefense(selectedCell.player.spellTwo());
                  selectedCell.player.moveCounter = 0;
                  drawInfo();
                }
              }
            }
            else if(spellID == "spellThree")
            {
              if(selectedCell.player.getName() == "Priest")
              {
                if(selectedCell.player.moveCounter > 0 &&
                  checkDistance(xOne, yOne, xTwo, yTwo, range))
                {
                  targetCell.player.addDefense(selectedCell.player.spellThree());
                  selectedCell.player.moveCounter = 0;
                  drawInfo();
                }
              }
              else if(selectedCell.player.getName() == "Mage")
              {
                if(selectedCell.player.moveCounter > 0 &&
                  checkDistance(xOne, yOne, xTwo, yTwo, range))
                {
                  targetCell.player.subHealth(selectedCell.player.spellThree());
                  selectedCell.player.moveCounter = 0;
                  if(targetCell.player.getHealth() <= 0)
                  {
                    removeChar(targetCell);
                    var x = targetCell.x;
                    var y = targetCell.y;
                    board[x][y].player = null;
                    redraw();
                  }
                  drawInfo();
                }
              }
              if(selectedCell.player.getName() == "Warrior")
              {
                if(selectedCell.player.moveCounter > 0 &&
                  checkDistance(xOne, yOne, xTwo, yTwo, range))
                {
                  targetCell.player.addHealth(selectedCell.player.spellThree());
                  selectedCell.player.moveCounter = 0;
                  drawInfo();
                }
              }
              else if(selectedCell.player.getName() == "Druid")
              {
                if(selectedCell.player.moveCounter > 0 &&
                  checkDistance(xOne, yOne, xTwo, yTwo, range))
                {
                  targetCell.player.addHealth(selectedCell.player.spellThree());
                  if(targetCell.player.getMaxHealth() < targetCell.player.getHealth())
                  {
                    targetCell.player.setHealth();
                  }
                  selectedCell.player.moveCounter = 0;
                  drawInfo();
                }
              }
              if(selectedCell.player.getName() == "Swordsman")
              {
                if(selectedCell.player.moveCounter > 0 &&
                  checkDistance(xOne, yOne, xTwo, yTwo, range))
                {
                  targetCell.player.addStrength(selectedCell.player.spellThree());
                  selectedCell.player.moveCounter = 0;
                  drawInfo();
                }
              }
            }
            else if(spellID == "autoAttack") //if checkDistance == 1
            {
              if(selectedCell.player.getName() == "Priest")
              {
                if(selectedCell.player.moveCounter > 0 &&
                  checkDistance(xOne, yOne, xTwo, yTwo, 1))
                {
                  targetCell.player.subHealth(selectedCell.player.autoAttack());
                  selectedCell.player.moveCounter = 0;
                  if(targetCell.player.getHealth() <= 0)
                  {
                    removeChar(targetCell);
                    var x = targetCell.x;
                    var y = targetCell.y;
                    board[x][y].player = null;
                    redraw();
                  }
                  drawInfo();
                }
              }
              else if(selectedCell.player.getName() == "Mage")
              {
                if(selectedCell.player.moveCounter > 0 &&
                  checkDistance(xOne, yOne, xTwo, yTwo, 1))
                {
                  targetCell.player.subHealth(selectedCell.player.autoAttack());
                  selectedCell.player.moveCounter = 0;
                  if(targetCell.player.getHealth() <= 0)
                  {
                    removeChar(targetCell);
                    var x = targetCell.x;
                    var y = targetCell.y;
                    board[x][y].player = null;
                    redraw();
                  }
                  drawInfo();
                }
              }
              else if(selectedCell.player.getName() == "Warrior")
              {
                if(selectedCell.player.moveCounter > 0 &&
                  checkDistance(xOne, yOne, xTwo, yTwo, 1))
                {
                  targetCell.player.subHealth(selectedCell.player.autoAttack());
                  selectedCell.player.moveCounter = 0;
                  if(targetCell.player.getHealth() <= 0)
                  {
                    removeChar(targetCell);
                    var x = targetCell.x;
                    var y = targetCell.y;
                    board[x][y].player = null;
                    redraw();
                  }
                  drawInfo();
                }
              }
              else if(selectedCell.player.getName() == "Druid")
              {
                if(selectedCell.player.moveCounter > 0 &&
                  checkDistance(xOne, yOne, xTwo, yTwo, 1))
                {
                  targetCell.player.subHealth(selectedCell.player.autoAttack());
                  selectedCell.player.moveCounter = 0;
                  if(targetCell.player.getHealth() <= 0)
                  {
                    removeChar(targetCell);
                    var x = targetCell.x;
                    var y = targetCell.y;
                    board[x][y].player = null;
                    redraw();
                  }
                  drawInfo();
                }
              }
              else if(selectedCell.player.getName() == "Swordsman")
              {
                if(selectedCell.player.moveCounter > 0 &&
                  checkDistance(xOne, yOne, xTwo, yTwo, 1))
                {
                  targetCell.player.subHealth(selectedCell.player.autoAttack());
                  selectedCell.player.moveCounter = 0;
                  if(targetCell.player.getHealth() <= 0)
                  {
                    removeChar(targetCell);
                    var x = targetCell.x;
                    var y = targetCell.y;
                    board[x][y].player = null;
                    redraw();
                  }
                  drawInfo();
                }
              }
            }
          }
        }
          var checkDistance = function(xOne, yOne, xTwo, yTwo, range)
          {
            var distance = Math.sqrt(Math.pow((xTwo - xOne),2) + Math.pow((yTwo-yOne), 2));
            if(distance <= range)
            {
              return true;
            }
            else {
              alert("Out of range!");
              return false;
            }
          }

          //remove dead character from the player's array
          var removeChar = function(targetCell)
          {
            var name = targetCell.player.getPlayer();
            if(playerOne.getName() == name)
            {
              playerOne.removeChar(targetCell.player.count);
            }
            else {
              playerTwo.removeChar(targetCell.player.count);
            }

            if(playerOne.getTeamLength() == 0)
            {
              alert(playerTwo.getName() + " wins!");
            }
            else if (playerTwo.getTeamLength() == 0){
              alert(playerOne.getName() + " wins!");
            }
          }
          //Checks if every character is out of moves
          //If so, restart
          //redraw in case someone just got blasted and we will see an empty slot
          redraw();
      };

    this.setTerrain = function()
    {

      switch (settings.boardType) {
        case 'Meadow':
          this.setMeadow();
          break;
        case 'Desert':
          this.setDesert();
          break;
        case 'Tundra':
          this.setTundra();
          break;

      }
    }

    this.setMeadow = function(){

        board = new Array(settings.width);
        for (var i = 0; i < settings.width; i++) {
          board[i] = new Array(settings.height);
          for (var k = 0; k < settings.height; k++) {
            if((k > 7 && k < 11) && (i > 3 && i < 8))
            {
              board[i][k] = new Cell(i,k, null);
              board[i][k].terrain = "water";
            }
            else if((k > 2 && k < 10) && (i > 2 && i < 6))
            {
              board[i][k] = new Cell(i,k, null);
              board[i][k].terrain = "water";
            }
            else if((k > 7 && k < 12) && (i > 9 && i < 13))
            {
              board[i][k] = new Cell(i,k, null);
              board[i][k].terrain = "rock";
            }
            else if((k > 1 && k < 4) && (i > 7 && i < 13))
            {
              board[i][k] = new Cell(i,k, null);
              board[i][k].terrain = "water";
            }
            else
            {
              board[i][k] = new Cell(i,k, null);
              board[i][k].terrain = "land";
            }
          }
        }
        //Fills the array with players
        for(var count = 0; count < 5; count++)
        {
          board[0][count].player=playerOne.team[count];
        }
        count = 0;
        //different starting variables (count and k) because on one side
        //I'm placing characters at the very beginning
        //on the other I'm placing them at the end
        //Probably not the best practice and technique but it'll do for KMP
        for(var k = settings.height-1; k > settings.height - 6; k--)
        {
          board[settings.width-1][k].player=playerTwo.team[count];
          count++;
        }
        for (var i = 0; i < settings.width; i++) {
          for (var g = 0; g < settings.height; g++) {
            console.log(board[i][g]);
          }
        }
    }

    this.setDesert = function(){
      board = new Array(settings.width);
      for (var i = 0; i < settings.width; i++) {
        board[i] = new Array(settings.height);
        for (var k = 0; k < settings.height; k++) {
          board[i][k] = new Cell(i,k,null);
          board[i][k].terrain = 'sand';

          if ((k>=3 && k<=4 && i>=10 &&i<=11)) {
            board[i][k].terrain = 'water';
          }
          if ((k==11&&i==2)||(k==4&&i==6)||(k==7&&i==10)||(k==13&&i==8)||(k==1&&i==8)||(k==8&&i==4)||(k==10&&i==7)||(k==2&&i==3)) {
            board[i][k].terrain = 'weed';
          }
        }
      }
      //Fills the array with players
      for(var count = 0; count < 5; count++)
      {
        board[0][count].player=playerOne.team[count];
      }
      count = 0;
      //different starting variables (count and k) because on one side
      //I'm placing characters at the very beginning
      //on the other I'm placing them at the end
      //Probably not the best practice and technique but it'll do for KMP
      for(var k = settings.height-1; k > settings.height - 6; k--)
      {
        board[settings.width-1][k].player=playerTwo.team[count];
        count++;
      }
      for (var i = 0; i < settings.width; i++) {
        for (var g = 0; g < settings.height; g++) {
          console.log(board[i][g]);
        }
      }
    }

    this.setTundra = function(){
      board = new Array(settings.width);
      for (var i = 0; i < settings.width; i++) {
        board[i] = new Array(settings.height);
        for (var k = 0; k < settings.height; k++) {
          board[i][k] = new Cell(i,k,null);
          board[i][k].terrain = 'ice';

          if ((i>5 && i<9 && k>4 &&k<8)) {
            board[i][k].terrain = 'berg';
          }
          if (k==13 && i== 8) {
            board[i][k].terrain = 'berg';
          }
          if (k==9 && (i==3 || i==12)) {
            board[i][k].terrain = 'berg';
          }
          if ((k==11 && i==6) || (k==3 && i==10) || (k==2 && i==9)) {
            board[i][k].terrain = 'berg';
          }

        }
      }
      //Fills the array with players
      for(var count = 0; count < 5; count++)
      {
        board[0][count].player=playerOne.team[count];
      }
      count = 0;
      //different starting variables (count and k) because on one side
      //I'm placing characters at the very beginning
      //on the other I'm placing them at the end
      //Probably not the best practice and technique but it'll do for KMP
      for(var k = settings.height-1; k > settings.height - 6; k--)
      {
        board[settings.width-1][k].player=playerTwo.team[count];
        count++;
      }
      for (var i = 0; i < settings.width; i++) {
        for (var g = 0; g < settings.height; g++) {
          console.log(board[i][g]);
        }
      }
    }
    //draws the html table based on the 2D array
    this.draw = function()
    {
      var map = $("#gameTable");
      map.empty();
      for(var i = 0; i < settings.width; i++)
      {
        var tr = $("<tr></tr>", {class: "row"});
        map.append(tr);
        for(var l = 0; l < board[i].length; l++)
        {
          if(board[l][i].player == null)
          {
            if(board[l][i].getTerrain() == "water")
            {
              var element = $("<td>", {class: "water"});
              var img = document.createElement('img');
              img.src = "sprites/water2.gif";
              element.append(img);
              tr.append(element);
            }
            else if (board[l][i].getTerrain() == "land")
            {
              var element = $("<td>", {class: "land"});
              var img = document.createElement('img');
              img.src = "sprites/field.gif";
              element.append(img);
              tr.append(element);
            }
            else
            {
              var element = $("<td>", {class: "rock"});
              var img = document.createElement('img');
              img.src = "sprites/stone.gif";
              element.append(img);
              tr.append(element);
            }
          }
          else {
            if(board[l][i].player.getName() == "Mage")
            {
              if(board[l][i].player.getPlayer() == playerOne.getName())
              {
                var element = $("<td>", {class: "playerOne"});
              }
              else {
                var element = $("<td>", {class: "playerTwo"});
              }
              var img = document.createElement('img');
              img.src = "sprites/mage.gif";
              element.append(img);
              tr.append(element);
            }
            else if(board[l][i].player.getName() == "Warrior")
            {
              if(board[l][i].player.getPlayer() == playerOne.getName())
              {
                var element = $("<td>", {class: "playerOne"});
              }
              else {
                var element = $("<td>", {class: "playerTwo"});
              }
              var img = document.createElement('img');
              img.src = "sprites/tank.gif";
              element.append(img);
              tr.append(element);
            }
            else if(board[l][i].player.getName() == "Priest")
            {
              if(board[l][i].player.getPlayer() == playerOne.getName())
              {
                var element = $("<td>", {class: "playerOne"});
              }
              else {
                var element = $("<td>", {class: "playerTwo"});
              }
              var img = document.createElement('img');
              img.src = "sprites/priest.gif";
              element.append(img);
              tr.append(element);
            }
            else if(board[l][i].player.getName() == "Druid")
            {
              if(board[l][i].player.getPlayer() == playerOne.getName())
              {
                var element = $("<td>", {class: "playerOne"});
              }
              else {
                var element = $("<td>", {class: "playerTwo"});
              }
              var img = document.createElement('img');
              img.src = "sprites/druid.gif";
              element.append(img);
              tr.append(element);
            }
            else if(board[l][i].player.getName() == "Swordsman")
            {
              if(board[l][i].player.getPlayer() == playerOne.getName())
              {
                var element = $("<td>", {class: "playerOne"});
              }
              else {
                var element = $("<td>", {class: "playerTwo"});
              }
              var img = document.createElement('img');
              img.src = "sprites/swordsman.gif";
              element.append(img);
              tr.append(element);
            }
          }
        }
      }
    }
};

var Cell = function(x, y, player){
  //not the actual player, it's the team member
  //if there is someone in this slot and they move
  //set player to null
  //on redraw, it will redraw to the correct land object
  //this is possible because we set
  //terrain values before we add players
  this.x = x;
  this.y = y;
  this.player = player;
  this.terrain = '';
  this.piece = null;
};
Cell.prototype = {
  constructor: Cell,
  setTerrain:function(t){
    this.terrain = t;
  },
  getTerrain:function(){
    return this.terrain;
  }
}
var game = new Game();

playerOne.addClass(p1Pieces.charAt(0), 1);
playerOne.addClass(p1Pieces.charAt(1), 2);
playerOne.addClass(p1Pieces.charAt(2), 3);
playerOne.addClass(p1Pieces.charAt(3), 4);
playerOne.addClass(p1Pieces.charAt(4), 5);

for (var i = 0; i < p1itemArray.length; i++) {
  playerOne.team[i].setItem(p1itemArray[i]);
}

playerTwo.addClass(p2Pieces.charAt(0), 1);
playerTwo.addClass(p2Pieces.charAt(1), 2);
playerTwo.addClass(p2Pieces.charAt(2), 3);
playerTwo.addClass(p2Pieces.charAt(3), 4);
playerTwo.addClass(p2Pieces.charAt(4), 5);

for (var i = 0; i < p1itemArray.length; i++) {
  playerTwo.team[i].setItem(p2itemArray[i]);
}

game.setTerrain();
game.draw();
game.gameLoop();
});
