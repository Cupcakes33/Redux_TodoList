import styled from "styled-components";
import TodoItems from "./TodoItems";

const TodoList = () => {
  return (
    <StyledSection>
      <TodoItems text="1st commit" done={true} importent={true}/>
      <TodoItems text="2nd commit" done={false} />
    </StyledSection>
  );
};

export default TodoList;
let StyledSection = styled.section`
  width: 400px;
  height: 20%;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
