const Header = ({ name, goal }) => (
  <header className="text-center mb-6">
    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
      {name}'s Journey
    </h1>
    <p className="text-lg text-gray-600 mt-2">{goal}</p>
  </header>
);

export default Header;
