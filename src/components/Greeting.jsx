import { useEffect, useState } from "react";

function Greeting() {
  const [hour, setHour] = useState(
    new Date().getHours()
  );

  useEffect(() => {
    const updateHour = () => {
      setHour(new Date().getHours());
    };

    const interval = setInterval(updateHour, 60000);

    return () => clearInterval(interval);
  }, []);

  let greeting = "Good evening";
  let emoji = "🌙";

  if (hour >= 5 && hour < 12) {
    greeting = "Good morning";
    emoji = "☀️";
  } else if (hour >= 12 && hour < 17) {
    greeting = "Good afternoon";
    emoji = "🌤️";
  } else if (hour >= 17 && hour < 21) {
    greeting = "Good evening";
    emoji = "🌆";
  }

  return (
    <div className="greeting">

      <div className="greeting-small">
        {emoji} {greeting}
      </div>

      <h2>
        Make today
        <br />
        <span>count.</span>
      </h2>

    </div>
  );
}

export default Greeting;