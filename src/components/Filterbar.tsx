import styled from "styled-components";
import Select from "./Select";

const Filterbar = () => {
  return (
    <Wrapper>
      <Select defaultValue="SJ A">
        {["A", "B", "C", "D", "E", "F", "G", "H", "I"].map((alphabet) => {
          return <Select.Option key={alphabet} value={`SJ ${alphabet}`}>{`SJ ${alphabet}`}</Select.Option>;
        })}
      </Select>
      <Select defaultValue="A-1">
        {["1", "2", "3"].map((number) => {
          return <Select.Option key={number} value={`A ${number}`}>{`A ${number}`}</Select.Option>;
        })}
      </Select>
      <Divider />
      <Production>WL02Y018-RE2-001</Production>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 36px;
  gap: 12px;
`;

const Divider = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: "|";
    color: #e6e7e9;
  }
`;

const Production = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px 8px 16px;
  background-color: #f5f6f8;
  border: 1px solid #e6e7e9;
  border-radius: 10px;
  color: #3e3f41;
  font-size: 15px;
  font-weight: 600;
  line-height: 21px;
`;

export default Filterbar;
