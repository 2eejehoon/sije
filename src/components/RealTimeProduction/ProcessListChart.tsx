import styled from "styled-components";
import processListObj from "../../../public/data/process-list.json";
import { Bar, XAxis, YAxis, ResponsiveContainer, ComposedChart, Legend } from "recharts";

const data = processListObj.processList.map((process) => {
  return {
    ...process,
    expectOutput: process.expectOutput - process.output,
  };
});

const ProcessListChart = () => {
  return (
    <Wrapper>
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <ComposedChart data={data} margin={{ top: 50 }}>
          <XAxis dataKey="processName" />
          <YAxis />
          <Legend wrapperStyle={{ top: 0 }} />
          <Bar isAnimationActive={false} stackId={"id"} dataKey="output" fill="#BDBFC2" barSize={14} />
          <Bar
            isAnimationActive={false}
            stackId={"id"}
            dataKey="expectOutput"
            fill="#5550FF"
            barSize={14}
            radius={[12, 12, 0, 0]}
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
`;

export default ProcessListChart;
