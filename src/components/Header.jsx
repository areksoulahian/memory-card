export default function Header({ score, highScore }) {
  return (
    <header className="header">
      <h1 className="header-title">Pixel Memory</h1>
      <div className="header-scores">
        <p className="score">
          SCORE: <span className="score-value">{score}</span>
        </p>
        <p className="score high">
          BEST: <span className="score-value">{highScore}</span>
        </p>
      </div>
    </header>
  );
}
