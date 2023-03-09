var priorirty;
var priorirties = document.querySelectorAll('.dropdown-item-priority');

Array.from(priorirties).forEach((pri) => {
  pri.addEventListener('click', (event) => {
    priorirty = pri.textContent;
    document.querySelector('.priority-selected').innerHTML = pri.textContent;
  });
});

var color;
var colors = document.querySelectorAll('.dropdown-item-color');

Array.from(colors).forEach((col) => {
  col.addEventListener('click', (event) => {
    color = col.textContent;
    color = color.toLowerCase();
    document.querySelector('.color-selected').innerHTML = col.textContent;
  });
});

document.querySelector('#filter-red').addEventListener("click", function () {
    var tasks = document.querySelectorAll(".task .desc");
    for (i = 0; i < tasks.length; i++){
      tasks[i].style.display = "none";
    }
    for (i = 0; i < tasks.length; i++){
      if (tasks[i].getAttribute("color") === "red") {
        tasks[i].style.display = "block";
      }
    }
})
  
document.querySelector('#filter-green').addEventListener("click", function () {
    var tasks = document.querySelectorAll(".task .desc");
    for (i = 0; i < tasks.length; i++){
    tasks[i].style.display = "none";
    }
    for (i = 0; i < tasks.length; i++){
    if (tasks[i].getAttribute("color") === "green") {
        tasks[i].style.display = "block";
    }
    }
})
  
document.querySelector('#filter-blue').addEventListener("click", function () {
    var tasks = document.querySelectorAll(".task .desc");
    for (i = 0; i < tasks.length; i++){
      tasks[i].style.display = "none";
    }
    for (i = 0; i < tasks.length; i++){
      if (tasks[i].getAttribute("color") === "blue") {
        tasks[i].style.display = "block";
      }
    }
})

document.querySelector('#add').addEventListener("click", function () {
    var name = document.querySelector("#input-name").value;
    if (name != "") {
      var desc = addTask(name);
      if (priorirty === 'High priority') {
        var element = document.querySelector(".high-container");
        element.appendChild(desc);
        desc.classList.add("box", "faded-out")
        setTimeout(function () {
          desc.classList.remove("faded-out")
        }, 500);
      }
      else if (priorirty === 'Medium priority') {
        var element = document.querySelector(".medium-container");
        element.appendChild(desc);
        desc.classList.add("box", "faded-out")
        setTimeout(function () {
          desc.classList.remove("faded-out")
        }, 500);
      }
      else if (priorirty === 'Low priority') {
        var element = document.querySelector(".low-container");
        element.appendChild(desc);
        desc.classList.add("faded-out")
        setTimeout(function () {
          desc.classList.remove("faded-out")
        }, 500);
      }
      document.querySelector("#input-name").value = '';
      document.querySelector(".priority-selected").textContent = "Choose a priority";
      document.querySelector(".color-selected").textContent = "Choose a color";
      }
})

function addTask(name) {
    var desc = document.createElement('div');
    desc.className = "desc";
  
    var row = document.createElement('div');
    row.className = "row";
  
    var nameValue = document.createElement('div');
    nameValue.className = "col-8";
    nameValue.className += " col-sm-8";
    nameValue.className += " col-md-10";
    nameValue.innerHTML = name;
    nameValue.style.color = color;
  
    firstButtonContainer = document.createElement('div');
    firstButtonContainer.className = 'col-1';
    firstButtonContainer.className += ' col-sm-1';
    firstButtonContainer.className += ' col-md-1';
    firstButton = document.createElement('button');
    firstButton.className = 'btn';
    firstButton.className += ' btn-sm';
    firstButton.className += ' btn-light';
    firstButton.className += ' pin';
    iconForFirstButton = document.createElement('i');
    iconForFirstButton.className = 'fa';
    iconForFirstButton.className += ' fa-map-pin';
    firstButton.addEventListener('click', pinFunc);
    firstButton.appendChild(iconForFirstButton);
    firstButtonContainer.appendChild(firstButton);
  
    secondButtonContainer = document.createElement('div');
    secondButtonContainer.className = 'col-1';
    secondButtonContainer.className += ' col-sm-1';
    secondButtonContainer.className += ' col-md-1';
    secondButtonContainer.className += ' pl-2'; 
    secondButton = document.createElement('button');
    secondButton.className = 'btn';
    secondButton.className += ' btn-sm';
    secondButton.className += ' btn-light';
    secondButton.className += ' done';
    iconForSecondButton = document.createElement('i');
    iconForSecondButton.className = 'fa';
    iconForSecondButton.className += ' fa-check';
    secondButton.addEventListener('click', doneFunc);
    secondButton.appendChild(iconForSecondButton);
    secondButtonContainer.appendChild(secondButton);
  
    row.appendChild(nameValue);
    row.appendChild(firstButtonContainer);
    row.appendChild(secondButtonContainer);
    desc.setAttribute("color", color);
    desc.appendChild(row);
    return desc;
}

