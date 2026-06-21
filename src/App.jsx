import { useState, useCallback } from 'react';
import Header from './components/Header';
import GameCard from './components/GameCard';
import GameOver from './components/GameOver';
import CARDS from './data/cards';

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function App() {
  const [cards, setCards] = useState(() => shuffle(CARDS));
  const [clickedIds, setClickedIds] = useState(new Set());
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleClick = useCallback((id) => {
    if (gameOver) return;

    if (clickedIds.has(id)) {
      setHighScore(Math.max(score, highScore));
      setGameOver(true);
      return;
    }

    const newScore = score + 1;
    const newClicked = new Set(clickedIds);
    newClicked.add(id);

    setScore(newScore);
    setClickedIds(newClicked);
    setCards(shuffle(cards));

    if (newScore === CARDS.length) {
      setHighScore(Math.max(newScore, highScore));
      setGameOver(true);
    }
  }, [clickedIds, gameOver, score, highScore, cards]);

  const resetGame = useCallback(() => {
    setClickedIds(new Set());
    setScore(0);
    setGameOver(false);
    setCards(shuffle(CARDS));
  }, []);

  return (
    <div className="app">
      <Header score={score} highScore={highScore} />
      <main className="game-board">
        {cards.map(card => (
          <GameCard
            key={card.id}
            emoji={card.emoji}
            name={card.name}
            onClick={() => handleClick(card.id)}
          />
        ))}
      </main>
      {gameOver && (
        <GameOver
          score={score}
          isWin={score === CARDS.length}
          onRestart={resetGame}
        />
      )}
    </div>
  );
}
