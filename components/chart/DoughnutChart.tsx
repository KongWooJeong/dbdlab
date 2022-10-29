import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  options: ChartOptions<"doughnut">;
  data: ChartData<"doughnut">;
}

function DoughnutChart({ options, data }: Props) {
  return <Doughnut options={options} data={data} />;
}

export default DoughnutChart;
