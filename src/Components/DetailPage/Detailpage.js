import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import DetailCard from "./DetailCard";

const DetailPage = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state);
  let { id } = useParams();
  let todo = data.find((todo) => todo.id === parseInt(id, 10));
  console.log(todo?.title, todo?.contents, todo?.isImportent, todo?.done);

  useEffect(() => {
    !todo && navigate("/");
  }, []);

  return (
    <>
      <GlobalStyle />
      <DetailCard
        id={id}
        title={todo?.title}
        contents={todo?.contents}
        isImportent={todo?.isImportent}
        done={todo?.done}
      />
    </>
  );
};
export default DetailPage;

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
