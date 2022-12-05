import styled from "styled-components";

const TodoHeader = () => {
  const today = new Date();
  const dateStringify = today.toLocaleDateString("ko", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayStringify = today.toLocaleDateString("ko", {
    weekday: "long",
  });

  return (
    <StyledHeader>
      <div>
        <h1>{dateStringify}</h1>
        <p>{dayStringify}</p>
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <span>Remaining Tasks is 5</span>
      </div>
    </StyledHeader>
  );
};

let StyledHeader = styled.div`
  width: 400px;
  height: 20%;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #9a90a2;
`;
export default TodoHeader;
