(function() {


  var buttons = [{
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
    },
    {
      name: '7',
      selector: 'b7',
      bColor: 'rgb(134, 84, 51)',
      color: 'black'
    },
    {
      name: '8',
      selector: 'b8',
      bColor: 'rgb(105, 212, 255)',
      color: 'black'
    },
    {
      name: '9',
      selector: 'b9',
      bColor: 'rgb(117, 74, 159)',
      color: 'white'
    },
    {
      name: '10',
      selector: 'b10',
      bColor: 'rgb(134, 84, 51)',
      color: 'black'
    },
    {
      name: '11',
      selector: 'b11',
      bColor: 'rgb(105, 212, 255)',
      color: 'black'
    },
    {
      name: '12',
      selector: 'b12',
      bColor: 'rgb(117, 74, 159)',
      color: 'white'
    }
  ]

  var getEl = function(id) {
    return document.getElementById(id);
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  function Button(buttons) {
    this.name = buttons.name;
    this.selector = buttons.selector;
    this.bColor = buttons.bColor;
    this.color = buttons.color;
  }

  var makeBtns = function(button) {
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

  var reset = function() {
    for (var i = 0; i < buttons.length; i++) {
      var button = new Button(buttons[i]);
      makeBtns(button);
    }
    getEl('win').style.visibility = 'hidden';
  }

  getEl('bReset').addEventListener('click', function() {
    reset();
  });



  var win = function() {
    getEl('win').style.visibility = 'visible';
  }


  var chngColor = function(selector, id) {

    switch (id) {
      case 1:
        {
          getEl(selector).style.backgroundColor = 'white';
          getEl(selector).style.color = 'black';
          break;
        }
      case 2:
        {
          getEl(selector).style.backgroundColor = 'black';
          getEl(selector).style.color = 'white';
          break;
        }
      case 3:
        {
          getEl(selector).style.backgroundColor = 'red';
          getEl(selector).style.color = 'white';
          break;
        }
      case 4:
        {
          getEl(selector).style.backgroundColor = 'green';
          getEl(selector).style.color = 'white';
          break;
        }
      case 5:
        {
          getEl(selector).style.backgroundColor = 'yellow';
          getEl(selector).style.color = 'black';
          break;
        }
      case 6:
        {
          getEl(selector).style.backgroundColor = 'blue';
          getEl(selector).style.color = 'white';
          break;
        }
      case 7:
        {
          getEl(selector).style.backgroundColor = 'rgb(121, 175, 255)';
          getEl(selector).style.color = 'white';
          break;
        }
      case 8:
        {
          getEl(selector).style.backgroundColor = 'rgb(42, 32, 124)';
          getEl(selector).style.color = 'black';
          break;
        }
      case 9:
        {
          getEl(selector).style.backgroundColor = 'rgb(13, 214, 88)';
          getEl(selector).style.color = 'black';
          break;
        }

    }
    getEl(selector).addEventListener('click', function() {
      var b1Col = getEl('b1').style.backgroundColor;
      var b2Col = getEl('b2').style.backgroundColor;
      var b3Col = getEl('b3').style.backgroundColor;
      var b4Col = getEl('b4').style.backgroundColor;
      var b5Col = getEl('b5').style.backgroundColor;
      var b6Col = getEl('b6').style.backgroundColor;
      var b7Col = getEl('b7').style.backgroundColor;
      var b8Col = getEl('b8').style.backgroundColor;
      var b9Col = getEl('b9').style.backgroundColor;
      var b10Col = getEl('b7').style.backgroundColor;
      var b11Col = getEl('b8').style.backgroundColor;
      var b12Col = getEl('b9').style.backgroundColor;

      if (b1Col == b2Col && b1Col == b3Col && b1Col == b4Col &&
        b1Col == b5Col && b1Col == b6Col && b1Col == b7Col &&
        b1Col == b8Col && b1Col == b9Col && b1Col == b10Col && b1Col == b11Col && b1Col == b12Col) {
        win();
      }
    });
  }

  getEl('b1').addEventListener('click', function() {
    chngColor('b1', getRandomInt(9));
  })
  getEl('b2').addEventListener('click', function() {
    chngColor('b2', getRandomInt(9));
  })
  getEl('b3').addEventListener('click', function() {
    chngColor('b3', getRandomInt(9));
  })
  getEl('b4').addEventListener('click', function() {
    chngColor('b4', getRandomInt(9));
  })
  getEl('b5').addEventListener('click', function() {
    chngColor('b5', getRandomInt(9));
  })
  getEl('b6').addEventListener('click', function() {
    chngColor('b6', getRandomInt(9));
  })
  getEl('b7').addEventListener('click', function() {
    chngColor('b7', getRandomInt(9));
  })
  getEl('b8').addEventListener('click', function() {
    chngColor('b8', getRandomInt(9));
  })
  getEl('b9').addEventListener('click', function() {
    chngColor('b9', getRandomInt(9));
  })
  getEl('b10').addEventListener('click', function() {
    chngColor('b10', getRandomInt(9));
  })
  getEl('b11').addEventListener('click', function() {
    chngColor('b11', getRandomInt(9));
  })
  getEl('b12').addEventListener('click', function() {
    chngColor('b12', getRandomInt(9));
  })


})();
