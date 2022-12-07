import { useState } from "react";
import styled from "styled-components";

const TodoPanel = () => {
  const [createTodoSwitch, setCreateTodoSwitch] = useState({
    tranX: "100%",
    buttonText: "Post",
  });
  const todoSwitchHandler = () => {
    setCreateTodoSwitch((prev) => {
      return {
        tranX: prev.buttonText === "Post" ? "0" : "100%",
        buttonText: prev.buttonText === "Post" ? "Watch Todos" : "Post",
      };
    });
  };
  return (
    <StyledPanel transX={createTodoSwitch.tranX}>
      <h1>My TodoList</h1>
      <StyledButton onClick={todoSwitchHandler}>
        {createTodoSwitch.buttonText}
      </StyledButton>
    </StyledPanel>
  );
};

let StyledPanel = styled.div`
  z-index: 10;
  width: 400px;
  height: 100%;
  background: #eac7cc;
  color: white;
  position: absolute;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  transform: translateX(${(props) => props.transX});
`;

let StyledButton = styled.button`
  color: #eac7cc;
  background: #f6f6f6;
  border: 1px solid #eac7cc;
  padding: 10px 20px;
  margin-top: 50px;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    color: #f6f6f6;
    background: #cbc0de;
    border: 1px solid #f6f6f6;
  }
`;

export default TodoPanel;
