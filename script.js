let small = document.getElementById('small');
let medium = document.getElementById('medium');
let large = document.getElementById('large');

let grid1 = false;
let grid2 = false;
let grid3 = false;
let gridStart = true;

if (gridStart == true) {

  for (let i = 1; i <= 1024; i++) {
    square = document.createElement('div');
    square.className = "square";
    document.getElementById('containerStart').appendChild(square);
  }
}



small.addEventListener('click', smallGrid);


function smallGrid() {

  if (grid1 == false && grid2 == true) {

    let containerSmall = document.createElement('div');
    containerSmall.setAttribute('id', 'containerSmall');
    container.appendChild(containerSmall);

    for (let i = 1; i <= 1024; i++) {
      square = document.createElement('div');
      square.className = "square";
      document.getElementById('containerSmall').appendChild(square);
    }

    containerSmall.addEventListener('mouseover', function(square) {
      square.target.style.background = changeColor()
    });

    containerMedium.remove();
    grid2 = false;
    grid1 = true;
  }
  
  else if (grid1 == false && grid3 == true) {

    let containerSmall = document.createElement('div');
    containerSmall.setAttribute('id', 'containerSmall');
    container.appendChild(containerSmall);

    for (let i = 1; i <= 1024; i++) {
      square = document.createElement('div');
      square.className = "square";
      document.getElementById('containerSmall').appendChild(square);
    }

    containerSmall.addEventListener('mouseover', function(square) {
      square.target.style.background = changeColor()
    });

    containerLarge.remove();
    grid1 = true;
    grid3 = false;
  }
  
  else if (grid1 == false && gridStart == true) {

    let containerSmall = document.createElement('div');
    containerSmall.setAttribute('id', 'containerSmall');
    container.appendChild(containerSmall);

    for (let i = 1; i <= 1024; i++) {
      square = document.createElement('div');
      square.className = "square";
      document.getElementById('containerSmall').appendChild(square);
    }

    containerSmall.addEventListener('mouseover', function(square) {
      square.target.style.background = changeColor()
    });

    containerStart.remove();
    grid1 = true;
    gridStart = false;
  }
}

medium.addEventListener('click', mediumGrid);

function mediumGrid() {
  if (grid2 == false && grid1 == true) {

    let containerMedium = document.createElement('div');
    containerMedium.setAttribute('id', 'containerMedium');
    container.appendChild(containerMedium);

    for (let i = 1; i <= 1024; i++) {

      square = document.createElement('div');
      square.className = "square";
      document.getElementById('containerMedium').appendChild(square);
    }

    containerMedium.addEventListener('mouseover', function(square) {
      square.target.style.background = changeColor();
    });

    containerSmall.remove();
    grid2 = true;
    grid1 = false;
  }
  
  else if (grid2 == false && grid3 == true) {

    let containerMedium = document.createElement('div');
    containerMedium.setAttribute('id', 'containerMedium');
    container.appendChild(containerMedium);

    for (let i = 1; i <= 1024; i++) {

      square = document.createElement('div');
      square.className = "square";
      document.getElementById('containerMedium').appendChild(square);
    }

    containerMedium.addEventListener('mouseover', function(square) {
      square.target.style.background = changeColor();
    });

    containerLarge.remove();
    grid2 = true;
    grid3 = false;
  } 
  
  else if (grid2 == false && gridStart == true) {

    let containerMedium = document.createElement('div');
    containerMedium.setAttribute('id', 'containerMedium');
    container.appendChild(containerMedium);

    for (let i = 1; i <= 1024; i++) {

      square = document.createElement('div');
      square.className = "square";
      document.getElementById('containerMedium').appendChild(square);
    }

    containerMedium.addEventListener('mouseover', function(square) {
      square.target.style.background = changeColor();
    });

    containerStart.remove();
    grid2 = true;
    gridStart = false;
  }
}


large.addEventListener('click', largeGrid);

function largeGrid() {

  if (grid3 == false && grid2 == true) {
    let containerLarge = document.createElement('div');
    containerLarge.setAttribute('id', 'containerLarge');
    container.appendChild(containerLarge);

    for (let i = 1; i <= 4096; i++) {
      square = document.createElement('div');
      square.className = "square";
      document.getElementById('containerLarge').appendChild(square);
    }

    containerLarge.addEventListener('mouseover', function(square) {
      square.target.style.background = changeColor();
    });

    containerMedium.remove();
    grid3 = true;
    grid2 = false;
  }
  
  else if (grid3 == false && grid1 == true) {
    let containerLarge = document.createElement('div');
    containerLarge.setAttribute('id', 'containerLarge');
    container.appendChild(containerLarge);

    for (let i = 1; i <= 4096; i++) {
      square = document.createElement('div');
      square.className = "square";
      document.getElementById('containerLarge').appendChild(square);
    }

    containerLarge.addEventListener('mouseover', function(square) {
      square.target.style.background = changeColor();
    });

    containerSmall.remove();
    grid3 = true;
    grid1 = false;
  }
  
  else if (grid3 == false && gridStart == true) {
    let containerLarge = document.createElement('div');
    containerLarge.setAttribute('id', 'containerLarge');
    container.appendChild(containerLarge);

    for (let i = 1; i <= 4096; i++) {
      square = document.createElement('div');
      square.className = "square";
      document.getElementById('containerLarge').appendChild(square);
    }

    containerLarge.addEventListener('mouseover', function(square) {
      square.target.style.background = changeColor();
    });

    containerStart.remove();
    grid3 = true;
    gridStart = false;
  }
}


function changeColor() {
  return "#000000"
}

containerStart.addEventListener('mouseover', function(square) {
  square.target.style.background = changeColor()
});
