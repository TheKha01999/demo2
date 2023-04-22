import { useState } from "react";
import Box from "./Box";
import Tictactoe from "./Tictactoe";
function App1() {
  const [show, setShow] = useState(true);
  const handle_click = () => {
    alert("Chao e, a dung day tu chieu");
  };
  const [board, setBoard] = useState(["X", "X", "", "", "", "", "", "X", "X"]);
  const handle_play = (index) => {
    let newboard = [...board];
    newboard[index] = "X";
    setBoard("newboard");
  };
  return (
    <div>
      {show ? <Box old={8} name={"Kha"} handle_click={handle_click} /> : ""}
      <button onClick={() => setShow(!show)}>Toggle Mount</button>
      <div className="game">
        {board.map((value, key) => {
          return (
            <Tictactoe
              value={board[key]}
              handle_play={handle_play}
              index={key}
            />
          );
        })}
      </div>
    </div>
  );
}
export default App1;
