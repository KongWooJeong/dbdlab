import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  options: ChartOptions<"bar">;
  data: ChartData<"bar">;
}

function StackedBarChart({ options, data }: Props) {
  return <Bar options={options} data={data} />;
}

export default StackedBarChart;
