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


