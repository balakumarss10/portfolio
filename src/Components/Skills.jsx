import {FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaAws, FaLinux, FaGit, FaGithub, FaDocker} from "react-icons/fa";
import { DiJavascript, DiJqueryLogo, DiMysql, DiNpm } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io";
import { SiExpress, SiMongodb } from "react-icons/si";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";


const Skills = () => {
  
  const container = useRef();

  useGSAP(() => {
    gsap.to(".bounce", {
      duration: 1,
      scale: 0.4,
      y: 10,
      stagger: {
        each:1,
        from: 'end',
        axis:"y",
        grid: [4,4],
        ease: "power3.inOut",
        repeat:-1,
        yoyo:true,
      },
    });
  }, {scope: container});

  return (
    <>
      <section ref={container} className="w-full md:h-5/6 lg:w-4/5 py-20 mx-auto">
        <h1 className="text-2xl sora font-bold text-center mb-14 text-[#272343]">
          My Top Skills
        </h1>
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-3 md:grid-cols-4">
          <div className="flex flex-col items-center">
            <span className="bounce text-5xl shadow-lg p-5 rounded-full text-[#3b82f6] bg-[#d7d6fe] mb-3">
              <FaHtml5 />
            </span>
            <p className="inter">HTML</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="bounce text-5xl shadow-lg p-5 rounded-full text-[#3b82f6] bg-[#d7d6fe] mb-3">
              <FaCss3Alt />
            </span>
            <p className="inter">CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="bounce text-5xl shadow-lg p-5 rounded-full text-[#3b82f6] bg-[#d7d6fe] mb-3">
              <DiJavascript />
            </span>
            <p className="inter">JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="bounce text-5xl shadow-lg p-5 rounded-full text-[#3b82f6] bg-[#d7d6fe] mb-3">
              <DiJqueryLogo />
            </span>
            <p className="inter">jQuery</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="bounce text-5xl shadow-lg p-5 rounded-full text-[#3b82f6] bg-[#d7d6fe] mb-3">
              <FaBootstrap />
            </span>
            <p className="inter">Bootstrap</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="bounce text-5xl shadow-lg p-5 rounded-full text-[#3b82f6] bg-[#d7d6fe] mb-3">
              <RiTailwindCssFill />
            </span>
            <p className="inter">Tailwind</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="bounce text-5xl shadow-lg p-5 rounded-full text-[#3b82f6] bg-[#d7d6fe] mb-3">
              <FaReact />
            </span>
            <p className="inter">React</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="bounce text-5xl shadow-lg p-5 rounded-full text-[#3b82f6] bg-[#d7d6fe] mb-3">
              <IoLogoNodejs />
            </span>
            <p className="inter">Node</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="bounce text-5xl shadow-lg p-5 rounded-full text-[#3b82f6] bg-[#d7d6fe] mb-3">
              <SiExpress />
            </span>
            <p className="inter">Express</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="bounce text-5xl shadow-lg p-5 rounded-full text-[#3b82f6] bg-[#d7d6fe] mb-3">
              <DiNpm />
            </span>
            <p className="inter">Npm</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="bounce text-5xl shadow-lg p-5 rounded-full text-[#3b82f6] bg-[#d7d6fe] mb-3">
              <SiMongodb />
            </span>
            <p className="inter">MongoDB</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="bounce text-5xl shadow-lg p-5 rounded-full text-[#3b82f6] bg-[#d7d6fe] mb-3">
              <FaAws />
            </span>
            <p className="inter">Cloud</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="bounce text-5xl shadow-lg p-5 rounded-full text-[#3b82f6] bg-[#d7d6fe] mb-3">
              <FaLinux />
            </span>
            <p className="inter">Linux</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="bounce text-5xl shadow-lg p-5 rounded-full text-[#3b82f6] bg-[#d7d6fe] mb-3">
              <FaGit />
            </span>
            <p className="inter">Git</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="bounce text-5xl shadow-lg p-5 rounded-full text-[#3b82f6] bg-[#d7d6fe] mb-3">
              <FaGithub />
            </span>
            <p className="inter">GitHub</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="bounce text-5xl shadow-lg p-5 rounded-full text-[#3b82f6] bg-[#d7d6fe] mb-3">
              <FaDocker />
            </span>
            <p className="inter">Docker</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
