import { useEffect, useState } from 'react';

export default function useScrollSpy(sectionIds, offset = 0) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      let currentId = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top - offset <= 0) {
            currentId = id;
          }
        }
      }

      setActiveId(currentId);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();  
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}
