import { useMemo } from "react";
import { ChartData, ChartOptions } from "chart.js";
import moment from "moment";

import ChartSection from "../../chart/ChartSection";
import LineChart from "../../chart/LineChart";

interface CovidDayInfo {
  decideCnt: string;
  stateDt: string;
  stateTime: string;
}

interface Props {
  data: CovidDayInfo[];
}

const options: ChartOptions<"line"> = {
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  maintainAspectRatio: false,
};

function CovidDaily({ data }: Props) {
  const lineChartData = useMemo(() => {
    const lineLabels = data.map((item) => moment(item.stateDt).format("MM/DD"));

    const lineChartdata: ChartData<"line"> = {
      labels: lineLabels.reverse(),
      datasets: [
        {
          label: "daily covid",
          data: data.map((item) => Number(item.decideCnt)),
          borderColor: "#3F3B6C",
          backgroundColor: "#624F82",
        },
      ],
    };

    return lineChartdata;
  }, []);

  return (
    <ChartSection title="코로나 일자별 확진자 수">
      <LineChart options={options} data={lineChartData} />
    </ChartSection>
  );
}

export default CovidDaily;
