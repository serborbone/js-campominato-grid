let gridSelection = document.querySelector('.grid');
let squareValue = 100;
let selectDiff = document.getElementById('difficulty-select').value;
let buttonSelect = document.getElementById('play-btn');

for (let i = 1; i <= squareValue; i++) {

  let divSquare = document.createElement('div');
  divSquare.classList.add('square');
  divSquare.innerHTML = i;

  divSquare.addEventListener('click', function() {
  
    divSquare.classList.add('color-selected');

  });

  gridSelection.appendChild(divSquare);

  //numero di quadrati
  if (selectDiff == "medium") {

        squareValue = 81;

    } else if (selectDiff == "hard") {

        squareValue = 49;
    }

}


