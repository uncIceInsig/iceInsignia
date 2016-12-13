$(document).ready(function(){

  $('.p2hov').on('click', function(e){
    e.preventDefault();
    window.location.href = 'destroy.php';
  });
  //alert(window.location.href);
  parseURL();

  var p1 = $(location).attr('p1');
  var p2 = $(location)

  $(".shop .item").draggable({
    helper:'clone'
  });

  $('.slot').attr('data-filled', false);
  $(".slot").droppable({
    drop: function(event, ui)
    {
      var dropped = ui.draggable;
      var droppedOn = $(this);
      //$(dropped).clone().appendTo($('.shop'))
      $(dropped).detach().css({top: 0, left: 0}).appendTo(droppedOn);
      droppedOn.attr('data-filled', true);
    //  alert(dropped.attr('id'))
      droppedOn.attr('item', dropped.attr('id'))
    }
  });

  $('#submitButton').on('click', function(e){
    e.stopPropagation();
    e.preventDefault();
    p1count=0;p2count=0;
    p1items = new Array(5);
    p2items = new Array(5);
    for (var i = 0; i < 5; i++) {

      if ($('.playerOneList #char'+(i+1)+'_item').attr('data-filled')=='true') {
        p1items[i] = $('.playerOneList #char'+(i+1)+'_item').attr('item');
        p1count++;
      };

      if ($('.playerTwoList #char'+(i+1)+'_item').attr('data-filled')=='true') {
        p2items[i] = $('.playerTwoList #char'+(i+1)+'_item').attr('item');
        p2count++;
      };
    }

    splitItems(p1items, p2items);
  });


});

var parseURL = function(){
  //gets parameters from URL
  var url = document.location.href;
  params = url.split('?')[1].split('&');

  p1chars = params[0].split('=')[1];
  p2chars = params[1].split('=')[1];

  //loads pictures
  for (var i = 1; i <= p1chars.length; i++) {
    //load player one images
    switch (p1chars.charAt(i-1)) {
      case 'f':
        elm = document.createElement('img');
        elm.src = 'Sprites/tank.gif'
        $('.playerOneList #char'+i).append(elm);
        $('.playerOneList #char'+i+' img').css({'width':'100%'});
        break;
      case 's':
        elm = document.createElement('img');
        elm.src = 'Sprites/swordsman.gif'
        $('.playerOneList #char'+i).append(elm);
        $('.playerOneList #char'+i+' img').css({'width':'100%'});
        break;
      case 'k':
        elm = document.createElement('img');
        elm.src = 'Sprites/knight.gif'
        $('.playerOneList #char'+i).append(elm);
        $('.playerOneList #char'+i+' img').css({'width':'100%'});
        break;
      case 't':
        elm = document.createElement('img');
        elm.src = 'Sprites/tank.gif'
        $('.playerOneList #char'+i).append(elm);
        $('.playerOneList #char'+i+' img').css({'width':'100%'});
        break;
      case 'a':
        elm = document.createElement('img');
        elm.src = 'Sprites/archer.gif'
        $('.playerOneList #char'+i).append(elm);
        $('.playerOneList #char'+i+' img').css({'width':'100%'});
        break;
      case 'd':
        elm = document.createElement('img');
        elm.src = 'Sprites/druid.gif'
        $('.playerOneList #char'+i).append(elm);
        $('.playerOneList #char'+i+' img').css({'width':'100%'});
        break;
      case 'p':
        elm = document.createElement('img');
        elm.src = 'Sprites/priest.gif'
        $('.playerOneList #char'+i).append(elm);
        $('.playerOneList #char'+i+' img').css({'width':'100%'});
        break;
      case 'r':
        elm = document.createElement('img');
        elm.src = 'Sprites/rogue.gif'
        $('.playerOneList #char'+i).append(elm);
        $('.playerOneList #char'+i+' img').css({'width':'100%'});
        break;
      case 'm':
        elm = document.createElement('img');
        elm.src = 'Sprites/mage.gif'
        $('.playerOneList #char'+i).append(elm);
        $('.playerOneList #char'+i+' img').css({'width':'100%'});
        break;
      default:

    }

    switch (p2chars.charAt(i-1)) {
      case 'f':
        elm = document.createElement('img');
        elm.src = 'Sprites/tank.gif'
        $('.playerTwoList #char'+i).append(elm);
        $('.playerTwoList #char'+i+' img').css({'width':'100%'});
        break;
      case 's':
        elm = document.createElement('img');
        elm.src = 'Sprites/swordsman.gif'
        $('.playerTwoList #char'+i).append(elm);
        $('.playerTwoList #char'+i+' img').css({'width':'100%'});
        break;
      case 'k':
        elm = document.createElement('img');
        elm.src = 'Sprites/knight.gif'
        $('.playerTwoList #char'+i).append(elm);
        $('.playerTwoList #char'+i+' img').css({'width':'100%'});
        break;
      case 't':
        elm = document.createElement('img');
        elm.src = 'Sprites/tank.gif'
        $('.playerTwoList #char'+i).append(elm);
        $('.playerTwoList #char'+i+' img').css({'width':'100%'});
        break;
      case 'a':
        elm = document.createElement('img');
        elm.src = 'Sprites/archer.gif'
        $('.playerTwoList #char'+i).append(elm);
        $('.playerTwoList #char'+i+' img').css({'width':'100%'});
        break;
      case 'd':
        elm = document.createElement('img');
        elm.src = 'Sprites/druid.gif'
        $('.playerTwoList #char'+i).append(elm);
        $('.playerTwoList #char'+i+' img').css({'width':'100%'});
        break;
      case 'p':
        elm = document.createElement('img');
        elm.src = 'Sprites/priest.gif'
        $('.playerTwoList #char'+i).append(elm);
        $('.playerTwoList #char'+i+' img').css({'width':'100%'});
        break;
      case 'r':
        elm = document.createElement('img');
        elm.src = 'Sprites/rogue.gif'
        $('.playerTwoList #char'+i).append(elm);
        $('.playerTwoList #char'+i+' img').css({'width':'100%'});
        break;
      case 'm':
        elm = document.createElement('img');
        elm.src = 'Sprites/mage.gif'
        $('.playerTwoList #char'+i).append(elm);
        $('.playerTwoList #char'+i+' img').css({'width':'100%'});
        break;
      default:

    }


  }
}


var splitItems = function(oneItems, twoItems){
  packed1='&p1i=';
  packed2 = '&p2i='
  for (var i = 0; i < oneItems.length; i++) {
    switch (oneItems[i]) {
      case 'book1':
        packed1 +='b';
        break;
      case 'mail1':
        packed1 += 'm';
        break;
      case 'pot1':
        packed1 += 'p';
        break;
      case 'egg1':
        packed1 += 'e';
        break;
      case 'boot1':
        packed1 += 't';
        break;
      default:
        packed1 += 'x';
        break;

    }

    switch (twoItems[i]) {
      case 'book2':
        packed2 +='b';
        break;
      case 'mail2':
        packed2 += 'm';
        break;
      case 'pot2':
        packed2 += 'p';
        break;
      case 'egg2':
        packed2 += 'e';
        break;
      case 'boot2':
        packed2 += 't';
        break;
      default:
        packed2 += 'x';
        break;

    }
  }

  var url = document.location.href;
  params = url.split('?')[1].split('&');

  p1chars = params[0].split('=')[1];
  p2chars = params[1].split('=')[1];
  u1 = 'u1='+$('#user1').text().trim();
  u2 ='&u2=' + $('#user2').text().trim();

  data = u1+u2+'&p1='+p1chars+'&p2='+p2chars+packed1+packed2;

  location.href = window.location.href = 'game.html?'+data;
}
