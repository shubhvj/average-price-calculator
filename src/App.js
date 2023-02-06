import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Stock Price Average Calculator</h2>
      </header>
      <Calculator />
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <p>
        made by <a href="https://shubhjohri.netlify.app/">Shubh</a>
      </p>
      <p><a href="https://superchat-shubh-johri.netlify.app/">chat app</a></p>
      <p><a href="https://devtechdaily.wordpress.com/">BLOG</a></p>
      <p><a href="https://appointmentapp-shubh.netlify.app/">Appointment App</a></p>
      <p><a href="https://github.com/shubhvj/">Github</a></p>
    </div>
  );
}

function Result(props) {
  if (props.showResult) {
    return (
      <div className="result">
        Your average price for {props.newAverageQuantity} shares is {props.newAverage}.
      </div>
    );
  }
}

function Calculator() {
  const [currentQuantity, setCurrentQuantity] = useState("");
  const [currentAveragePrice, setCurrentAveragePrice] = useState("");
  const [newQuantity, setNewQuantity] = useState("");
  const [newPrice, setnewPrice] = useState("");
  const [newAverage, setNewAverage] = useState(0);
  const [newAverageQuantity, setNewAverageQuantity] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const reset = () => {
    setCurrentQuantity("");
    setCurrentAveragePrice("");
    setNewQuantity("");
    setnewPrice("");
    setShowResult(false);
  };

  const calculate = () => {
    if (
      currentQuantity <= 0 ||
      currentQuantity > Number.MAX_VALUE ||
      currentAveragePrice <= 0 ||
      currentAveragePrice > Number.MAX_VALUE ||
      newQuantity <= 0 ||
      newQuantity > Number.MAX_VALUE ||
      newPrice <= 0 ||
      newPrice > Number.MAX_VALUE
    ) {
      alert("Value is just unreal.");
    } else {
      const newTotal = currentQuantity + newQuantity;
      setNewAverageQuantity(parseInt(newTotal));
      const newAvg =
        Math.round(
          ((currentAveragePrice * currentQuantity + newPrice * newQuantity) /
          newTotal) *
          100
        ) / 100;
      setNewAverage(newAvg);
      setShowResult(true);
    }
  };

  return (
      <section className="section">
        <div className="section1">
          <div className="inputfield">
            <label className="label">Current Quantity</label>
            <input
              type="number"
              value={currentQuantity}
              name="currentQuantity"
              placeholder="Current Quantity"
              id="currentQuantity"
              onClick={() =>
                currentQuantity === "" ? setCurrentQuantity("") : false
              }
              onChange={(e) => setCurrentQuantity(parseFloat(e.target.value))}
            />
          </div>
          <div className="inputfield">
            <label className="label">Current Average Price</label>
            <input
              type="number"
              value={currentAveragePrice}
              name="currentAveragePrice"
              placeholder="Current Average Price"
              id="currentAveragePrice"
              onClick={() =>
                currentAveragePrice === "" ? setCurrentAveragePrice("") : false
              }
              onChange={(e) =>
                setCurrentAveragePrice(parseFloat(e.target.value))
              }
            />
          </div>
        </div>
        <div className="section2">
          <div className="inputfield">
            <label className="label">New Quantity</label>
            <input
              type="number"
              value={newQuantity}
              name="newQuantity"
              placeholder="New Quantity"
              id="newQuantity"
              onClick={() => (newQuantity === "" ? setNewQuantity("") : false)}
              onChange={(e) => setNewQuantity(parseFloat(e.target.value))}
            />
          </div>
          <div className="inputfield">
            <label className="label">New Price</label>
            <input
              type="number"
              value={newPrice}
              name="newPrice"
              placeholder="New Price"
              id="newPrice"
              onClick={() => (newPrice === "" ? setnewPrice("") : false)}
              onChange={(e) => setnewPrice(parseFloat(e.target.value))}
            />
          </div>
        </div>

        <br />
        <div className="buttondiv">
          <button onClick={calculate}>Calculate</button>
          <button onClick={reset}>Reset</button>
        </div>

        <Result newAverageQuantity={newAverageQuantity} newAverage={newAverage} showResult={showResult} />
      </section>
  );
}

export default App;
