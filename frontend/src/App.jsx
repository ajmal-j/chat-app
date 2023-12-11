import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/homePage/home";
import { Chat } from "./pages/chat/chat";
import { ChatProvider } from "./context/chatProvider.jsx";

function App() {
  return (
    <div className="App">
      <ChatProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chats" element={<Chat />} />
        </Routes>
      </ChatProvider>
    </div>
  );
}

export default App;
