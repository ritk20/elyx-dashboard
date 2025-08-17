import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ data, options }) => {
  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        stacked: options?.scales?.x?.stacked || false,
      },
      y: {
        stacked: options?.scales?.y?.stacked || false,
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={{ ...defaultOptions, ...options }} />;
};

export default BarChart;
