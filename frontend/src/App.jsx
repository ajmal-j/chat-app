import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/homePage/home";
import { Chat } from "./pages/chat/chat";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/chat" Component={Chat} />
      </Routes>
    </div>
  );
}

export default App;
