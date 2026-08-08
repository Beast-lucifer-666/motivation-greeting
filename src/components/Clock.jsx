import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours();

  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  const formattedDate = time.toLocaleDateString([], {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  let dayPhase = "NIGHT";

  if (hours >= 5 && hours < 12) {
    dayPhase = "MORNING";
  } else if (hours >= 12 && hours < 17) {
    dayPhase = "AFTERNOON";
  } else if (hours >= 17 && hours < 21) {
    dayPhase = "EVENING";
  }

  return (
    <div className="clock-component">

      <div className="card-top">

        <div>
          <span className="card-label">
            LOCAL TIME
          </span>

          <span className="card-status">
            ● LIVE
          </span>
        </div>

        <span className="phase">
          {dayPhase}
        </span>

      </div>

      <div className="clock-time">
        {formattedTime}
      </div>

      <div className="clock-date">
        {formattedDate}
      </div>

      <div className="clock-progress">
        <div className="progress-track">
          <div className="progress-fill"></div>
        </div>
      </div>

    </div>
  );
}

export default Clock;