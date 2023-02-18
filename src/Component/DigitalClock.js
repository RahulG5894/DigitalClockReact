import React, { useEffect, useState } from "react";

export default function DigitalClock() {
  const [time, setTime] = useState(new Date());
  const updateTime = () => {
    setTime(new Date());
  };
  useEffect(() => {
    setTimeout(() => {
      updateTime();
    }, 1000);
  }, [time]);
  return <h1>{time.toLocaleTimeString()}</h1>;
}
