import styled from "styled-components";
import TodoForm from "./TodoForm";

const TodoCreate = () => {
  return (
    <StyledSection>
      <TodoForm />
    </StyledSection>
  );
};

export default TodoCreate;

let StyledSection = styled.section`
  width: 400px;
  height: 100%;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
`;
