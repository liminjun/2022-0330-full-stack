const Square = ({id}) => {
  const [color, setColor] = React.useState('red');
  const palet = ['red','blue','green'];
  const getRandomColor = () => {
    return palet[Math.floor(Math.random()*3)];
  }
  return (
    <button onClick={(e) => {
      setColor(getRandomColor())
      e.target.style.background = color;
    }}>
      <h1>{id}</h1>
    </button>
  )
}
const Board = () => {
  const [player, setPlayer] = React.useState(1);
  let status = `Player ${player}`;
  function renderSquare(i) {
    return <Square id={i}></Square>
  }
  return (
    <div
      className="game-board"
      onClick={(e) => {
        setPlayer((player + 1) % 2);
        status = `Player ${player}`;
      }}
    >
      <div className="grid-row">
        {renderSquare(0)}{renderSquare(1)}{renderSquare(2)}
      </div>
      <div id="info">
        <h1>{status}</h1>
      </div>
    </div>
  );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
