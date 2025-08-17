import { useRef, useState, useEffect } from "react";
// --- SVG Wave Component ---
const Wave = ({ style, d, className }) => (
  <svg
    viewBox="0 0 1440 120"
    preserveAspectRatio="none"
    className={`absolute bottom-0 left-0 w-[200%] h-auto transition-transform duration-300 ease-out ${className}`}
    style={style}
  >
    <path d={d} className="fill-current"></path>
  </svg>
);

const TimelineItem = ({ event, onCardClick }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = cardRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.5 }
    );
    if (node) observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  const [startDate, endDate] = event.dateRange.split(" - ");

  return (
    <div className="relative flex flex-col items-center w-64 md:w-72 shrink-0">
      <div
        ref={cardRef}
        onClick={() => onCardClick(event)}
        className={`w-full h-24 p-4 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-lg shadow-lg cursor-pointer transform transition-all duration-700 ease-in-out hover:shadow-xl hover:-translate-y-1 flex flex-col justify-center ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h3 className="text-md font-bold text-blue-900">{event.title}</h3>
      </div>
      <div className="w-0.5 h-8 bg-blue-300 mt-2"></div>
      <div className="w-4 h-4 bg-white rounded-full border-4 border-blue-500 shadow-md z-10"></div>
      <p className="text-xs text-blue-800 font-semibold mt-2">
        {startDate} - {endDate}
      </p>
    </div>
  );
};

// --- Timeline Component ---
const Timeline = ({ events, onEventSelect }) => {
  const scrollContainerRef = useRef(null);
  const [scrollStyle, setScrollStyle] = useState({
    wave1: {},
    wave2: {},
    wave3: {},
  });

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const scrollPercentage = maxScroll > 0 ? scrollLeft / maxScroll : 0;
      setScrollStyle({
        wave1: { transform: `translateX(-${scrollPercentage * 20}%)` },
        wave2: { transform: `translateX(-${scrollPercentage * 30}%)` },
        wave3: { transform: `translateX(-${scrollPercentage * 45}%)` },
      });
    }
  };

  // handle horizontal scrolling
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const onWheel = (e) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        container.scrollBy({
          left: e.deltaY,
          behavior: "auto",
        });
      };
      container.addEventListener("wheel", onWheel);
      return () => container.removeEventListener("wheel", onWheel);
    }
  }, []);

  return (
    <div className="relative w-full h-[400px] bg-sky-100 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-48">
        <Wave
          style={scrollStyle.wave1}
          d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,90.7C960,96,1056,96,1152,85.3C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          className="text-blue-400 opacity-60"
        />
        <Wave
          style={scrollStyle.wave2}
          d="M0,80L48,74.7C96,69,192,59,288,69.3C384,80,480,107,576,117.3C672,128,768,123,864,106.7C960,91,1056,64,1152,58.7C1248,53,1344,69,1392,77.3L1440,85L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          className="text-blue-500 opacity-50"
        />
        <Wave
          style={scrollStyle.wave3}
          d="M0,96L48,90.7C96,85,192,75,288,80C384,85,480,107,576,106.7C672,107,768,85,864,80C960,75,1056,85,1152,85.3C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          className="text-blue-600 opacity-40"
        />
      </div>
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="absolute inset-0 flex items-end overflow-x-auto overflow-y-hidden px-16 md:px-24 no-scrollbar"
      >
        <div className="relative flex h-full items-end pb-16">
          <div className="absolute bottom-[94px] left-0 w-full h-1 bg-blue-300"></div>
          <div className="flex gap-10 md:gap-16">
            {events.map((event, index) => (
              <TimelineItem
                key={index}
                event={event}
                onCardClick={onEventSelect}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
