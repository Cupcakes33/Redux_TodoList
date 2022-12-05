import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";
import { HiStar } from "react-icons/hi";

const TodoItems = ({ id, done, text, importent }) => {
  return (
    <TodoItem>
      <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>

      <TodoTitle done={done}>{text}</TodoTitle>
      <ImportentStar importent={importent}>
        {importent ? <HiStar /> : null}
      </ImportentStar>
      <TodoDeleteButton>
        <MdDelete />
      </TodoDeleteButton>
    </TodoItem>
  );
};

export default TodoItems;

const TodoDeleteButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  display: initial;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

const TodoItem = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;
const ImportentStar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e9c46a;
  font-size: 24px;
  display: initial;
`;
const CheckCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid #ced4da;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 2px solid #eac7cc;
      color: #eac7cc;
    `}
`;

const TodoTitle = styled.div`
  flex: 1;
  font-size: 20px;
  color: #495057;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;
