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
    var value = document.getElementById('label-name').value;
    var color = document.getElementById('colorpicker').value;
    var newLabel = {
        name: value,
        color: color
    }
    labelArray.push(newLabel);
    console.log(labelArray)
    closeOverlay();
    updateLabels(newLabel);
  }; // addLabel()

  var submit = document.getElementById('labelSubmit');
  submit.onclick = addLabelFunc;
}; // createLabel()

function showOverlay() {
  document.getElementById('background-overlay').style.display = 'block';
}

function closeOverlay()  {
  document.getElementById('background-overlay').style.display = 'none';
  document.querySelectorAll('.overlay').forEach(function(overlay){
    overlay.style.display = 'none'
  });
} // closeOverlay


function updateLabels(newLabel) {
  var labelList = document.getElementById('labelList');
  var div = document.createElement('div');
  labelList.appendChild(div);
  div.textContent = newLabel.name;
  div.style.backgroundColor = newLabel.color;
}; // updateLabels
