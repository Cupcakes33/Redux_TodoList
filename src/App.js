import "./App.css";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./Components/TodoTemplate/TodoTemplate";
import TodoHeader from "./Components/TodoHeader/TodoHeader";

const GlobalStyle = createGlobalStyle`
  body {
    background: #8e9aaf;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate />
      <TodoHeader />
    </>
  );
}

export default App;
