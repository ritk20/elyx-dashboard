const NavButton = ({ view, label, activeView, setActiveView }) => (
  <button
    onClick={() => setActiveView(view)}
    className={`px-4 py-2 mx-1 sm:mx-2 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
      activeView === view
        ? "bg-blue-600 text-white shadow-md"
        : "bg-white text-gray-700 hover:bg-gray-100"
    }`}
  >
    {label}
  </button>
);

const Navigation = ({ activeView, setActiveView }) => (
  <nav className="flex justify-center p-2 bg-gray-200 rounded-xl shadow-inner">
    <NavButton
      view="journey"
      label="Member Journey"
      activeView={activeView}
      setActiveView={setActiveView}
    />
    <NavButton
      view="dashboard"
      label="Health Dashboard"
      activeView={activeView}
      setActiveView={setActiveView}
    />
    <NavButton
      view="internal"
      label="Internal Metrics"
      activeView={activeView}
      setActiveView={setActiveView}
    />
  </nav>
);

export default Navigation;
