import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import './App.css'
function App() {


  return (
    <> 
      <div className="">
      <div className="flex justify-center items-center py-10"><h1 className="font-bold text-blue-900 text-4xl lg:text-7xl text-center  me-5">Nishant</h1><h1 className="text-4xl lg:text-7xl text-center text-blue-900">Khorwal</h1></div>
      <hr className="my-4 border-t-2 border-blue-900 "></hr>
      <h1 className="font-semibold text-5xl text-center mb-2 text-blue-900">Resume</h1>
      <hr className="my-4 border-t-2 border-blue-900 "></hr>
      <div className="px-4 pb-5 py-4">
      <div className="flex flex-col lg:flex-row px-20 w-full py-8  shadow-xl border rounded-xl  border-t-4 border-t-blue-950">
        <div className="flex flex-col w-full lg:w-[40%]  ">
          <div className="mb-6 ">
            <ul>
              <li className="text-3xl mb-4 lora font-bold text-blue-900">Contact</li>
              <li className="flex flex-row justify-start items-center lora mb-2"><IoMdMail className="me-2 text-green-500 shadow-xl  text-3xl"/> <a  href="" className="lora bg-red-400 px-2 text-white py-1  rounded-lg hover:bg-red-700 shadow-xl">Khorwalnishant@gmail.com</a></li>
              <li className="flex flex-row justify-start items-center lora mb-2"><FaGithub className="me-2 text-3xl shadow-xl"/> <a target="_blank" href="https://github.com/Nishantkhorwal" className="lora shadow-xl bg-red-400 px-2 text-white py-1 rounded-lg hover:bg-red-700  ">Github</a></li>
              <li className="flex flex-row justify-start items-center lora mb-2"><FaLinkedin className="me-2 shadow-xl text-3xl text-blue-600"/> <a target="_blank" href="https://www.linkedin.com/in/nishant-khorwal-1a7519215/" className="lora shadow-xl bg-red-400 px-2 text-white py-1 rounded-lg hover:bg-red-700  ">LinkedIn</a></li>
            </ul>
          </div>
          <div className=" mb-5">
            <h1 className="text-3xl mb-4 lora font-bold text-blue-900">Skills</h1>
            <p className="text-xl font-signika bg-red-400 text-white px-1 shadow-xl py-1 rounded-lg">HTML, CSS , Javascript, Reactjs, ExpressJs, MongoSb, Django</p>
          </div>
          <div>
            <h1 className="font-bold text-3xl mb-4 lora text-blue-900">
              Education
            </h1>
            <p className="text-xl mb-1 font-signika text-gray-500">Btech(ECE)</p>
            <p className="text-xl mb-1 font-signika  text-gray-500">Ip University</p>
            <p className="text-xl mb-1 font-signika text-gray-500">2019-2023</p>
          </div>

        </div>
        <div className="">
        <hr className=" my-4 lg:my-0  border-t-2 border-gray-300 lg:h-full lg:border-t-0 lg:border-l-2 lg:border-gray-300 lg:mx-10 "></hr>
        </div>
        <div className="flex flex-col w-full lg:w-[50%]">
          <h1 className="lora text-3xl font-bold mb-5 text-blue-900">
            About
          </h1>
          <p className=" text-gray-500">I am Nishant, I completed my btech in 2023. I live in New Delhi. After Completing my btech I started studying Web Development and I chose MERN Stack as the primary choice. But in a company I worked as an intern, they teached me Django.Nowdays I work as a Freelance and I create Full Stack Websites using MERN Stack.</p>
          <h1 className="text-5xl mb-6 mt-4 text-blue-900">Work Experience</h1>
          <h1 className="font-bold text-3xl mb-2 text-blue-600">Full Stack Developer Intern</h1>
          <div className="flex"><h2 className="me-2 font-signika text-red-400">BinaryBug IT Solutions</h2><h3 className="font-signika text-red-400">(Feb-April 2024)</h3></div>
          <p className="font-signika  text-gray-500">During this Internship I worked as a Full Stack Developer and I created frontend using React & backend using Django.</p>
          <div className="ms-8">
            <ul>
            <li className="list-disc  text-gray-500">Learned Tailwind CSS</li>
            <li className="list-disc  text-gray-500">Created Full Stack Ecommerce Website</li>
            <li className="list-disc  text-gray-500">Learned Advance Python</li>

          </ul>
          </div>

        </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default App
