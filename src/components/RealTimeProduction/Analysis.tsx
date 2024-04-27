import styled from "styled-components";
import AnalysisCarousel from "./AnalysisCarousel";
import AnalysisOutline from "./AnalysisOutline";
import BestChart from "./BestChart";
import WorstChart from "./WorstChart";

const Analysis = () => {
  return (
    <Wrapper>
      <FlexRow>
        <AnalysisCarousel />
        <AnalysisOutline />
        <BestChart />
        <WorstChart />
      </FlexRow>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 24px;
  border: 1px solid #dedfdf;
  border-radius: 10px;
`;

const FlexRow = styled.div`
  height: 120px;
  display: flex;
  gap: 24px;
`;

export default Analysis;
