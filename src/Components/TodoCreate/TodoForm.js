import { useState } from "react";
import styled, { css } from "styled-components";
import { HiStar } from "react-icons/hi";
import { addTodo } from "../../Modules/store";
import { useDispatch } from "react-redux";

const TodoForm = () => {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState({
    title: "",
    contents: "",
    isImportent: false,
  });
  const checkboxHandler = () => {
    setTodo((prev) => {
      return { ...prev, isImportent: !prev.isImportent };
    });
  };
  const todoFormInputHandler = (event) => {
    const { name, value } = event.target;
    setTodo((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const todoFormSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(addTodo(todo));
    setTodo({
      title: "",
      contents: "",
      isImportent: false,
    });
  };

  return (
    <StyledForm onSubmit={todoFormSubmitHandler}>
      <StyledTitleWrapper>
        <h1>Todo Title</h1>
        <StarLabel htmlFor="importentCheck" isImportent={todo.isImportent}>
          <StarCheckbox
            type="checkbox"
            id="importentCheck"
            onChange={checkboxHandler}
          />
          <HiStar />
        </StarLabel>
      </StyledTitleWrapper>

      <StyledInput
        name="title"
        type="text"
        maxLength={20}
        value={todo?.title}
        onChange={todoFormInputHandler}
      />
      <h1>Todo Contents</h1>
      <StyledTextarea
        name="contents"
        value={todo?.contents}
        onChange={todoFormInputHandler}
      />
      <StyledSubmitButton type="submit">Submit !</StyledSubmitButton>
    </StyledForm>
  );
};

export default TodoForm;

let StyledForm = styled.form`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  h1,
  span {
    color: #9a90a2;
    display: inline-block;
    margin-bottom: 10px;
  }
  input,
  textarea,
  button {
    border-radius: 15px;
    font-size: 1.2em;
    border: 0.2px solid #cbc0de;
    padding: 15px;
    color: #eac7cc;
  }
  input:focus,
  textarea:focus {
    outline: 2px solid #cbc0de;
  }
`;

let StyledInput = styled.input`
  width: 100%;
  height: 10%;
  margin-bottom: 20px;
`;

let StyledTextarea = styled.textarea`
  width: 100%;
  height: 70%;
  margin-bottom: 20px;
  resize: none;
  word-wrap: break-word;
  word-break: break-word;
  white-space: pre-wrap;
`;

let StyledSubmitButton = styled.button`
  height: 10%;
  background: white;
  border: none;
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    background: #eac7cc;
    color: #f6f6f6;
    border: none;
  }
`;

let StyledTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
let StarCheckbox = styled.input`
  display: none;
`;
let StarLabel = styled.label`
  font-size: 30px;
  color: #eac7cc;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
  ${(props) =>
    props.isImportent &&
    css`
      color: #e9c46a;
    `}
`;
