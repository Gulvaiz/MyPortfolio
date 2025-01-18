import { EDUCATION } from "../constants"
import {motion} from "motion/react"

const Education = () => {
  return (
    <>
 <div className="flex border-b border-neutral-900 pb-4 flex-wrap">
    <div className="flex lg:w-2/4 ">
         <div className="">
      <motion.h2 
       whileInView={{opacity:1 , y:0}}
       initial={{opacity:0 , y: -100}}
       transition={{duration: 1.5}}
      className="my-20 text-center text-4xl lg:text-start ">Education</motion.h2> 
      
      <div>
          {EDUCATION.map((education, index) => (
            <div key={index} className="mb-6">
              <h6 className="mb-2 font-semibold">{education.degree}</h6>
              <p className="mb-2 text-neutral-400">{education.school}</p>
              <p className="mb-4 text-neutral-400">{education.year}</p>
            </div>
          ))}
        </div>

    </div>
    </div>

    <div className="flex lg:w-2/4 ">
    <div className="mb-6">
    <motion.h2 
       whileInView={{opacity:1 , y:0}}
       initial={{opacity:0 , y: -100}}
       transition={{duration: 1.5}}
      className="my-20 text-center text-4xl lg:text-start ">Certificate</motion.h2> 
      
      <div className="">
      <h6 className="mb-2 font-semibold">Full MERN Stack Developer</h6>
      <p className="mb-2 text-neutral-400">AccioJob</p>
      <p className="mb-4 text-neutral-400">Nov,2024</p>

      <a className="text-sm text-pink-500" href="/GulvaizCertificate.pdf">View Certificate</a>

      </div>
    </div>
    </div>

    </div>
    </>
  )
}

export default Education
