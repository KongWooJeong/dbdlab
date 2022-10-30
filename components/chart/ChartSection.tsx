import { ReactNode } from "react";
import styled from "@emotion/styled";

interface Props {
  title: string;
  children: ReactNode;
}

function ChartSection({ title, children }: Props) {
  return (
    <ChartSectionWrapper>
      <div className="title-container">{title}</div>
      <div className="chart-container">{children}</div>
    </ChartSectionWrapper>
  );
}

const ChartSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-left: 1px solid lightgray;
  border-right: 1px solid lightgray;

  .title-container {
    display: flex;
    align-items: center;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    padding: 10px;
  }

  .chart-container {
    display: flex;
    height: 100%;
    padding: 50px 100px;
  }
`;

export default ChartSection;
