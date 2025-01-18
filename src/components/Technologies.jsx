import {RiReactjsLine} from "react-icons/ri"
import {SiMongodb} from "react-icons/si"
import { DiRedis } from "react-icons/di";
import {FaNodeJs} from "react-icons/fa"
import { SiExpress } from "react-icons/si";
import { FaJs } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";

import { motion } from "motion/react"

const iconVariants = (duration) => ({
    initial:{y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 
         whileInView={{opacity:1 , y:0}}
         initial={{opacity:1 , y: -100}}
         transition={{duration: 1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h1>
       <motion.div
        whileInView={{opacity: 1 , x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 1.5}}
       className="flex flex-wrap items-center justify-center gap-4">
          <motion.div
           variants={iconVariants(2)}
           initial="initial"
           animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
              <RiReactjsLine className="text-7xl text-cyan-400"/>
          </motion.div>
          <motion.div 
           variants={iconVariants(3)}
           initial="initial"
           animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiMongodb className="text-7xl text-green-700"/>
          </motion.div>
          <motion.div 
           variants={iconVariants(5)}
           initial="initial"
           animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiExpress className="text-7xl"/>
          </motion.div>
          <motion.div 
           variants={iconVariants(1.5)}
           initial="initial"
           animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
              <FaNodeJs className="text-7xl text-green-500"/>
          </motion.div>
          <motion.div 
           variants={iconVariants(3)}
           initial="initial"
           animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
              <DiRedis className="text-7xl text-red-600"/>
          </motion.div>

          <motion.div 
           variants={iconVariants(4.5)}
           initial="initial"
           animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
              <FaJs className="text-7xl text-yellow-400"/>
          </motion.div>

          <motion.div 
           variants={iconVariants(2)}
           initial="initial"
           animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
              <FaGitAlt className="text-7xl text-orange-600"/>
          </motion.div>

          <motion.div 
           variants={iconVariants(5)}
           initial="initial"
           animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
              <FaJava className="text-7xl text-blue-800"/>
          </motion.div>

       </motion.div>

    </div>
  )
}

export default Technologies
