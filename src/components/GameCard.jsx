export default function GameCard({ emoji, name, onClick }) {
  return (
    <button className="game-card" onClick={onClick}>
      <span className="card-emoji">{emoji}</span>
      <span className="card-name">{name}</span>
    </button>
  );
}
