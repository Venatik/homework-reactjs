import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const [incrementInput, setIncrementInput] = useState<number | null>(null);
  const [decrementInput, setDecrementInput] = useState<number | null>(null);
  const [error, setError] = useState<string>("");
  const [validInput, setValidInput] = useState<boolean>(true);

  const handleIncrement = () => {
    if (isNaN(Number(incrementInput))) {
      setError("The input must be a number!");
    } else {
      setCount(count + (incrementInput ?? 1));
      setError("");
    }
  };

  const handleDecrement = () => {
    if (isNaN(Number(decrementInput))) {
      setError("The input must be a number!");
    } else {
      setCount(count - (decrementInput ?? 1));
      setError("");
    }
  };

  return (
    <section>
      <div>
        <h2>Counter</h2>
        <button onClick={handleIncrement} disabled={!validInput}>
          Increment by:
        </button>
        <input
          type="text"
          placeholder="Enter a number"
          value={incrementInput ?? ""}
          onChange={event => {
            const value = Number(
              event.target.value ? Number(event.target.value) : null
            );
            setIncrementInput(value);
            if (value === null || !isNaN(value)) {
              setValidInput(true);
              setError("");
            } else {
              setValidInput(false);
              setError("The input must be a number!");
            }
          }}
        />
        <br />
        <br />
        <button onClick={handleDecrement} disabled={!validInput}>
          Decrement by:
        </button>
        <input
          type="text"
          placeholder="Enter a number"
          value={decrementInput ?? ""}
          onChange={event => {
            const value = event.target.value
              ? Number(event.target.value)
              : null;
            setDecrementInput(value);
            if (value === null || !isNaN(value)) {
              setValidInput(true);
              setError("");
            } else {
              setValidInput(false);
              setError("The input must be a number!");
            }
          }}
        />
        <br />
        {error && (
          <div
            style={{
              backgroundColor: "red",
              width: "400px",
              height: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: "25px",
            }}
          >
            {error}
          </div>
        )}
        <p style={{ fontWeight: "bold", fontSize: "25px" }}>
          The current count is: {count}
        </p>
        <hr />
      </div>
    </section>
  );
};

export default Counter;
