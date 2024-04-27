import styled from "styled-components";
import AnalysisCarousel from "./AnalysisCarousel";
import AnalysisOutline from "./AnalysisOutline";
import BestChart from "./BestChart";
import WorstChart from "./WorstChart";
import ClickListChart from "./ClickListChart";

const Analysis = () => {
  return (
    <Wrapper>
      <FlexRow>
        <AnalysisCarousel />
        <AnalysisOutline />
        <BestChart />
        <WorstChart />
      </FlexRow>
      <ClickListChart />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 24px;
  border: 1px solid #dedfdf;
  border-radius: 10px;
  background-color: #ffffff;
`;

const FlexRow = styled.div`
  height: 120px;
  display: flex;
  gap: 24px;
`;

export default Analysis;
