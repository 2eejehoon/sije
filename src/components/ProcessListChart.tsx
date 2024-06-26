import styled from "styled-components";
import processListObj from "../../public/data/process-list.json";
import { Bar, XAxis, YAxis, ResponsiveContainer, ComposedChart, Legend, Rectangle } from "recharts";
import { useState } from "react";

const data = processListObj.processList.map((process) => {
  return {
    ...process,
    expectOutput: process.expectOutput - process.output,
  };
});

const ProcessListChart = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleMouseEnter = (_: unknown, index: number) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(-1);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const customTick = ({ x, y, payload }: any) => {
    return (
      <text
        x={x}
        y={y}
        dy={16}
        textAnchor="middle"
        fill={activeIndex === payload.index ? "#3E3F41" : "#DEDFDF"}
        fontSize={14}
        fontWeight={400}
      >
        {payload.value.replace("process", "#")}
      </text>
    );
  };

  return (
    <Wrapper>
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <ComposedChart data={data} margin={{ top: 50 }}>
          <XAxis dataKey="processName" tick={customTick} />
          <YAxis label={{ value: "(pcs)", position: "top" }} tick={false} />
          <Legend wrapperStyle={{ top: 30 }} />
          <Bar
            isAnimationActive={false}
            stackId="id"
            dataKey="output"
            fill="#BDBFC2"
            barSize={14}
            activeIndex={activeIndex}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            activeBar={<Rectangle isAnimationActive={false} fill="#FF9B3F" />}
          />
          <Bar
            isAnimationActive={false}
            stackId="id"
            dataKey="expectOutput"
            fill="transparent"
            barSize={14}
            radius={[12, 12, 0, 0]}
            stroke="#5550FF"
            strokeDasharray="5 5"
            activeIndex={activeIndex}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            activeBar={<Rectangle isAnimationActive={false} fill="#5550FF" />}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  border: 1px solid #dedfdf;
  border-radius: 10px;
  background-color: #ffffff;
`;

export default ProcessListChart;
