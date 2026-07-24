import { useState, useEffect, useRef } from "react";

export function useActiveSection(sectionIds, rootMargin = "-20% 0px -60% 0px") {
  const [activeId, setActiveId] = useState("");
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin, threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    observerRef.current = observer;
    return () => observer.disconnect();
  }, [rootMargin]);

  useEffect(() => {
    const observer = observerRef.current;
    if (!observer) return;
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, [sectionIds.join()]);

  return activeId;
}
