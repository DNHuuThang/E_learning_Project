import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { renderRoutes } from "./routers";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>{renderRoutes()}</Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
