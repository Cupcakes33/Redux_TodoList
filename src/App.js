import "./App.css";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./Components/TodoTemplate/TodoTemplate";
import TodoHeader from "./Components/TodoHeader/TodoHeader";
import TodoList from "./Components/TodoList/TodoList";

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
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
      <TodoTemplate>
        <TodoHeader />
        <TodoList />
      </TodoTemplate>
    </>
  );
}

export default App;
