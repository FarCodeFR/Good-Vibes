import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import "./style/globals.css";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
