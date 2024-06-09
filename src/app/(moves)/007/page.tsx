"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";

interface ComponentProps {
  children: ReactNode;
}

const Component = ({ children }: ComponentProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 10%"],
  });
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 180, 180, 360],
  );

  const [scrollYProgressValue, setScrollYProgressValue] = useState(
    scrollYProgress.get(),
  );
  const [rotateValue, setRotateValue] = useState(rotate.get());

  useEffect(() => {
    const unsubscribeScroll = scrollYProgress.on("change", (latest) => {
      setScrollYProgressValue(latest);
    });
    const unsubscribeRotate = rotate.on("change", (latest) => {
      setRotateValue(latest);
    });

    return () => {
      unsubscribeScroll();
      unsubscribeRotate();
    };
  }, [scrollYProgress, rotate]);

  return (
    <motion.div className="p-12">
      <div className="fixed top-12 right-12 bg-zinc-900 text-zinc-100 font-medium font-mono rounded-lg p-2 text-right w-24">
        <h2>ScrollY: {scrollYProgressValue.toFixed(3)}</h2>
        <h2>Rotation: {rotateValue.toFixed(2)}</h2>
      </div>
      <div className="h-[100vh]"></div>
      <motion.div
        ref={ref}
        className="w-60 h-60 bg-red-500 rounded-lg"
        style={{ rotate }}
      ></motion.div>
      <div className="h-[100vh]"></div>
    </motion.div>
  );
};

export default function Page() {
  return (
    <main>
      <Component>content</Component>
    </main>
  );
}
