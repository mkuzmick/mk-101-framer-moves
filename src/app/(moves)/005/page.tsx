"use client"

import { ReactNode, use, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimationProps {
    children: ReactNode;
}
    
const Animation = ({children}: AnimationProps) => {
    return (
        <div>
            {children}
        </div>
    );
}

export default function Page () {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });
    const layer1Y = useTransform(scrollYProgress, [0, 1], ["0%", "190%"]);
    const layer2Y = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
    const layer3Y = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);
    const layer4Y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <main >
    <div ref={ref} className="w-full min-h-screen overflow-hidden relative grid place-items-center">

      <motion.h1 
        style={{ y: (textY), top: "200px" }}
        className='font-black text-zinc-100 text-5xl md:text-8xl relative z-10'>
        LL SUMMER
        </motion.h1>
        
        <motion.div
        className='absolute inset-0 z-0'
        style={{
            backgroundImage: 'url(/images/castle_1_layers/layer_4.jpg)',
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: layer4Y
        }}
      ></motion.div>
      <motion.div
        className='absolute inset-0 z-20'
        style={{
            backgroundImage: 'url(/images/castle_1_layers/layer_1.png)',
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: layer1Y
        }}
      ></motion.div>
      
      <motion.div
        className='absolute inset-0 z-5'
        style={{
            backgroundImage: 'url(/images/castle_1_layers/layer_3.png)',
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: layer3Y
        }}
      ></motion.div>
       <motion.div
        className='absolute inset-0 z-15'
        style={{
            backgroundImage: 'url(/images/castle_1_layers/layer_2.png)',
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            z: 15,
            y: layer2Y
        }}
      ></motion.div>
    </div>
    <div className='"relative w-full py-10 bg-white'>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam nisi tempora ut magni, libero dicta reprehenderit facere facilis blanditiis officia atque tenetur! Pariatur, quia soluta dolore officia iste veritatis unde.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam nisi tempora ut magni, libero dicta reprehenderit facere facilis blanditiis officia atque tenetur! Pariatur, quia soluta dolore officia iste veritatis unde.</p>

    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam nisi tempora ut magni, libero dicta reprehenderit facere facilis blanditiis officia atque tenetur! Pariatur, quia soluta dolore officia iste veritatis unde.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam nisi tempora ut magni, libero dicta reprehenderit facere facilis blanditiis officia atque tenetur! Pariatur, quia soluta dolore officia iste veritatis unde.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam nisi tempora ut magni, libero dicta reprehenderit facere facilis blanditiis officia atque tenetur! Pariatur, quia soluta dolore officia iste veritatis unde.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam nisi tempora ut magni, libero dicta reprehenderit facere facilis blanditiis officia atque tenetur! Pariatur, quia soluta dolore officia iste veritatis unde.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam nisi tempora ut magni, libero dicta reprehenderit facere facilis blanditiis officia atque tenetur! Pariatur, quia soluta dolore officia iste veritatis unde.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam nisi tempora ut magni, libero dicta reprehenderit facere facilis blanditiis officia atque tenetur! Pariatur, quia soluta dolore officia iste veritatis unde.</p>

  </div>
  </main>
  )
}
