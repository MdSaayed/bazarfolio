import { useEffect, useRef, useState } from 'react';

const ScrollToTop = () => {
  const progressPathRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const progressPath = progressPathRef.current;
    if (!progressPath) return;

    const pathLength = progressPath.getTotalLength();
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = `${pathLength}`;

    const updateProgress = () => {
      const scroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = `${progress}`;
    };

    const handleScroll = () => {
      updateProgress();
      setIsActive(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    updateProgress();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        onClick={scrollToTop}
        className={`group cursor-pointer w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-300 shadow-lg transition-all duration-300 ${
          isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
        }`}
      >
        <svg
          className="absolute w-full h-full rotate-[-90deg]"
          viewBox="-1 -1 102 102"
        >
          <path
            ref={progressPathRef}
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            stroke="#3B82F6"
            strokeWidth="2"
            fill="none"
            className="transition-[stroke-dashoffset] duration-300 ease-out"
          />
        </svg>

        <div className="relative -rotate-90 z-10">
          <svg width="12" height="20" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 15L8 8L1 1"
              stroke="#1E3A8A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ScrollToTop;
