import styled from "styled-components";
import Header from "../common/Header/Header";

const RealTimeProductionHeader = () => {
  return (
    <Header>
      <Title>Real-Time Production</Title>
    </Header>
  );
};

const Title = styled.h4`
  padding: 16px 24px 16px 24px;
  color: #2e2e2e;
  font-size: 22px;
  font-weight: 700;
  line-height: 30.8px;
`;

export default RealTimeProductionHeader;
