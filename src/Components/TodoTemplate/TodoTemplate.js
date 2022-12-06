import styled from "styled-components";
import TodoPanel from "./TodoPanel";

const TodoTemplate = ({ children }) => {
  return (
    <>
      <StyledTemplate>
        <TodoPanel />
        {children}
      </StyledTemplate>
    </>
  );
};

export default TodoTemplate;

let StyledTemplate = styled.div`
  width: 800px;
  height: 70vh;
  display: flex;
  background: white;
  border-radius: 15px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
`;
