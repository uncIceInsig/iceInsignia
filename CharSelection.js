$(document).ready(function(){

  $("#submitButton").on('click', function(e){
    var check = checkCounters();
    if(check != ''){window.location.href = 'itemSelection.php?'+check;}
  });

});

var checkCounters = function(){
  var fighter1 = parseInt($('#fighter1').val());
  var swordsman1 = parseInt($('#swordsman1').val());
  var knight1 = parseInt($('#knight1').val());
  var tank1 = parseInt($('#tank1').val());
  var archer1 = parseInt($('#archer1').val());
  var druid1 = parseInt($('#druid1').val());
  var priest1 = parseInt($('#priest1').val());
  var rogue1 = parseInt($('#rogue1').val());
  var mage1 =  parseInt($('#mage1').val());



  var p1Character='';
  var p1Abbrev='';
  if(fighter1==1){p1Character+='Fighter\n';p1Abbrev+='f';}
  if(fighter1==2){p1Character+='Fighter (2)\n';p1Abbrev+='ff';}

  if(swordsman1==1){p1Character+='Swordsman\n';p1Abbrev+='s';}
  if(swordsman1==2){p1Character+='Swordsman (2)\n';p1Abbrev+='ss';}

  if(knight1==1){p1Character+='Knight\n';p1Abbrev+='k';}
  if(knight1==2){p1Character+='Knight (2)\n';p1Abbrev+='kk';}

  if(tank1==1){p1Character+='Tank\n';p1Abbrev+='t';}
  if(tank1==2){p1Character+='Tank (2)\n';p1Abbrev+='tt';}

  if(archer1==1){p1Character+='Archer\n';p1Abbrev+='a';}
  if(archer1==2){p1Character+='Archer (2)\n';p1Abbrev+='aa';}

  if(druid1==1){p1Character+='Druid\n';p1Abbrev+='d';}
  if(druid1==2){p1Character+='Druid (2)\n';p1Abbrev+='dd';}

  if(priest1==1){p1Character+='Priest\n';p1Abbrev+='p';}
  if(priest1==2){p1Character+='Priest (2)\n';p1Abbrev+='pp';}

  if(rogue1==1){p1Character+='Rogue\n';p1Abbrev+='r';}
  if(rogue1==2){p1Character+='Rogue (2)\n';p1Abbrev+='rr';}

  if(mage1==1){p1Character+='Mage\n';p1Abbrev+='m';}
  if(mage1==2){p1Character+='Mage (2)\n';p1Abbrev+='mm';}


  var fighter2 = parseInt($('#fighter2').val());
  var swordsman2 = parseInt($('#swordsman2').val());
  var knight2 = parseInt($('#knight2').val());
  var tank2 = parseInt($('#tank2').val());
  var archer2 = parseInt($('#archer2').val());
  var druid2 = parseInt($('#druid2').val());
  var priest2 = parseInt($('#priest2').val());
  var rogue2 = parseInt($('#rogue2').val());
  var mage2 =  parseInt($('#mage2').val());

  var p2Character='';
  var p2Abbrev ='';
  if(fighter2==1){p2Character+='Fighter\n';p2Abbrev+='f';}
  if(fighter2==2){p2Character+='Fighter (2)\n';p2Abbrev+='ff';}

  if(swordsman2==1){p2Character+='Swordsman\n';p2Abbrev+='s';}
  if(swordsman2==2){p2Character+='Swordsman (2)\n';p2Abbrev+='ss';}

  if(knight2==1){p2Character+='Knight\n';p2Abbrev+='k';}
  if(knight2==2){p2Character+='Knight (2)\n';p2Abbrev+='kk';}

  if(tank2==1){p2Character+='Tank\n';p2Abbrev+='t';}
  if(tank2==2){p2Character+='Tank (2)\n';p2Abbrev+='tt';}

  if(archer2==1){p2Character+='Archer\n';p2Abbrev+='a';}
  if(archer2==2){p2Character+='Archer (2)\n';p2Abbrev+='aa';}

  if(druid2==1){p2Character+='Druid\n';p2Abbrev+='d';}
  if(druid2==2){p2Character+='Druid (2)\n';p2Abbrev+='dd';}

  if(priest2==1){p2Character+='Priest\n';p2Abbrev+='p';}
  if(priest2==2){p2Character+='Priest (2)\n';p2Abbrev+='pp';}

  if(rogue2==1){p2Character+='Rogue\n';p2Abbrev+='r';}
  if(rogue2==2){p2Character+='Rogue (2)\n';p2Abbrev+='rr';}

  if(mage2==1){p2Character+='Mage\n';p2Abbrev+='m';}
  if(mage2==2){p2Character+='Mage (2)\n';p2Abbrev+='mm';}





  var tot1 = fighter1 + swordsman1 + knight1 + tank1 + archer1 + druid1 + priest1 + rogue1 + mage1;
  var tot2 = fighter2 + swordsman2 + knight2 + tank2 + archer2 + druid2 + priest2 + rogue2 + mage2;

  var p1check=false;
  var p2check=false;

  if(tot1 > 5){
    alert('Player One has too many pieces! ('+tot1+')')
  }else if (tot1<5) {
    alert('Player One has not enough pieces! ('+tot1+')')
  }else{
    alert('Player 1 Characters:\n\n'+p1Character)
    p1check=true;
  }
  if(tot2 > 5){
    alert('Player Two has too many pieces! ('+tot2+')')
  }else if (tot2 < 5) {
    alert('Player Two has not enough pieces! ('+tot2+')')
  }else{
    alert('Player 2 Characters:\n\n'+p2Character)
    p2check=true;
  }

  if(p1check && p2check){return 'p1='+p1Abbrev+'&p2='+p2Abbrev;}
  return '';

}
