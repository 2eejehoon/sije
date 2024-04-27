import styled from "styled-components";
import clickListObj from "../../../public/data/click-list.json";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { formatTime, formatTimeWithSeconds } from "../../utils/formatTime";

const data = clickListObj.clickList.map((process) => {
  return {
    ...process,
    value: process.sewingTime + process.otherTime,
  };
});

const ClickListChart = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const customTick = ({ x, y, payload }: any) => {
    return (
      <text x={x} y={y} dy={16} textAnchor="middle" fill="#8C8F94">
        {formatTime(new Date(payload.value))}
      </text>
    );
  };

  return (
    <Wrapper>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 50,
          }}
        >
          <XAxis dataKey="createdAt" tick={customTick} />
          <YAxis tick={false} label={{ value: "(SMC)", position: "top" }} />
          <Tooltip content={<CustomTooltipContent />} />
          <Legend wrapperStyle={{ top: 30, left: 700 }} />
          <Line dataKey="value" stroke="#5550FF" />
        </LineChart>
      </ResponsiveContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 400px;
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltipContent = ({ active, payload, label }: any) => {
  if (active && payload) {
    const sewingTime = payload[0].payload.sewingTime;
    const otherTime = payload[0].payload.otherTime;

    return (
      <TooltipContentWrapper>
        <Time>{formatTimeWithSeconds(new Date(label))}</Time>
        <FlexRow>
          <Label $color="#5550FF" />
          <span>Sewing</span>
          <span>{sewingTime}</span>
        </FlexRow>
        <FlexRow>
          <Label $color="#BDBFC2" />
          <span>Other</span>
          <span>{otherTime}</span>
        </FlexRow>
      </TooltipContentWrapper>
    );
  }
};

const TooltipContentWrapper = styled.div`
  width: 200px;
  height: 100px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: #ffffff;
  border: 1px solid #8c8f94;
  border-radius: 8px;
  padding: 12px;
`;

const Time = styled.span`
  color: #3e3f41;
  font-size: 15px;
  font-weight: 400;
  line-height: 21px;
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  color: #3e3f41;
  font-weight: 400;
  font-size: 14px;
  line-height: 19.6px;
`;

const Label = styled.div<{ $color: string }>`
  width: 10px;
  height: 10px;
  background-color: ${({ $color }) => $color};
`;

export default ClickListChart;
