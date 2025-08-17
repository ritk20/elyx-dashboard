import { useState, useEffect } from "react";
import Timeline from "../components/Timeline";
import EventModal from "../components/EventModal";
import { episodes } from "../data";

const MemberJourney = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .no-scrollbar::-webkit-scrollbar {
        display: none;
      }
      .no-scrollbar {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="w-full animate-in fade-in duration-500">
      <header className="text-center mb-4">
        <p className="text-lg text-muted-foreground">
          Click on an episode to see the thought behind it.
        </p>
      </header>
      <div className="w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
        <Timeline events={episodes} onEventSelect={setSelectedEvent} />
      </div>
      <footer className="text-center mt-4 text-muted-foreground">
        <p>Scroll horizontally to explore the timeline.</p>
      </footer>
      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </div>
  );
};

export default MemberJourney;
