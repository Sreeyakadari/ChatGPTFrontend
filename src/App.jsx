import "./App.css";
import Sidebar from "./Sidebar.jsx";
import ChatWindow from "./ChatWindow.jsx";
import { MyContextProvider } from "./MyContext.jsx";

function App() {
  return (
    <div className="app">
      <MyContextProvider>
        <Sidebar />
        <ChatWindow />
      </MyContextProvider>
    </div>
  );
}

export default App;
