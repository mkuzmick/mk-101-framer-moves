"use client"

import { useState } from "react";
import { motion, useScroll } from "framer-motion";

interface AnimationProps {
    children: string;
    values: {
        x: number;
        y: number;
        rotate: number;
    };
}
const Animation = ({
    children, values
  }: AnimationProps) => {
    return (
      <motion.div
        animate={{ x: values.x, y: values.y, rotate: values.rotate }}
        transition={{ type: "spring" }}
      >
        {children}
      </motion.div>
    );
  }


export default function App() {
    const [values, setValues] = useState({
        x: 0,
        y: 0,
        rotate: 0,
    });
    // const { scrollY } = useScroll();
    const { scrollY, scrollYProgress } = useScroll();
    return (
        <main className="" >
            <motion.div 
                className="w-[300px] h-[300px] bg-blue-500 rounded-lg" 
                animate={{ x: 900 }}
            />
            <motion.div 
                style={{ scaleX: scrollYProgress }} 
                className="w-[300px] h-[300px] bg-red-500 rounded-lg fixed"
            /> 

            <div style={{height: "500px"}} />
            <motion.div 
                className="w-[300px] h-[300px] bg-blue-500 rounded-lg" 
                animate={{ x: 500 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            />
            <div style={{height: "500px"}} />
            <motion.div 
                className="w-[300px] h-[300px] bg-blue-500 rounded-lg" 
                animate={{ x: 500 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            />
            <div style={{height: "500px"}} />
            <motion.div 
                className="w-[300px] h-[300px] bg-blue-500 rounded-lg" 
                animate={{ x: 500 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            />
            <div style={{height: "500px"}} />
            <motion.div 
                className="w-[300px] h-[300px] bg-blue-500 rounded-lg" 
                animate={{ x: 500 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            />
        </main>
        
    );
}


