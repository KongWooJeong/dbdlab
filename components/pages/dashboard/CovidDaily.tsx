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

const options = {
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
  const lineLabels = data.map((item) => moment(item.stateDt).format("MM/DD"));

  const lineChartdata = {
    labels: lineLabels.reverse(),
    datasets: [
      {
        label: "daily covid",
        data: data.map((item) => Number(item.decideCnt)),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <ChartSection title="코로나 일자별 확진자 수">
      <LineChart options={options} data={lineChartdata} />
    </ChartSection>
  );
}

export default CovidDaily;
