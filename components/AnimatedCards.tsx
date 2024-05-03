"use client";

import React, { useRef } from "react";
import { useInView } from "framer-motion";

const AnimatedCards = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : `translateX(${-200}px)`,
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default AnimatedCards;
