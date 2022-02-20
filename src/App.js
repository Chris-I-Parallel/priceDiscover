import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [price, setPrice] = useState(100);
  const [noCount, setNoCount] = useState(0);
  const [yesCount, setYesCount] = useState(0);
  const [player, setPlayer] = useState(0);
  const exponent = 5;

  useEffect(() => {
    if (yesCount > noCount) {
      setPrice(price * ((yesCount / (yesCount + noCount)) * exponent));
    }

    if (noCount > yesCount) {
      if (yesCount === 0) {
        setPrice(price * 0.1);
      } else {
        setPrice(price * (1 - noCount / (yesCount + noCount)));
      }
    }
  }, [yesCount, noCount]);

  const increase = () => {
    setYesCount(yesCount + 1);

    setPlayer(player + 1);
  };

  const decrease = () => {
    setNoCount(noCount + 1);
    // calcNewPrice(yesCount, noCount);
    setPlayer(player + 1);
  };
  const reset = () => {
    setNoCount(0);
    setYesCount(0);
    setPlayer(0);
    setPrice(0);
  };

  return (
    <div className="App">
      <b>Enter Initial Price: </b>
      <input onChange={(e) => setPrice(e.target.value)}></input>
      <br />
      <br />
      <div>Price:{price} </div>
      <br />
      <div>
        <br />
        <b> No Count:</b>
        {noCount} <b>Yes Count: </b>
        {yesCount}
      </div>
      <br />
      <b>Player {player} </b>
      <div>Do you think it is lower or higher? </div>
      <br />
      <button style={{ width: "100px" }} onClick={increase}>
        +
      </button>
      <br />
      <br />
      <button style={{ width: "100px" }} onClick={decrease}>
        -
      </button>
      <br />
      <br />
      <button style={{ width: "100px" }} onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default App;
