import { useState, useRef, useCallback } from "react";

export const useSliderPosition = (initialPosition = 50) => {
  const [position, setPosition] = useState(initialPosition);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percent);
  }, []);

  return { position, containerRef, handleMove };
};
