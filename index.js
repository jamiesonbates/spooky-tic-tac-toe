let firstPlayer = true;

const updateBoard = function updateBoard(target) {
  if (firstPlayer) {
    target.textContent = 'O';
    target.classList.add('player-one', 'taken');
  }
  else {
    target.textContent = 'X';
    target.classList.add('player-two', 'taken');
  }

  firstPlayer = !firstPlayer;

  return updateTurn()
}

const updateTurn = function updateTurn() {
  const turn = document.querySelector('.turn');
  const waiting = document.querySelector('.waiting');

  turn.classList.remove('turn');
  turn.classList.add('waiting');
  waiting.classList.remove('waiting');
  waiting.classList.add('turn');
}

const move = function move(e) {
  const target = e.target;

  if (!target.classList.contains('box')) {
    return;
  }

  if (target.classList.contains('taken')) {
    console.log('taken');
    return;
  }

  return updateBoard(target);
}

const reset = function reset(e) {
  const boxes = document.querySelectorAll('.box');

  for (const box of boxes) {
    box.classList = 'box';
    box.textContent = '';
  }

  document.querySelector('#playerOne').classList = 'player turn';
  document.querySelector('#playerTwo').classList = 'player waiting';
}

document.querySelector('#board').addEventListener('click', move);
document.querySelector('#reset button').addEventListener('click', reset);
