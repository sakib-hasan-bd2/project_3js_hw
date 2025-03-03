let box = document.querySelector('.box');
let btn = document.querySelector('.btn');
let list = document.querySelector('.list');
let updatebtn = document.querySelector('.updatebtn');

let listarr = [];
let updateindex;

let player2box = document.querySelector('.player2box');
let player2btn = document.querySelector('.player2btn');
let error = document.querySelector('.error');
let player = document.querySelector('.player');
let chance = document.querySelector('.chance');
let span = document.querySelector('span');
let img = document.querySelector('img');

let count = 5;

btn.addEventListener('click', function () {
  if (isNaN(box.value)) {
    list.innerHTML = '';
    listarr.push(box.value);
    box.value = '';
    display();
  } else {
    if (box.value > 10 || box.value < 1) {
      error.innerHTML = 'please enter a number less then 10 and greater than 1';
    } else {
      error.innerHTML = '';
      player.innerHTML = 'player-2';
      box.style.display = 'none';
      btn.style.display = 'none';
      player2box.style.display = 'inline-block';
      player2btn.style.display = 'inline-block';
      chance.style.display = 'block';
    }
  }
});

function display() {
  list.innerHTML = '';
  for (let i = 0; i < listarr.length; i++) {
    list.innerHTML += `<li>${i}-${listarr[i]}<button class="edit">Edit</button> <button class="delete">Delete</button></li>`;
    let deletebtn = document.querySelectorAll('.delete');
    let btnarr = Array.from(deletebtn);
    let editbtn = document.querySelectorAll('.edit');
    let editbtnarr = Array.from(editbtn);

    for (let j = 0; j < btnarr.length; j++) {
      btnarr[j].addEventListener('click', function () {
        listarr.splice(j, 1);
        list.innerHTML = '';
        display();
      });
    }
    for (let j = 0; j < editbtnarr.length; j++) {
      editbtnarr[j].addEventListener('click', function () {
        box.value = listarr[j];
        btn.style.display = 'none';
        updatebtn.style.display = 'inline-block';
        updateindex = j;
      });
    }
  }
}
updatebtn.addEventListener('click', function () {
  listarr[updateindex] = box.value;
  box.value = '';
  display();
  btn.style.display = 'inline-block';
  updatebtn.style.display = 'none';
});

player2btn.addEventListener('click', function () {
  if (isNaN(player2box.value)) {
    error.innerHTML = 'please enter a number';
  } else {
    error.innerHTML = '';
    if (player2box.value > 10 || player2box.value < 1) {
      error.innerHTML = 'please enter a number less then 10 and greater than 1';
    } else {
      error.innerHTML = '';
      if (count > 0) {
        span.innerHTML = count;
        count--;
        if (box.value == player2box.value) {
          winner('player 2 win');
        }
      } else {
        winner('player 1 win');
      }
    }
  }
});

function winner(win) {
  player.innerHTML = win;
  box.style.display = 'none';
  btn.style.display = 'none';
  player2box.style.display = 'none';
  player2btn.style.display = 'none';
  chance.style.display = 'none';
  img.style.display = 'block';
}
