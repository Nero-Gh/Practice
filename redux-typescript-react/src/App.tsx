import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserPage from "./features/users/users";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <UserPage />
      </div>
    </>
  );
}

export default App;
