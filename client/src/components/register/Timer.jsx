import React from 'react';
import { useState, useEffect } from 'react';

const Timer = (props) => {
  const { initialSeconds = 60 } = props;
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div>
      {seconds === 0 ? null : <p> {seconds < 10 ? `0${seconds}` : seconds}</p>}
    </div>
  );
};

export default Timer;
