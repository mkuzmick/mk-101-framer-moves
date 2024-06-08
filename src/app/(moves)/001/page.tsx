"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/utils/cn"

interface ShapeProps {
  children: ReactNode;
  className?: string;
}
const Shape = ({ children, className }: ShapeProps) => {
    const baseClasses = `
      w-72 
      h-12 
      rounded-xl 
      bg-blue-500
      flex
      items-center
      justify-center
    `;
    return (
        <div className={cn(baseClasses, className)}>
          <h1 className="text-3xl font-black text-zinc-100">{children}</h1>
        </div>
    )
}

export default function Home() {
   const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew', 'Icedberry', 'Jackfruit', 'Kiwi', 'Lemon'];
   const fruitColors = {
    apple: 'bg-apple',
    banana: 'bg-banana',
    cherry: 'bg-cherry',
    date: 'bg-date',
    elderberry: 'bg-elderberry',
    fig: 'bg-fig',
    grape: 'bg-grape',
    honeydew: 'bg-honeydew',
    icedberry: 'bg-icedberry',
    jackfruit: 'bg-jackfruit',
    kiwi: 'bg-kiwi',
    lemon: 'bg-lemon',
  }
  return (
    <main>
      <h1>Styled Shapes Example</h1>
      {fruits.map((fruit, index) => (
        <motion.div
          key={fruit}
          animate={{ x: 200 }}
          transition={{
            delay: 3 + index * 0.3,
            duration: 3 + Math.random() * 0.5, // Slightly random duration
          }}
        >
          <Shape className={cn(fruitColors[fruit.toLowerCase()])}>{fruit}</Shape> {/* Set color class securely */}
        </motion.div>
      ))}
      {fruits.map((fruit, index) => (
        <motion.div
          key={fruit}
          animate={{ x: 200 }}
          transition={{
            delay: 3 + index * 0.3,
            duration: 3 + Math.random() * 0.5, // Slightly random duration
          }}
        >
          <Shape className={cn(`bg-${fruit.toLowerCase()}`)}>{fruit}</Shape> {/* Ensure Tailwind CSS has these classes or pick fixed colors */}
        </motion.div>
      ))}
      <div style={{ backgroundColor: 'var(--gray-200)', color: 'var(--primary)' }}>
        Hello, World!
      </div>
    </main>
  );
}
