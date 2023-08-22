import { useState, useEffect } from "react";

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    // Update the page title based on the current time
    const formattedTime = currentTime.toLocaleTimeString("en-US", {
      hour12: true,
    });
    document.title = `Bây giờ là ${formattedTime}`;
  }, [currentTime]);

  const formattedTimeString = currentTime.toLocaleTimeString("en-US", {
    hour12: true,
  });

  return (
    <div>
      <h1 className="text-center">{formattedTimeString}</h1>
    </div>
  );
}

export default App;
