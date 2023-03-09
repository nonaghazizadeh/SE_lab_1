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

