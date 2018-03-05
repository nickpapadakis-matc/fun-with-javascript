(function() {

var buttons = [
{
name: '1',
selector: 'b1',
bColor: 'black',
color: 'white'
},
{
name: '2',
selector: 'b2',
bColor: 'blue',
color: 'white'
},
{
name: '3',
selector: 'b3',
bColor: 'red',
color: 'white'
},
{
name: '4',
selector: 'b4',
bColor: 'green',
color: 'white'
},
{
name: '5',
selector: 'b5',
bColor: 'white',
color: 'black'
},
{
name: '6',
selector: 'b6',
bColor: 'yellow',
color: 'black'
}
]
 var getEl = function(id){
   return document.getElementById(id);
}

function Button(buttons){
  this.name = buttons.name;
  this.selector = buttons.selector;
  this.bColor = buttons.bColor;
  this.color = buttons.color;
  }

 var makeBtns = function(button){
   var selector = button.selector,
    nameEl = getEl(selector);
    bColorEl = getEl(selector);
    colorEl = getEl(selector);


   nameEl.textContent = button.name;
   bColorEl.style.backgroundColor = button.bColor;
   colorEl.style.color = button.color;

 }

for (var i = 0; i < buttons.length; i++) {
  var button = new Button(buttons[i]);
  makeBtns(button);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var win = function(){
    getEl('win').style.visibility = 'visible';
}

  var chngColor = function(selector, id){

    switch(id){
      case 0:{
        getEl(selector).style.backgroundColor = 'white';
        getEl(selector).style.color = 'black';
        break;
      }
      case 1:{
        getEl(selector).style.backgroundColor = 'black';
        getEl(selector).style.color = 'white';
        break;
      }
      case 2:{
        getEl(selector).style.backgroundColor = 'red';
        getEl(selector).style.color = 'white';
        break;
      }
      case 3:{
        getEl(selector).style.backgroundColor = 'green';
        getEl(selector).style.color = 'white';
        break;
      }
      case 4:{
        getEl(selector).style.backgroundColor = 'yellow';
        getEl(selector).style.color = 'black';
        break;
      }
      case 5:{
        getEl(selector).style.backgroundColor = 'blue';
        getEl(selector).style.color = 'white';
        break;
      }
    }
    getEl(selector).addEventListener('click', function(){
      var b1Col = getEl('b1').style.backgroundColor;
      var b2Col = getEl('b2').style.backgroundColor;
      var b3Col = getEl('b3').style.backgroundColor;
      var b4Col = getEl('b4').style.backgroundColor;
      var b5Col = getEl('b5').style.backgroundColor;
      var b6Col = getEl('b6').style.backgroundColor;

      if(b1Col == b2Col && b1Col == b3Col && b1Col == b4Col && b1Col == b5Col && b1Col == b6Col){
        win();
      }
    });
  }

  getEl('b1').addEventListener('click', function(){
    chngColor('b1', getRandomInt(6));
  })
  getEl('b2').addEventListener('click', function(){
    chngColor('b2', getRandomInt(6));
  })
  getEl('b3').addEventListener('click', function(){
    chngColor('b3', getRandomInt(6));
  })
  getEl('b4').addEventListener('click', function(){
    chngColor('b4', getRandomInt(6));
  })
  getEl('b5').addEventListener('click', function(){
    chngColor('b5', getRandomInt(6));
  })
  getEl('b6').addEventListener('click', function(){
    chngColor('b6', getRandomInt(6));
  })



/*  getEl('b1').addEventListener('click', function(){
    var b1Col = getEl('b1').style.backgroundColor;
    var b2Col = getEl('b2').style.backgroundColor;
    var b3Col = getEl('b3').style.backgroundColor;
    var b4Col = getEl('b4').style.backgroundColor;
    var b5Col = getEl('b5').style.backgroundColor;
    var b6Col = getEl('b6').style.backgroundColor;

    if(b1Col == b2Col && b1Col == b3Col && b1Col == b4Col && b1Col == b5Col && b1Col == b6Col){
      win();
    }
  });*/






})();
