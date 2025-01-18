import { CONTACT } from "../constants"
import {motion} from "motion/react"
import {FaLinkedin} from "react-icons/fa"
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h1 
         whileInView={{opacity:1 , y:0}}
         initial={{opacity:1 , y: -100}}
         transition={{duration: 1.5}}
        className="my-10 text-center text-4xl">Lets get connect!!</motion.h1>
         <div className="text-center tracking-tighter">
         
         <motion.p 
         whileInView={{opacity:1, x: 0}}
         initial={{opacity: 0, x: 100}}
         transition={{duration: 1.5}}
         className="my-4">{CONTACT.address}</motion.p>
        
         <motion.p 
         whileInView={{opacity:1, x: 0}}
         initial={{opacity: 0, x: -100}}
         transition={{duration: 1.5}}
         className="my-4">{CONTACT.phone}</motion.p>
         <p >{CONTACT.email}</p>
         <div className="flex flex-wrap justify-center m-7 gap-8">
         <a className="no-underline" target="_blank" href={CONTACT.linkedin}><FaLinkedin size={30}/></a>
         <a className="no-underline" target="_blank" href={CONTACT.github} ><FaGithub size={30} /></a>
         </div>
         </div>
    </div>
  )
}

export default Contact
