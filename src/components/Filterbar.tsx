import styled from "styled-components";

const Filterbar = () => {
  return (
    <Wrapper>
      <Select>
        <option>SJ A</option>
      </Select>
      <Select>
        <option>A-1</option>
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

const Select = styled.select`
  position: relative;
  padding: 8px 12px 8px 12px;
  border: 1px solid #dedfdf;
  border-radius: 10px;
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
