const Square = ({id, newState}) => {
  const [color, setColor] = React.useState('green');
  const [status, setStatus] = React.useState(null);
  const XorO = ['O','X'];
  const palet = ['red','blue','green'];
  const getRandomColor = () => palet[Math.floor(Math.random() * 3)]
  React.useEffect(() => {
    console.log(`Render ${id}`);
    return () => console.log(`unmounting Squar ${id}`)
  });
  return <button onClick={(e) => {
    // setColor(getRandomColor());
    let col = getRandomColor();
    setColor(col);
    let nextPlayer = newState(id);
    setStatus(nextPlayer);
    e.target.style.background = col;
  }}>
  <h1>{XorO[status]}</h1>
  </button>
  
}

const Board = () => {
  const [player, setPlayer] = React.useState(1);
  const [state, setState] = React.useState(Array(9).fill(null));

  const [mounted, setMounted] = React.useState(true);
  const [random, setRandom] = React.useState(0);

  let status = `Player ${player}`;
  let winner = checkWinner(state);
  if (winner !=null) {
    status = `Player ${winner} wins`
  }
  const newState = idOfSquare => {
    // 
    let thePlayer = player;
    state[idOfSquare] = player;
    setState(state); 
    let nextPlayer = (player + 1)%2;
    setPlayer(nextPlayer);
    
    console.log(`adding state ${JSON.stringify(state)}`);
    status = `Player ${nextPlayer}`;
    return thePlayer
  }
  const toggle  = () => setMounted(!mounted);
  const reRender = () => setRandom(Math.random())

  function renderSquare(i) {
    return <Square id={i} player={player} newState={newState}></Square>
  }

  return (
    <div
      className="game-board"
    >
      <div className='grid-row'>
        {mounted && renderSquare(0)}
        {mounted && renderSquare(1)}
        {mounted && renderSquare(2)}
      </div>
      <div className='grid-row'>
        {mounted && renderSquare(3)}
        {mounted && renderSquare(4)}
        {mounted && renderSquare(5)}
      </div>
      <div className='grid-row'>
        {mounted && renderSquare(6)}
        {mounted && renderSquare(7)}
        {mounted && renderSquare(8)}
      </div>
      <div id="info">
        <button onClick={toggle}>Show/Hide Row</button>
        <button onClick={reRender}>Re-render</button>
        <h1>Status:{status}</h1>
      </div>
    </div>
  );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
