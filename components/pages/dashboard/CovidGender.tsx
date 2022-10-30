import { useState, useMemo, ChangeEvent } from "react";
import { ChartData, ChartOptions } from "chart.js";
import styled from "@emotion/styled";
import moment from "moment";

import ChartSection from "../../chart/ChartSection";
import DoughnutChart from "../../chart/DoughnutChart";
import SelectBox from "../../common/SelectBox";

interface CovidGenAgeInfo {
  confCase: string;
  stateDt: string;
  gubun: string;
}

interface Props {
  data: CovidGenAgeInfo[];
}

interface DoughnutDailyData {
  [key: string]: ChartData<"doughnut">;
}

interface CovidDailyGenderRatioInfo {
  [key: string]: number[];
}

const options: ChartOptions<"doughnut"> = {
  plugins: {
    legend: {
      display: true,
      position: "bottom" as const,
    },
    title: {
      display: false,
    },
  },
  maintainAspectRatio: false,
};

function CovidGender({ data }: Props) {
  const [selectedDate, setSelectedDate] = useState<string>("");

  const { doughnutLabels, doughnutDailyData } = useMemo(() => {
    const covidDailyGenderRatioInfo: CovidDailyGenderRatioInfo = {};
    const doughnutLabels = new Set<string>();

    data.forEach((item) => {
      if (item.gubun === "남성" || item.gubun === "여성") {
        const formmatedDate = moment(item.stateDt).format("MM/DD");

        doughnutLabels.add(formmatedDate);

        if (!covidDailyGenderRatioInfo[formmatedDate]) {
          covidDailyGenderRatioInfo[formmatedDate] = [0, 0];
        }

        if (item.gubun === "남성") {
          covidDailyGenderRatioInfo[formmatedDate][0]++;
        }

        if (item.gubun === "여성") {
          covidDailyGenderRatioInfo[formmatedDate][1]++;
        }
      }
    });

    const doughnutDailyData: DoughnutDailyData = {};

    [...doughnutLabels].forEach((item) => {
      doughnutDailyData[item] = {
        labels: ["남성", "여성"],
        datasets: [
          {
            label: "gender ratio",
            data: covidDailyGenderRatioInfo[item],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
            ],
            borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
            borderWidth: 1,
          },
        ],
      };
    });

    return { doughnutLabels: [...doughnutLabels].reverse(), doughnutDailyData };
  }, []);

  function handleDateSelect(event: ChangeEvent<HTMLSelectElement>) {
    setSelectedDate(event.target.value);
  }

  return (
    <ChartSection title="코로나 성별 확진자 수">
      <Wrapper>
        <div className="select-section">
          <SelectBox
            itemList={doughnutLabels}
            onChange={handleDateSelect}
            selectedItem={selectedDate}
          />
        </div>
        <div className="chart-section">
          <DoughnutChart
            options={options}
            data={
              selectedDate === ""
                ? doughnutDailyData[doughnutLabels[0]]
                : doughnutDailyData[selectedDate]
            }
          />
        </div>
      </Wrapper>
    </ChartSection>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .select-section {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }

  .chart-section {
    display: flex;
    width: 100%;
    height: 100%;
  }
`;

export default CovidGender;
