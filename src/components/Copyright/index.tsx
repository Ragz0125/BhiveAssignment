import styled from "styled-components";

const Copyright = () => {
  return <Container>© Copyright 2024. Bhive Private Limited</Container>;
};

export default Copyright;

const Container = styled.div`
  width: 100%;
  height: 45px;
  background: #222e34;

  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

  font-size: 14px;
`;
