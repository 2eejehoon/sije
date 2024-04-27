import styled from "styled-components";
import processAnalysisObj from "../../../public/data/process-analysis.json";

const data = processAnalysisObj.processAnalysis;

const AnalysisOutline = () => {
  return (
    <Wrapper>
      <Row>
        <Label>Output</Label>
        <DataContainer>
          <Number>{data.output}</Number>
          <Unit>pcs</Unit>
        </DataContainer>
      </Row>
      <Row>
        <Label>Efficiency</Label>
        <DataContainer>
          <Number>{(data.efficiency * 100).toFixed(1)}</Number>
          <Unit>%</Unit>
        </DataContainer>
      </Row>
      <Row>
        <Label>Loss</Label>
        <DataContainer>
          <Number>{data.loss}</Number>
          <Unit>%</Unit>
        </DataContainer>
      </Row>
      <Row>
        <Label>Productivity</Label>
        <DataContainer>
          <Number>{(data.productive * 100).toFixed(1)}</Number>
          <Unit>%</Unit>
        </DataContainer>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 180px;
  height: 100%;
  padding: 12px 16px 12px 16px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  border: 1px solid #e6e7e9;
  border-radius: 8px;
`;

const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #3e3f41;
  font-size: 13px;
  font-weight: 400;
  line-height: 18.2px;
`;

const Label = styled.label`
  color: #3e3f41;
  font-size: 13px;
  font-weight: 400;
  line-height: 18.2px;
`;

const DataContainer = styled.div`
  display: flex;
  gap: 2px;
`;

const Number = styled.span`
  color: #3e3f41;
  font-size: 13px;
  font-weight: 700;
  line-height: 18.2px;
`;

const Unit = styled.span`
  color: #3e3f41;
  font-size: 13px;
  font-weight: 400;
  line-height: 18.2px;
`;

export default AnalysisOutline;
