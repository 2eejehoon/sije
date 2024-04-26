import styled from "styled-components";

const OutlineBoard = () => {
  const target = 600;
  const output = 495;
  const difference = output - target;
  const prediction = output / target;

  return (
    <Wrapper>
      <FlexItem>
        <Label>Target</Label>
        <Amount>{`${target} pcs`}</Amount>
      </FlexItem>
      <FlexItem>
        <Label>Output</Label>
        <Amount>{`${output} pcs`}</Amount>
      </FlexItem>
      <FlexItem>
        <Label>Difference</Label>
        <Amount>{`${difference} pcs`}</Amount>
      </FlexItem>
      <FlexItem>
        <Label>Prediction</Label>
        <Amount>{`${Number(prediction.toFixed(2)) * 100 + 3} %`}</Amount>
      </FlexItem>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 24px;
`;

const FlexItem = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  border: 1px solid #5550ff1a;
  border-radius: 10px;
  background: linear-gradient(90deg, #5e77f6, #80e3e3);
  background-color: rgba(255, 255, 255, 0.1);
`;

const Label = styled.label`
  color: #565656;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
`;

const Amount = styled.span`
  color: #5550ff;
  font-weight: 700;
  font-size: 32px;
  line-height: 44.8px;
`;

export default OutlineBoard;
