import {FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaAws, FaLinux, FaGit, FaGithub, FaDocker} from "react-icons/fa";
import { DiJavascript, DiJqueryLogo, DiMysql } from "react-icons/di";
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
      y: -10,
      duration: 0.8,
      stagger: {
        each: 0.3,
        from: "center",
        grid: "auto",
        ease: "power1",
        yoyo: true,
        repeat: -1,
      },
    });
  }, {scope: container});

  return (
    <>
      <section ref={container} className="w-full md:w-4/5 py-20 mx-auto">
        <h1 className="text-2xl sora font-bold text-center mb-14 text-[#272343]">
          My Top Skills
        </h1>
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-3 md:grid-cols-4">
          <div className="flex flex-col items-center">
            <span className="bounce text-7xl p-3 rounded-lg text-[#3b82f6] bg-[#d7d6fe] mb-3 hover:shadow hover:shadow-lg hover:shadow-[#3b82f6]">
              <FaHtml5 />
            </span>
            <p className="inter">HTML</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="bounce text-7xl p-3 rounded-lg text-[#3b82f6] bg-[#d7d6fe] mb-3 hover:shadow hover:shadow-lg hover:shadow-[#3b82f6]">
              <FaCss3Alt />
            </span>
            <p className="inter">CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="bounce text-7xl p-3 rounded-lg text-[#3b82f6] bg-[#d7d6fe] mb-3 hover:shadow hover:shadow-lg hover:shadow-[#3b82f6]">
              <DiJavascript />
            </span>
            <p className="inter">JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="bounce text-7xl p-3 rounded-lg text-[#3b82f6] bg-[#d7d6fe] mb-3 hover:shadow hover:shadow-lg hover:shadow-[#3b82f6]">
              <DiJqueryLogo />
            </span>
            <p className="inter">jQuery</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="bounce text-7xl p-3 rounded-lg text-[#3b82f6] bg-[#d7d6fe] mb-3 hover:shadow hover:shadow-lg hover:shadow-[#3b82f6]">
              <FaBootstrap />
            </span>
            <p className="inter">Bootstrap</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="bounce text-7xl p-3 rounded-lg text-[#3b82f6] bg-[#d7d6fe] mb-3 hover:shadow hover:shadow-lg hover:shadow-[#3b82f6]">
              <RiTailwindCssFill />
            </span>
            <p className="inter">Tailwind</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="bounce text-7xl p-3 rounded-lg text-[#3b82f6] bg-[#d7d6fe] mb-3 hover:shadow hover:shadow-lg hover:shadow-[#3b82f6]">
              <FaReact />
            </span>
            <p className="inter">React</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="bounce text-7xl p-3 rounded-lg text-[#3b82f6] bg-[#d7d6fe] mb-3 hover:shadow hover:shadow-lg hover:shadow-[#3b82f6]">
              <IoLogoNodejs />
            </span>
            <p className="inter">Node</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="bounce text-7xl p-3 rounded-lg text-[#3b82f6] bg-[#d7d6fe] mb-3 hover:shadow hover:shadow-lg hover:shadow-[#3b82f6]">
              <SiExpress />
            </span>
            <p className="inter">Express</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="bounce text-7xl p-3 rounded-lg text-[#3b82f6] bg-[#d7d6fe] mb-3 hover:shadow hover:shadow-lg hover:shadow-[#3b82f6]">
              <DiMysql />
            </span>
            <p className="inter">Mysql</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="bounce text-7xl p-3 rounded-lg text-[#3b82f6] bg-[#d7d6fe] mb-3 hover:shadow hover:shadow-lg hover:shadow-[#3b82f6]">
              <SiMongodb />
            </span>
            <p className="inter">MongoDB</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="bounce text-7xl p-3 rounded-lg text-[#3b82f6] bg-[#d7d6fe] mb-3 hover:shadow hover:shadow-lg hover:shadow-[#3b82f6]">
              <FaAws />
            </span>
            <p className="inter">Cloud</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="bounce text-7xl p-3 rounded-lg text-[#3b82f6] bg-[#d7d6fe] mb-3 hover:shadow hover:shadow-lg hover:shadow-[#3b82f6]">
              <FaLinux />
            </span>
            <p className="inter">Linux</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="bounce text-7xl p-3 rounded-lg text-[#3b82f6] bg-[#d7d6fe] mb-3 hover:shadow hover:shadow-lg hover:shadow-[#3b82f6]">
              <FaGit />
            </span>
            <p className="inter">Git</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="bounce text-7xl p-3 rounded-lg text-[#3b82f6] bg-[#d7d6fe] mb-3 hover:shadow hover:shadow-lg hover:shadow-[#3b82f6]">
              <FaGithub />
            </span>
            <p className="inter">GitHub</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="bounce text-7xl p-3 rounded-lg text-[#3b82f6] bg-[#d7d6fe] mb-3 hover:shadow hover:shadow-lg hover:shadow-[#3b82f6]">
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
