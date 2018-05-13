console.log('hello from script.js')

// global
var labelArray = [];

function addCard() {
  var div = document.createElement('div');
  var cards = document.getElementById('cards');
  var card = cards.appendChild(div).setAttribute('class', 'card');
}; // addCard()

function createLabel() {
  showOverlay();
  var labels = document.getElementById('labels');
  labels.style.display = 'flex';

  var addLabelFunc = function addLabel() {
    console.log('addLabelFunc')
    var div = document.createElement('div');
    labels.appendChild(div);
    var value = document.getElementById('label-name').value;
    div.textContent = value;
    var color = document.getElementById('colorpicker').value;
    div.style.backgroundColor = color;
    div.style.color = 'white';
    var newLabel = {
        name: value,
        color: color
    }
    labelArray.push(newLabel);
    console.log(labelArray)
  }; // addLabel()

  var submit = document.getElementById('labelSubmit');
  submit.onclick = addLabelFunc;
}; // createLabel()

function showOverlay() {
  document.getElementById('background-overlay').style.display = 'block';
}

function closeOverlay()  {
  document.querySelectorAll('.overlay').forEach(function(overlay){
    overlay.style.display = 'none'
  });
  document.getElementById('background-overlay').style.display = 'none';
  updateLabels();
} // closeOverlay


function updateLabels() {
  var labelList = document.getElementById('labelList');
  for (i in labelArray) {
    var div = document.createElement('div');
    labelList.appendChild(div);
    div.textContent = labelArray[i].name;
    div.style.backgroundColor = labelArray[i].color;
  }
}; // updateLabels
