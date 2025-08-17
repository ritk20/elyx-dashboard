import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/Card";
import BarChart from "../components/charts/BarChart";
import PieChart from "../components/charts/PieChart";
import { decisions } from "../data";

const processInternalMetrics = () => {
  const specialistRoles = {
    "Dr Warren": "Medical",
    Advik: "Performance",
    Carla: "Nutrition",
    Rachel: "Performance",
    Neel: "Concierge",
    Ruby: "Concierge",
  };

  const monthlyEffort = {};
  const totalEffort = {};

  // Iterate through all decisions and their evidence to tally effort
  Object.values(decisions).forEach((decision) => {
    decision.evidence.forEach((message) => {
      const role = specialistRoles[message.sender];
      if (role) {
        // We only track effort for specialists, not the member
        const month = new Date(message.date).toLocaleString("default", {
          month: "long",
        });

        // Initialize data structures if they don't exist
        if (!monthlyEffort[month]) monthlyEffort[month] = {};
        if (!monthlyEffort[month][role]) monthlyEffort[month][role] = 0;
        if (!totalEffort[role]) totalEffort[role] = 0;

        // simple heuristic: 1 message = 1 unit of effort
        monthlyEffort[month][role] += 1;
        totalEffort[role] += 1;
      }
    });
  });

  const allMonths = Object.keys(monthlyEffort);
  const allRoles = Object.keys(totalEffort).sort();

  const roleColors = {
    Medical: "rgb(99, 102, 241)",
    Performance: "rgb(147, 51, 234)",
    Nutrition: "rgb(236, 72, 153)",
    Concierge: "rgb(249, 115, 22)",
  };

  // Bar Chart Data (Specialist Time Allocation)
  const specialistHoursData = {
    labels: allMonths,
    datasets: allRoles.map((role) => ({
      label: role,
      data: allMonths.map((month) => monthlyEffort[month][role] || 0),
      backgroundColor: roleColors[role] || "hsl(var(--muted))",
    })),
  };

  // Pie Chart Data (Overall Effort Distribution)
  const effortDistributionData = {
    labels: allRoles,
    datasets: [
      {
        label: "Effort Distribution",
        data: allRoles.map((role) => totalEffort[role]),
        backgroundColor: allRoles.map(
          (role) => roleColors[role] || "hsl(var(--muted))"
        ),
        borderColor: "hsl(var(--background))",
        borderWidth: 2,
      },
    ],
  };

  return { specialistHoursData, effortDistributionData };
};

const InternalMetrics = () => {
  // Process the data to generate metrics for visualization
  const { specialistHoursData, effortDistributionData } =
    processInternalMetrics();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in duration-500">
      <Card>
        <CardHeader>
          <CardTitle>Specialist Effort Allocation (by Month)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] relative">
            <BarChart
              data={specialistHoursData}
              options={{
                scales: { x: { stacked: true }, y: { stacked: true } },
              }}
            />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Overall Effort Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] relative">
            <PieChart data={effortDistributionData} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InternalMetrics;
