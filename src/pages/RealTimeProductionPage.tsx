import styled from "styled-components";
import Filterbar from "../components/RealTimeProduction/Filterbar";
import RealTimeProductionHeader from "../components/RealTimeProduction/RealTimeProductionHeader";
import BaseLayout from "../layouts/BaseLayout";
import OutlineBoard from "../components/RealTimeProduction/OutlineBoard";
import ProcessListChart from "../components/RealTimeProduction/ProcessListChart";
import Analysis from "../components/RealTimeProduction/Analysis";

const RealTimeProductionPage = () => {
  return (
    <BaseLayout>
      <RealTimeProductionHeader />
      <Wrapper>
        <Filterbar />
        <OutlineBoard />
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
