export default function GameOver({ score, isWin, onRestart }) {
  return (
    <div className="overlay">
      <div className="overlay-box">
        <p className="overlay-title">{isWin ? 'YOU WIN!' : 'GAME OVER'}</p>
        <p className="overlay-subtitle">
          {isWin
            ? 'You remembered them all!'
            : `Score: ${score}`}
        </p>
        <button className="restart-btn" onClick={onRestart}>
          PLAY AGAIN
        </button>
      </div>
    </div>
  );
}
