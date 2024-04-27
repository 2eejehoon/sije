import styled from "styled-components";
import Filterbar from "../components/Filterbar";
import RealTimeProductionHeader from "../components/RealTimeProductionHeader";
import BaseLayout from "../layouts/BaseLayout";
import OutlineBoard from "../components/OutlineBoard";
import ProcessListChart from "../components/ProcessListChart";
import Analysis from "../components/Analysis";

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
