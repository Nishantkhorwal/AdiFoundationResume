import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import './App.css'
function App() {


  return (
    <> 
      <div className="">
      <div className="flex justify-center items-center py-10"><h1 className="font-bold text-4xl lg:text-7xl text-center  me-5">Nishant</h1><h1 className="text-4xl lg:text-7xl text-center ">Khorwal</h1></div>
      <hr className="my-4 border-t-2 border-gray-300 "></hr>
      <h1 className="font-semibold text-5xl text-center mb-2">Resume</h1>
      <hr className="my-4 border-t-2 border-gray-300 "></hr>
      <div className="flex flex-col lg:flex-row px-20 w-full ">
        <div className="flex flex-col w-full lg:w-[40%]">
          <div className="mb-6">
            <ul>
              <li className="text-3xl mb-4 lora font-bold">Contact</li>
              <li className="flex flex-row justify-start items-center lora"><IoMdMail className="me-2"/> <a href="" className="lora">Contact</a></li>
              <li className="flex flex-row justify-start items-center lora"><FaGithub className="me-2"/> <a href="" className="lora">Github</a></li>
              <li className="flex flex-row justify-start items-center lora"><FaLinkedin className="me-2"/> <a href="" className="lora">LinkedIn</a></li>
            </ul>
          </div>
          <div className=" mb-5">
            <h1 className="text-3xl mb-4 lora font-bold">Skills</h1>
            <p className="text-xl font-signika">HTML, CSS , Javascript, Reactjs, ExpressJs, MongoSb, Django</p>
          </div>
          <div>
            <h1 className="font-bold text-3xl mb-4 lora">
              Education
            </h1>
            <p className="text-xl mb-1 font-signika ">Btech(ECE)</p>
            <p className="text-xl mb-1 font-signika">Ip University</p>
            <p className="text-xl mb-1 font-signika">2019-2023</p>
          </div>

        </div>
        <div className="">
        <hr className=" my-4 border-t-2 border-gray-300 lg:h-full lg:border-t-0 lg:border-l-2 lg:border-gray-300 lg:mx-10 "></hr>
        </div>
        <div className="flex flex-col w-full lg:w-[50%]">
          <h1 className="lora text-3xl font-bold mb-5">
            About
          </h1>
          <p>I am Nishant, I completed my btech in 2023. I live in New Delhi. After Completing my btech I started studying Web Development and I chose MERN Stack as the primary choice. But in a company I worked as an intern, they teached me Django.Nowdays I work as a Freelance and I create Full Stack Websites using MERN Stack.</p>
          <h1 className="text-5xl mb-6 mt-4">Work Experience</h1>
          <h1 className="font-bold text-3xl">Full Stack Developer Intern</h1>
          <div className="flex"><h2 className="me-2 font-signika">BinaryBug IT Solutions</h2><h3 className="font-signika">(Feb-April 2024)</h3></div>
          <p className="font-signika">During this Internship I worked as a Full Stack Developer and I created frontend using React & backend using Django.</p>
          <div className="ms-8">
            <ul>
            <li className="list-disc">Learned Tailwind CSS</li>
            <li className="list-disc">Created Full Stack Ecommerce Website</li>
            <li className="list-disc">Learned Advance Python</li>

          </ul>
          </div>

        </div>
      </div>
      </div>
    </>
  )
}

export default App
