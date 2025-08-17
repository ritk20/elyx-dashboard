import { useState, useEffect } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import MemberJourney from "./views/MemberJourney";
import HealthDashboard from "./views/HealthDashboard";
import InternalMetrics from "./views/InternalMetrics";
import { memberData } from "./data";

function App() {
  const [activeView, setActiveView] = useState("journey");

  // Add keyframes for animations globally
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes fade-in-scale {
        from { opacity: 0; transform: scale(0.95); }
        to { opacity: 1; transform: scale(1); }
      }
      .animate-fade-in-scale {
        animation: fade-in-scale 0.3s ease-out forwards;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const renderView = () => {
    switch (activeView) {
      case "dashboard":
        return <HealthDashboard />;
      case "internal":
        return <InternalMetrics />;
      case "journey":
      default:
        return <MemberJourney />;
    }
  };

  return (
    <div className="bg-background min-h-screen font-sans text-foreground">
      <div className="container mx-auto p-2 sm:p-4 lg:p-6">
        <Header name={memberData.name} goal={memberData.goal} />
        <Navigation activeView={activeView} setActiveView={setActiveView} />
        <main className="mt-8">{renderView()}</main>
      </div>
    </div>
  );
}

export default App;
