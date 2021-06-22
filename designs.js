// Select color input
const color = document.getElementById('colorPicker');


// calling table from HTML
const grid = document.getElementById('pixelCanvas');


//grid height and width entry variables
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');


//make grid function
function makeGrid(height, width) {
  //resetting grid to blank
  grid.innerHTML = "";
  //creating rows based on user's entry
  for (var x = 0; x < height.value; x++) {
    var row = grid.insertRow(x);
    //creating cells for each row based on user's entry
    for (var y = 0; y < width.value; y++) {
      const cell = row.insertCell(y);
      //creating event to color cells when clicked
      cell.addEventListener("click", function colorCell(color_choice) {
        //setting color based on user's choice
        cell.style.backgroundColor = color.value;
      });
    }
  }
};


// When size is submitted by the user, call makeGrid()
//event listener for the submit button
const submitButton = document.getElementById('sizePicker');
submitButton.addEventListener('submit', function(submit) {
  submit.preventDefault();
  makeGrid(height, width);
  }
);
