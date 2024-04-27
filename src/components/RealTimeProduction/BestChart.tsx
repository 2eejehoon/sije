import styled from "styled-components";
import processAnalysisObj from "../../../public/data/process-analysis.json";
import { PieChart, Pie, ResponsiveContainer, Sector } from "recharts";
import { useState } from "react";

const COLORS = ["#5550FF", "#DEDFDF"];

const data = Object.entries(processAnalysisObj.processAnalysis.best).map(([key, value], index) => {
  return { name: key, value: value, fill: COLORS[index] };
});

const total = Object.values(processAnalysisObj.processAnalysis.best).reduce((acc, cur) => acc + cur, 0);

const BestChart = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderActiveShape = (props: unknown) => {
    // @ts-expect-error: renderActiveShape (props: unknown) => JSX.ELEMENT
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload } = props;
    const value = ((payload.value / total) * 100).toFixed(0);

    return (
      <g>
        <text x={cx} y={cy} dy={5} textAnchor="middle" fill={fill} fontSize={13} fontWeight={700}>
          {`${value}%`}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
      </g>
    );
  };

  const handleMouseEnter = (_: unknown, index: number) => {
    setActiveIndex(index);
  };

  return (
    <Wrapper>
      <ResponsiveContainer width={"50%"} height={"100%"}>
        <PieChart>
          <Pie
            data={data}
            isAnimationActive={false}
            activeShape={renderActiveShape}
            dataKey="value"
            innerRadius={25}
            activeIndex={activeIndex}
            onMouseEnter={handleMouseEnter}
          />
        </PieChart>
      </ResponsiveContainer>
      <Legend>
        <Title>Best</Title>
        {data.map(({ name, value, fill }, index) => {
          return (
            <FlexRow key={index}>
              <LegenColor $bgColor={fill} />
              <LegendLabel>{name}</LegendLabel>
              <LegendValue>{value}</LegendValue>
            </FlexRow>
          );
        })}
      </Legend>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 2.5 1 0;
  display: flex;
  min-width: 260px;
  border: 1px solid #e6e7e9;
  border-radius: 8px;
`;

const Legend = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.h6`
  color: #5550ff;
  font-weight: 600;
  font-size: 15px;
  line-height: 21px;
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  color: #565656;
  font-size: 13px;
  font-weight: 400;
  line-height: 18.2px;
`;

const LegenColor = styled.div<{ $bgColor: string }>`
  width: 10px;
  height: 10px;
  background-color: ${({ $bgColor }) => $bgColor};
`;

const LegendLabel = styled.div``;

const LegendValue = styled.div``;

export default BestChart;
