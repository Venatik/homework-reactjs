import { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const resetTimer = () => {
    setTime(1);
  };

  return (
    <div>
      <button onClick={resetTimer}>Reset</button>
      <h2>Timer: {time}</h2>
    </div>
  );
};

export default Timer;
