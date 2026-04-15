import { useState } from "react";

function App() {
  const [mensaje, setMensaje] = useState("");

  const dev = async () => {
    const res = await fetch("https://v1viqj0oma.execute-api.us-east-1.amazonaws.com/dev/dev");
    const data = await res.text();
    setMensaje(data);
  };

  const prod = async () => {
    const res = await fetch("https://v1viqj0oma.execute-api.us-east-1.amazonaws.com/prod/prod");
    const data = await res.text();
    setMensaje(data);
  };

  return (
    <div>
      <h1>API AWS</h1>
      <button onClick={dev}>DEV</button>
      <button onClick={prod}>PROD</button>
      <h2>{mensaje}</h2>
    </div>
  );
}

export default App;