import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");

  function handleClick(e) {
    setResult(result.concat(e.target.name));
  }

  function clear(e) {
    setResult("");
  }
  function backspace(e) {
    setResult((prev) => prev.slice(0, result.length - 1));
  }

  function calculate(e) {
    setResult(eval(result).toString());
  }

  return (
    <>
      <div className="container">
        <form>
          <input type="text" value={result} className="inp" />
        </form>
        <div className="keypad">
          <button onClick={clear} id="clear" className="btn other">
            AC
          </button>
          <button onClick={backspace} id="backspace" className="btn other">
            C
          </button>
          <button name="%" onClick={handleClick} className="btn other">
            %
          </button>
          <button name="/" onClick={handleClick} className="btn operation">
            &divide;
          </button>
          <button name="7" onClick={handleClick} className="btn num">
            7
          </button>
          <button name="8" onClick={handleClick} className="btn num">
            8
          </button>
          <button name="9" onClick={handleClick} className="btn num">
            9
          </button>
          <button name="*" onClick={handleClick} className="btn operation">
            &times;
          </button>
          <button name="4" onClick={handleClick} className="btn num">
            4
          </button>
          <button name="5" onClick={handleClick} className="btn num">
            5
          </button>
          <button name="6" onClick={handleClick} className="btn num">
            6
          </button>
          <button name="-" onClick={handleClick} className="btn operation">
            &ndash;
          </button>
          <button name="1" onClick={handleClick} className="btn num">
            1
          </button>
          <button name="2" onClick={handleClick} className="btn num">
            2
          </button>
          <button name="3" onClick={handleClick} className="btn num">
            3
          </button>
          <button name="+" onClick={handleClick} className="btn operation">
            +
          </button>
          <button name="0" onClick={handleClick} className="btn num" id="zero">
            0
          </button>
          <button name="." onClick={handleClick} className="btn num">
            .
          </button>
          <button onClick={calculate} className="btn operation">
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
