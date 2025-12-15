const player = document.getElementById('player');
  const pipe = document.getElementById('pipe');
  const scoreEl = document.getElementById('score');
  const gameOverBox = document.getElementById('gameOver');
  const gameBox = document.getElementById('gameBox');
  const selecao = document.getElementById('selecao');

  let score = 0;
  let passedPipe = false;
  let gameLoop;
  let gameStarted = false; 

  // INICIAR JOGO
  function startGame(opcao) {

    if (opcao === 1) {
      player.src = 'cascão.gif';
    } else if (opcao === 2) {
      player.src = 'cebolinha.gif';
    } else if (opcao === 3) {
      player.src = 'monica.gif';
    }

    player.style.display = 'block';
    selecao.style.display = 'none';
    gameBox.style.display = 'block';

    score = 0;
    scoreEl.innerText = 'Pontos: 0';
    gameStarted = true;

    gameLoop = setInterval(() => {

      const pipeRect = pipe.getBoundingClientRect();
      const playerRect = player.getBoundingClientRect();

      // COLISÃO
const isJumping = player.classList.contains('jump');

if (
  !isJumping &&
  pipeRect.left < playerRect.right - 20 &&
  pipeRect.right > playerRect.left + 20 &&
  pipeRect.bottom > playerRect.top + 30
) {
  pipe.style.animation = 'none';
  gameOverBox.style.display = 'block';
  clearInterval(gameLoop);
  gameStarted = false;
}

      // PONTUAÇÃO
      if (pipeRect.right < playerRect.left && !passedPipe) {
        score++;
        scoreEl.innerText = 'Pontos: ' + score;
        passedPipe = true;
      }

      // RESET DO CANO
      if (pipeRect.left > gameBox.getBoundingClientRect().right - 50) {
        passedPipe = false;
      }

    }, 30);
  }

  // PULO
  function jump() {
    if (!gameStarted) return; // NÃO PULA SE NÃO COMEÇOU

    if (!player.classList.contains('jump')) {
      player.classList.add('jump');
      setTimeout(() => {
        player.classList.remove('jump');
      }, 600);
    }
  }

  // TECLADO
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
      e.preventDefault();
      jump();
    }
  });

  // CLIQUE
  document.addEventListener('click', () => {
    jump();
  });