import styled from "styled-components";
import { HiStar } from "react-icons/hi";

const DetailCard = ({ id, title, contents, isImportent, done }) => {
  return (
    <StyledTemplate>
      <StyledIdBox>{id}</StyledIdBox>
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

let StyledIdBox = styled.div`
  width: 100%;
  height: 20px;
  background: #cbc0de;
  color: #9a90a2;
  padding-left: 15px;
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
  cursor: pointer;
  transition: 0.2s;
`;
const StyledContentsBox = styled.div`
  width: 100%;
  height: 100%;
  background: #9a90a2;
  color: white;
  padding: 15px;
`;

export default DetailCard;
