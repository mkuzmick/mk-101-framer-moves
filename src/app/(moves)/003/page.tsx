

"use client"

import { useState } from "react";
import { motion } from "framer-motion";
// import "./styles.css";
interface InputProps {
    children: string;
    value: number;
    set: (newValue: number) => void;
    min?: number;
    max?: number;
}
const Input = ({
    value,
    children,
    set,
    min = -200,
    max = 200
  }: InputProps) => {
    return (
      <label className="flex items-center my-2">
        <code className="w-24">{children}</code>
        <input
          value={value}
          type="range"
          min={min}
          max={max}
          onChange={(e) => set(parseFloat(e.target.value))}
          className="mx-4 w-full"
        />
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          onChange={(e) => set(parseFloat(e.target.value) || 0)}
          className="border-b border-dotted border-accent ml-2 text-accent outline-none focus:border-solid"
        />
      </label>
    );
  }


export default function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);

  return (
    <main className="flex items-center" >
        
      <div>
        <motion.div
          className="w-[300px] h-[300px] bg-blue-500 rounded-lg"  
          animate={{ x, y, rotate }}
          transition={{ type: "spring" }}
        />
      </div>
      <div className="inputs">
        <Input value={x} set={setX}>
          x
        </Input>
        <Input value={y} set={setY}>
          y
        </Input>
        <Input value={rotate} set={setRotate} min={-180} max={180}>
          rotate
        </Input>
      </div>
    
    </main>
    
  );
}

