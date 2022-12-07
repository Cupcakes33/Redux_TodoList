import { useSelector } from "react-redux";
import styled from "styled-components";
import TodoItems from "./TodoItems";

const TodoList = () => {
  const todos = useSelector((state) => state);

  return (
    <StyledSection>
      {todos.length === 0 ? (
        <NoData>아직 해야 할 일이 없어요 !</NoData>
      ) : (
        todos.map((todo) => {
          const { id, title, contents, done, isImportent } = todo;
          return (
            <TodoItems
              key={id}
              id={id}
              contents={contents}
              title={title}
              done={done}
              importent={isImportent}
            />
          );
        })
      )}
    </StyledSection>
  );
};

let StyledSection = styled.section`
  width: 400px;
  height: 80%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

let NoData = styled.div`
  width: 100%;
  height: 100%;
  color: #9a90a2;
  padding: 20px 0px;
`;
export default TodoList;
