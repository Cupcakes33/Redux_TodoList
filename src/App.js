import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./Routes/Main";
import Error from "./Routes/Error";
import Detail from "./Routes/Detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
