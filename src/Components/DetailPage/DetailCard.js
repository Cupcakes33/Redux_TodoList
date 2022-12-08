import styled from "styled-components";
import { HiStar } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const DetailCard = ({ id, title, contents, isImportent, done }) => {
  const navigate = useNavigate();
  return (
    <StyledTemplate>
      <StyledIdBox>
        {id}
        <StyledBackButton
          onClick={() => {
            navigate("/");
          }}
        />
      </StyledIdBox>
      <StyledTitleBox>
        {title}
        <ImportentStar>{isImportent ? <HiStar /> : null}</ImportentStar>
      </StyledTitleBox>

      <StyledContentsBox>{contents}</StyledContentsBox>
      <div>{done}</div>
    </StyledTemplate>
  );
};

let StyledTemplate = styled.div`
  width: 400px;
  height: 70vh;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 15px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
`;
let StyledBackButton = styled.button`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: none;
  background: #ff7b89;
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    transform: scale(0.9);
  }
`;

let StyledIdBox = styled.div`
  width: 100%;
  height: 20px;
  background: #cbc0de;
  color: #9a90a2;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

let StyledTitleBox = styled.div`
  width: 100%;
  height: 50px;
  background: #eac7cc;
  font-size: 2rem;
  color: #9a90a2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 15px;
`;

const ImportentStar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e9c46a;
  font-size: 3rem;
`;
const StyledContentsBox = styled.div`
  width: 100%;
  height: 100%;
  background: #9a90a2;
  color: white;
  padding: 15px;
`;

export default DetailCard;
