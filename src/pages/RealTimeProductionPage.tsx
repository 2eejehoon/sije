import styled from "styled-components";
import Filterbar from "../components/Filterbar";
import RealTimeProductionHeader from "../components/RealTimeProductionHeader";
import BaseLayout from "../layouts/BaseLayout";
import RealTimeOutline from "../components/RealTimeOutline";
import ProcessListChart from "../components/ProcessListChart";
import Analysis from "../components/Analysis";

const RealTimeProductionPage = () => {
  return (
    <BaseLayout>
      <RealTimeProductionHeader />
      <Wrapper>
        <Filterbar />
        <RealTimeOutline />
        <ProcessListChart />
        <Analysis />
      </Wrapper>
    </BaseLayout>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  overflow-y: scroll;
`;

export default RealTimeProductionPage;
