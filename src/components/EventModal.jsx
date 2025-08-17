import { useState, useEffect } from "react";
import { decisions } from "../data";

const DecisionBreakdown = ({ keyEvents, allDecisions }) => {
  if (!keyEvents || keyEvents.length === 0) {
    return (
      <div className="text-center text-gray-500 p-8">
        No key decisions available for this event.
      </div>
    );
  }

  return (
    <div className="space-y-6 p-1 h-72 overflow-y-auto">
      {keyEvents.map((keyEvent) => {
        const decision = allDecisions[keyEvent.id];
        if (!decision) return null;

        return (
          <div key={keyEvent.id} className="bg-gray-50 rounded-lg border p-4">
            <h4 className="font-bold text-md text-blue-900">
              {decision.title}
            </h4>
            <p className="text-sm text-gray-600 mt-1 mb-3">
              {decision.rationale}
            </p>

            <div className="space-y-3 border-t pt-3">
              {decision.evidence.map((message) => (
                <div
                  key={message.id}
                  className="flex flex-col text-sm bg-white p-2 rounded border"
                >
                  <div className="flex justify-between items-baseline">
                    <span className="font-semibold text-blue-800">
                      {message.sender}
                    </span>
                    <span className="text-xs text-gray-500">
                      {new Date(message.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-gray-700 mt-1">{message.content}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const EventModal = ({ event, onClose }) => {
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    setActiveTab("overview");
  }, [event]);

  if (!event) return null;

  const [startDate, endDate] = event.dateRange.split(" - ");

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-xl shadow-2xl w-full max-w-lg p-6 md:p-8 transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-scale"
      >
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
              {event.title}
            </h2>
            <p className="font-semibold text-blue-700 text-md mt-1">
              {startDate} - {endDate}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <div className="border-b border-gray-200 mt-4">
          <nav className="-mb-px flex space-x-6">
            <button
              onClick={() => setActiveTab("overview")}
              className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === "overview"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("breakdown")}
              className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === "breakdown"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Decision Breakdown
            </button>
          </nav>
        </div>

        <div className="mt-4">
          {activeTab === "overview" && (
            <p className="text-gray-600 text-base leading-relaxed">
              {event.summary}
            </p>
          )}
          {activeTab === "breakdown" && (
            <DecisionBreakdown
              keyEvents={event.keyEvents}
              allDecisions={decisions}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default EventModal;
