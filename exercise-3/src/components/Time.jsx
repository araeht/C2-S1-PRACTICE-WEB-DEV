function Time() {
  const now = new Date();
  const time = now.toLocaleTimeString(); // Extracts only time

  return (
    <div>
      <h2>Current Time:</h2>
      <p>{time}</p>
    </div>
  );
}

export default Time;
