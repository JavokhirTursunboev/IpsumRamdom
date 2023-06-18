import { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(1);
  return (
    <section className="section-center">
      <h4>tired of boring lorem ipusm?</h4>
      <form className="lorem-from">
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          max="8"
          step="1"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn">Generate</button>
      </form>
    </section>
  );
}

export default App;
