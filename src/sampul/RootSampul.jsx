import React ,{ useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import bunga_1 from "../assets/bunga_1.png";
import bunga_2 from "../assets/bunga_2.png";

const variantBunga1 = {
  before : {scale : 0, originX : 0, originY : 0},
  after : {scale : 1},
}

const variantBunga2 = {
  before : {scale : 0, originX : '100%', originY : '100%'},
  after : {scale : 1},
}
export default function RootSampul() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const [bukaUndangan, setOpenUndangan] = useState(false)
  return (
<div className={`fixed z-50 top-0 h-screen w-screen ${bukaUndangan ? 'hidden' : 'block'}`}>
<div className="container-sampul mb-32 relative z-20 h-screen grid grid-cols-3">
    <span ref={ref}
    className={`absolute z-10  bg-yellow-600 duration-300 delay-1000 inline-block h-1 ${isInView ? 'top-4 right-4 lg:top-8 lg:right-8 w-[50%] lg:w-[60%]' : 'w-0'}`}></span>
    <span ref={ref}
    className={`absolute -z-10 bg-yellow-600 duration-300 delay-1000 inline-block w-1 ${isInView ? 'top-4 right-4 lg:top-8 lg:right-8  h-[40%] lg:h-[13%]' : 'h-0'}`}></span>
      <motion.div 
      variants={variantBunga1}
      initial = {'before'}
      animate = {'after'}
      transition = {{duration : 0.5, delay : .5, ease : 'easeInOut'}}
      className="h-screen flex justify-start items-start">
        <img src={bunga_1} alt="bunga 1" className="h-[50%] lg:h-[80%] w-auto" />
      </motion.div>
      <div className="flex justify-center items-center text-center">
        <div>
          <p className="font-Tenor-Sans text-xs md:text-base tracking-[.2rem]">Please join us for</p>
          <p className="font-MonteCarlo text-2xl md:text-4xl">The Wedding of</p>
          <h1 className="font-Arapey text-[1.8rem] md:text-[3rem] tracking-[.8rem] leading-10 mt-4">GEORGIANA</h1>
          <h3 className="font-Arapey text-[.8rem] md:text-[1rem] tracking-[.8rem] mb-2">GRACE BROWN</h3>
          <p className="font-MonteCarlo text-2xl md:text-4xl">and</p>
          <h1 className="font-Arapey text-[1.8rem] md:text-[3rem]  tracking-[.8rem] leading-10 mt-4">CRISHTOPHER</h1>
          <h3 className="font-Arapey text-[.8rem] md:text-[1rem] tracking-[.8rem] mb-4">KEITH JENNINGS </h3>
          <p className="font-Tenor-Sans text-xs md:text-base tracking-[.2rem]">saturday the Twenty Sixih of August</p>
          <p className="font-Tenor-Sans text-xs md:text-base tracking-[.2rem]">Two Thousand and Twenty</p>
          <p className="font-Tenor-Sans text-xs md:text-base tracking-[.2rem]">at one o'clock in the afternoon</p>
          <p className="font-Tenor-Sans text-xs md:text-base tracking-[.2rem]">Gorse Hill, Surrey</p>
          <h3 className="font-MonteCarlo text-2xl md:text-4xl">reception to follow</h3>
          <button onClick={()=> setOpenUndangan(true)} type="button" class="text-white mt-8 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm md:text-lg px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900">Buka Undangan</button>
        </div>
      </div>
      <motion.div
      variants={variantBunga2}
      initial={'before'}
      animate={'after'}
      transition = {{duration : 0.5, delay : .5, ease : 'easeInOut'}}
      className="h-screen flex justify-end items-end">
        <img src={bunga_2} alt="bunga 2" className="h-[50%] lg:h-[80%]" />
      </motion.div>
      <span
      ref={ref}
    className={`absolute z-10 bg-yellow-600 duration-300 delay-1000 inline-block h-1 ${isInView ? 'bottom-4 left-4 lg:bottom-8 lg:left-8 w-[55%] lg:w-[70%]' : 'w-0'}`}></span>
    <span 
    ref={ref}
    className={`absolute -z-10 bg-yellow-600 duration-300 delay-1000 inline-block w-1 ${isInView ? 'bottom-4 left-4 lg:bottom-8 lg:left-8 h-[35%] lg:h-[13%]' : 'h-0'}`}></span>
    </div>
</div>
  );
}
