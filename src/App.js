import './App.css';

function App() {

    const useLadder = () => {
      document.getElementById("Left2").checked = false;
      document.getElementById("MidLeft2").checked = false;
      document.getElementById("MidLeft3").checked = true;
    }

    const uncheckRight1 = () => {
      document.getElementById("Right1").checked = false;
    }

    const uncheckLeft2 = () => {
      document.getElementById("Left2").checked = false;
    }

    const uncheckFirstRow = () => {
      document.getElementById("Right1").checked = false;
      document.getElementById("MidRight1").checked = false;
      document.getElementById("MidLeft1").checked = false;
      document.getElementById("Left1").checked = false;
    }

    const uncheckSecondRow = () => {
      document.getElementById("Right2").checked = false;
      document.getElementById("MidRight2").checked = false;
      document.getElementById("MidLeft2").checked = false;
      document.getElementById("Left2").checked = false;
    }

    const uncheckThirdRow = () => {
      document.getElementById("Right3").checked = false;
      document.getElementById("MidRight3").checked = false;
      document.getElementById("MidLeft3").checked = false;
      document.getElementById("Left3").checked = false;
    }

    const uncheckFourthRow = () => {
      document.getElementById("Right4").checked = false;
      document.getElementById("MidRight4").checked = false;
      document.getElementById("MidLeft4").checked = false;
      document.getElementById("Left4").checked = false;
    }

  return (
    <div className="App">
      <header className="App-header">

{/* first row from the bottom */}
        <div className="radioRow4">

          <input type="radio" id="Left4" name="Row4" value="Left4"></input>
          <label for="Left4">Left4</label>

          <input type="radio" id="MidLeft4" name="Row4" value="MidLeft4"></input>
          <label for="MidLeft4">MidLeft4</label>

          <input type="radio" id="MidRight4" name="Row4" value="MidRight4"></input>
          <label for="MidRight4">MidRight4</label>

          <input type="radio" id="Right4" name="Row4" value="Right4"></input>
          <label for="Right4">Right4</label>
        </div>

{/* second row from the bottom */}
        <div className="radioRow3">
          <input type="radio" id="Left3" name="Row3" value="Left3"></input>
          <label for="Left3">Left3</label>

          <input type="radio" id="MidLeft3" name="Row3" value="MidLeft3"></input>
          <label for="MidLeft3">MidLeft3</label>

          <input type="radio" id="MidRight3" name="Row3" value="MidRight3"></input>
          <label for="MidRight3">MidRight3</label>

          <input type="radio" id="Right3" name="Row3" value="Right3"></input>
          <label for="Right3">Right3</label>
        </div>


{/* third row from the bottom */}
        <div className="radioRow2">


          {/* Button, looks like a door */}
          <button onClick={uncheckLeft2}></button>

          <input type="radio" id="Left2" name="Row2" value="Left2"></input>
          <label for="Left2">Left2</label>

          {/* Button, looks like a ladder */}
          <button2 onClick={useLadder}></button2>

          <input type="radio" id="MidLeft2" name="Row2" value="MidLeft2"></input>
          <label for="MidLeft2">MidLeft2</label>

          <input type="radio" id="MidRight2" name="Row2" value="MidRight2"></input>
          <label for="MidRight2">MidRight2</label>

          <input type="radio" onClick={uncheckFirstRow} id="Right2" name="Row2" value="Right2"></input>
          <label for="Right2">Right2</label>
        </div>


{/* fourth row from the bottom */}
        <div className="radioRow1">
          <input type="radio" id="Left1" name="Row1" value="Left1"></input>
          <label for="Left1">Left1</label>

          <input type="radio" id="MidLeft1" name="Row1" value="MidLeft1"></input>
          <label for="MidLeft1">MidLeft1</label>

          <input type="radio" id="MidRight1" name="Row1" value="MidRight1"></input>
          <label for="MidRight1">MidRight1</label>

          <input type="radio" id="Right1" name="Row1" value="Right1"></input>
          <label for="Right1">Right1</label>

{/* Button, looks like a door */}
          <button onClick={uncheckRight1}></button>
        </div>


      </header>
    </div>
  );
}

export default App;
