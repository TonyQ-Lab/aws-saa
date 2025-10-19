import { useState } from "react";

function App() {
  const [message, setMessage] = useState("Click the button to fetch data");

  const fetchMessage = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/message`);
      const data = await res.json();
      setMessage(data.message);
    } catch (err) {
      setMessage("Error fetching message: " + err.message);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Frontend (React)</h1>
      <button onClick={fetchMessage}>Fetch from Backend</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
