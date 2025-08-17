import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/Card";
import LineChart from "../components/charts/LineChart";
import BarChart from "../components/charts/BarChart";

const healthMetrics = {
  hrv: {
    labels: ["July 14", "July 21", "July 28", "Aug 4"],
    data: [45, 48, 46, 52],
    annotations: [{ x: "July 28", label: "UK Trip HRV Dip" }],
  },
  sleepLatency: {
    labels: ["Pre-Intervention", "Post-Intervention"],
    data: [28, 18],
  },
  vo2Max: {
    labels: ["Baseline (July)"],
    data: [42],
  },
  glucoseVariability: {
    labels: ["Aug 15-21", "Aug 22-28"],
    data: [25, 15],
  },
};

const HealthDashboard = () => {
  const hrvData = {
    labels: healthMetrics.hrv.labels,
    datasets: [
      {
        label: "Nightly HRV (ms)",
        data: healthMetrics.hrv.data,
        borderColor: "rgb(147, 51, 234)",
        backgroundColor: "rgba(200, 51, 234, 0.2)",
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const sleepData = {
    labels: healthMetrics.sleepLatency.labels,
    datasets: [
      {
        label: "Sleep Latency (minutes)",
        data: healthMetrics.sleepLatency.data,
        backgroundColor: "rgba(300, 51, 234, 0.6)",
      },
    ],
  };

  const vo2MaxData = {
    labels: healthMetrics.vo2Max.labels,
    datasets: [
      {
        label: "VO2 Max (mL/kg/min)",
        data: healthMetrics.vo2Max.data,
        backgroundColor: "rgba(250, 51, 234, 0.6)",
      },
    ],
  };

  const glucoseData = {
    labels: healthMetrics.glucoseVariability.labels,
    datasets: [
      {
        label: "Glycemic Variability (%)",
        data: healthMetrics.glucoseVariability.data,
        backgroundColor: "rgba(147, 51, 234, 0.6)",
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in duration-500">
      <Card>
        <CardHeader>
          <CardTitle>Heart Rate Variability (HRV) Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] relative">
            <LineChart data={hrvData} />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Sleep Latency Improvement</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] relative">
            <BarChart data={sleepData} />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>VO2 Max Baseline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] relative">
            <BarChart data={vo2MaxData} />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Glycemic Variability Reduction</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] relative">
            <BarChart data={glucoseData} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HealthDashboard;
