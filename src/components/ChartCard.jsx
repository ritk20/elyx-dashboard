import { Card, CardHeader, CardTitle, CardContent } from "./ui/Card";

const ChartCard = ({ title, children }) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="h-[300px] relative">{children}</div>
    </CardContent>
  </Card>
);

export default ChartCard;
