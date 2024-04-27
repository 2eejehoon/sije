import styled from "styled-components";
import _Output from "../assets/svg/output.svg?react";
import _Efficiency from "../assets/svg/efficiency.svg?react";
import _Loss from "../assets/svg/loss.svg?react";
import _Productivity from "../assets/svg/productivity.svg?react";
import processAnalysisObj from "../../public/data/process-analysis.json";

const data = processAnalysisObj.processAnalysis;

const AnalysisOutline = () => {
  return (
    <Wrapper>
      <FlexRow>
        <Label>
          <Output />
          <span>Output</span>
        </Label>
        <DataContainer>
          <Number>{data.output}</Number>
          <Unit>pcs</Unit>
        </DataContainer>
      </FlexRow>
      <FlexRow>
        <Label>
          <Efficiency />
          <span>Efficiency</span>
        </Label>
        <DataContainer>
          <Number>{(data.efficiency * 100).toFixed(1)}</Number>
          <Unit>%</Unit>
        </DataContainer>
      </FlexRow>
      <FlexRow>
        <Label>
          <Loss />
          <span>Loss</span>
        </Label>
        <DataContainer>
          <Number>{data.loss}</Number>
          <Unit>%</Unit>
        </DataContainer>
      </FlexRow>
      <FlexRow>
        <Label>
          <Productivity />
          <span>Productivity</span>
        </Label>
        <DataContainer>
          <Number>{(data.productive * 100).toFixed(1)}</Number>
          <Unit>%</Unit>
        </DataContainer>
      </FlexRow>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1.5 1 0;
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

const FlexRow = styled.div`
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

const Output = styled(_Output)`
  width: 20px;
  height: 20px;
  fill: #8c8f94;
`;

const Efficiency = styled(_Efficiency)`
  width: 20px;
  height: 20px;
  fill: #8c8f94;
`;

const Loss = styled(_Loss)`
  width: 20px;
  height: 20px;
  fill: #8c8f94;
`;

const Productivity = styled(_Productivity)`
  width: 20px;
  height: 20px;
  fill: #8c8f94;
`;

const Label = styled.label`
  color: #3e3f41;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 4px;
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
