import logo from "../assets/logo.png"
import {FaLinkedin} from "react-icons/fa"
import { FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { CONTACT } from "../constants";
import { FaBookReader } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
       <nav className="mb-20 py-6 flex items-center justify-between">
             <div className="flex flex-shrink-0 items-center">
                  <img src={logo} alt="logo" className="w-11 h-11 rounded-full"/>
            </div>    

            <div className="flex gap-4 text-xl m-8 items-center justify-center">
            
           
            <a href="/ResumeGulvaizMERN.pdf" target="_blank"><FaBookReader /></a>
            

               <a className="no-underline" target="_blank" href={CONTACT.linkedin}><FaLinkedin size={20}/></a>
               <a className="no-underline" target="_blank" href={CONTACT.github} ><FaGithub size={20} /></a>
               
                <div className="relative group">
            <MdOutlineMail />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-1 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
              {CONTACT.email}
            </span>
          </div>

            </div>       
        </nav> 
    </>
  )
}

export default Navbar
