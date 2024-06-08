"use client"

import { ReactNode, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { cn } from "@/utils/cn"

interface ShapeProps {
  children: ReactNode;
  className?: string;
}
const Shape = ({ children, className }: ShapeProps) => {
    const baseClasses = `
      w-3/5 
      h-6 
      rounded-xl 
      bg-blue-500
      flex
      items-center
      justify-center
    `;
    
    return (
        <div className={cn(baseClasses, className)}>
          <span className="text-xs font-base text-zinc-100">{children}</span>
        </div>
    )
}

export default function Home() {
    
    const grays = [
        'bg-gray-50', 'bg-gray-100', 'bg-gray-200', 'bg-gray-300', 'bg-gray-400', 'bg-gray-500', 'bg-gray-600', 'bg-gray-700', 'bg-gray-800', 'bg-gray-900',
        'bg-zinc-50', 'bg-zinc-100', 'bg-zinc-200', 'bg-zinc-300', 'bg-zinc-400', 'bg-zinc-500', 'bg-zinc-600', 'bg-zinc-700', 'bg-zinc-800', 'bg-zinc-900',
        'bg-stone-50', 'bg-stone-100', 'bg-stone-200', 'bg-stone-300', 'bg-stone-400', 'bg-stone-500', 'bg-stone-600', 'bg-stone-700', 'bg-stone-800', 'bg-stone-900',
        'bg-neutral-50', 'bg-neutral-100', 'bg-neutral-200', 'bg-neutral-300', 'bg-neutral-400', 'bg-neutral-500', 'bg-neutral-600', 'bg-neutral-700', 'bg-neutral-800', 'bg-neutral-900',
        'bg-slate-50', 'bg-slate-100', 'bg-slate-200', 'bg-slate-300', 'bg-slate-400', 'bg-slate-500', 'bg-slate-600', 'bg-slate-700', 'bg-slate-800', 'bg-slate-900',
    ];
    const controls = useAnimation();
    return (
        <main>
        <h1>Styled Shapes Example</h1>
        {grays.map((gray, index) => (
            <motion.div
            key={gray}
            animate={{ x: (200 + parseInt(gray.split("-")[2], 10) / 10) }}
            transition={{
                delay: 0 + index * 0.2,
                duration: 2 + Math.random() * 0.5, // Slightly random duration
            }}
            >
            <Shape className={gray}>{gray}</Shape> {/* Set color class securely */}
            </motion.div>
        ))}
        
        </main>
    );
}
