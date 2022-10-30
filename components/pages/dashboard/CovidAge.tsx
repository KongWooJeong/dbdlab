import { useMemo } from "react";
import { ChartData, ChartOptions } from "chart.js";
import moment from "moment";

import ChartSection from "../../chart/ChartSection";
import StackedBarChart from "../../chart/StackedBarChart";

interface CovidGenAgeInfo {
  confCase: string;
  stateDt: string;
  gubun: string;
}

interface CovidAgeInfo {
  [key: string]: {
    [key: string]: string;
  };
}

interface Props {
  data: CovidGenAgeInfo[];
}

const options: ChartOptions<"bar"> = {
  indexAxis: "y" as const,
  plugins: {
    legend: {
      display: true,
      position: "bottom" as const,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
  maintainAspectRatio: false,
};

const ageGubunList = [
  "0-9",
  "10-19",
  "20-29",
  "30-39",
  "40-49",
  "50-59",
  "60-69",
  "70-79",
  "80 이상",
];

const colorInfo = {
  "0-9": "rgb(255, 99, 132)",
  "10-19": "rgb(75, 192, 192)",
  "20-29": "rgb(1, 99, 132)",
  "30-39": "rgb(53, 162, 235)",
  "40-49": "rgb(255, 99, 1)",
  "50-59": "rgb(255, 1, 132)",
  "60-69": "rgb(20, 50, 100)",
  "70-79": "rgb(255, 1, 1)",
  "80 이상": "rgb(100, 100, 100)",
};

function CovidAge({ data }: Props) {
  const barChartData = useMemo(() => {
    const covidAgeInfo: CovidAgeInfo = {};
    const barLabels = new Set<string>();

    data.forEach((item) => {
      if (item.gubun === "남성" || item.gubun === "여성") {
        return;
      }

      barLabels.add(item.stateDt);

      if (!covidAgeInfo[item.gubun]) {
        covidAgeInfo[item.gubun] = {
          [item.stateDt]: item.confCase,
        };

        return;
      }

      covidAgeInfo[item.gubun][item.stateDt] = item.confCase;
    });

    const barChartData: ChartData<"bar"> = {
      labels: [...barLabels]
        .reverse()
        .map((date) => moment(date).format("MM/DD")),
      datasets: ageGubunList.map((label) => {
        return {
          label,
          data: [...barLabels]
            .reverse()
            .map((item) => Number(covidAgeInfo[label][item])),
          backgroundColor: colorInfo[label as keyof typeof colorInfo],
        };
      }),
    };

    return barChartData;
  }, []);

  return (
    <ChartSection title="코로나 연령대 확진자 수">
      <StackedBarChart options={options} data={barChartData} />
    </ChartSection>
  );
}

export default CovidAge;
