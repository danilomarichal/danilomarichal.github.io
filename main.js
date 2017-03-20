console.log('working!')


var body = $('body');
var money = $('<div>', {'class':'money'});
var aircraft = $('#aircraft');
var start = $('<div>', {'id':"start"});
$('#screen').append(start);
start.text("START");
var score = $('<div>', {'id':"score"});
body.append(score);
score.text(0);

//Creates array of divs with class "rock" + index #.

var rocks = [];
for(i=1; i<=5; i++){
rocks.push($('<div>', {'id':"rock"+[i],'class':"rocks"}));
rocks;
};


//Creates array of planets, class "planet" + index #.
//gives each planet a value.
var planets =[];
for(i=1; i<=5; i++){
planets.push($('<div>', {'class':"planet"+[i]}));
};
body.append(planets);

var coin = $('<div>', {'id':"coin", 'class':'money'});
var gem = $('<div>', {'id':"gem", 'class':'money'});
var chestRed = $('<div>', {'id':"chestRed", 'class':'money'});
var chestGreen = $('<div>', {'id':"chestGreen", 'class':'money'});
var chestYellow = $('<div>', {'id':"chestYellow", 'class':'money'});

$('.planet1').append(coin);
$('.planet2').append(chestGreen);
$('.planet3').append(chestRed);
$('.planet4').append(chestYellow);
$('.planet5').append(gem);


   $('#coin').text('50');
   $('#gem').text('75');
   $('#chestGreen').text('25');
   $('#chestRed').text('25');
   $('#chestYellow').text('25');




var count= 0;
function countHover(){
  if (count===5){
    $('#start').text("GAME OVER!!!");
    $('#aircraft').remove();
    $('.money').remove();
  }
}
countHover();

//------------------------------------------------------------------------------
//Taken from StackOverFlow / Roko C. Buljan's function to make div stick to mouse.
function attachMouse(){
var mouseX = 0,
    mouseY = 0;
$(document).mousemove(function(e){
   mouseX = e.pageX;
   mouseY = e.pageY;
});
var follower = $("#aircraft");
var xp = 40, yp = 40;
var loop = setInterval(function(){
    // change 12 to alter damping higher is slower
    xp += (mouseX - xp) / 10 -1;
    yp += (mouseY - yp) / 10 -1;
    follower.css({left:xp, top:yp});
}, 30);
}
attachMouse();
//------------------------------------------------------------------------------
body.append(rocks);
function addEvents(){

function cosa(){
$('#start').on('click', function(){

  start.text("Get 200 points!");
});


$('#coin').on('click', function(){
var sum = Number($('#score').text())+ Number($('#coin').text());
  one = score.text(sum);
  $('#coin').remove();
});

$('#gem').on('click', function(){
  var sum = Number($('#score').text())+ Number($('#gem').text());
  two=score.text(sum);
  $('#gem').remove();
});

$('#chestGreen').on('click', function(){
  var sum = Number($('#score').text())+ Number($('#chestGreen').text());
  three=score.text(sum);
  $('#chestGreen').remove();
});

$('#chestRed').on('click', function(){
  var sum = Number($('#score').text())+ Number($('#chestRed').text());
  four=score.text(sum);
  $('#chestRed').remove();
});

$('#chestYellow').on('click', function(){
  var sum = Number($('#score').text())+ Number($('#chestYellow').text());
  five=score.text(sum);
  $('#chestYellow').remove();

});
}
cosa();

$('.rocks').on('mouseover', function(){
  count++;
  countHover();
});

function levelTwo(){
$('#level').on('click', function(){
$('.rocks').css('animation-duration','1s');
  start.text("Get 400 points!");

$('.planet1').append(coin);
$('.planet2').append(chestGreen);
$('.planet3').append(chestRed);
$('.planet4').append(chestYellow);
$('.planet5').append(gem);


$('#coin').on('click', function(){
var sum = Number($('#score').text())+ Number($('#coin').text());
  one = score.text(sum);
  $('#coin').remove();
});

$('#gem').on('click', function(){
  var sum = Number($('#score').text())+ Number($('#gem').text());
  two=score.text(sum);
  $('#gem').remove();
});

$('#chestGreen').on('click', function(){
  var sum = Number($('#score').text())+ Number($('#chestGreen').text());
  three=score.text(sum);
  $('#chestGreen').remove();
});

$('#chestRed').on('click', function(){
  var sum = Number($('#score').text())+ Number($('#chestRed').text());
  four=score.text(sum);
  $('#chestRed').remove();
});

$('#chestYellow').on('click', function(){
  var sum = Number($('#score').text())+ Number($('#chestYellow').text());
  five=score.text(sum);
  $('#chestYellow').remove();

});
$('.rocks').on('mouseover', function(){
  count++;
  countHover();
});


});
}
levelTwo()
}
addEvents();


$(document).ready(function(){
  addEvents();
});















