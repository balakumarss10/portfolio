import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import balakumar from "./images/balakumar.webp";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <>
      <section className="w-full py-20 md:py-36">
        <div className="flex flex-col-reverse items-center md:flex-row bg-gradient-to-l from-[#62cff4] to-[#2c67f2] md:px-32">
          <div className="width-full md:w-1/2 text-start px-3 pb-4">
            <h1 className="text-4xl text-white font-bold md:text-5xl py-3 sora">
              Hey I'm Balakumar
            </h1>
            <p className="leading-loose inter font-medium tracking-wide text-white py-3">
              Frontend Focused Web Developer. I'm open to Job opportunities
              where I can contribute, learn, expand my skills, and develop
              professionally. Check out some of my work in the Portfolio
              section.
            </p>
            <div className="leading-loose inter font-medium tracking-wide text-white text-xl">
              <Typewriter
                options={{
                  strings: [
                    "Let's build awesome websites!",
                    "Connect with me below",
                  ],
                  autoStart: true,
                  loop: true,
                  typeSpeed: 500,
                  deleteSpeed: 5,
                }}
              />
            </div>
            <div className="mt-3 flex flex-nowrap">
              <a
                className="text-2xl text-white me-6"
                href="https://www.linkedin.com/in/balakumarss10"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a
                className="text-2xl text-white me-6"
                href="https://www.instagram.com/balakumar.10"
                target="_blank"
              >
                <FaInstagram />
              </a>
              <a
                className="text-2xl text-white me-6"
                href="https://wa.me/9790418259"
                target="_blank"
              >
                <FaWhatsapp />
              </a>
              <a
                className="text-2xl text-white"
                href="https://www.github.com/balakumarss10"
                target="_blank"
              >
                <FaGithub />
              </a>
            </div>
          </div>
          <div className="width-full md:w-1/2 py-14 flex justify-center md:justify-end">
            <img
              className="rounded-full outline outline-[0.6rem] outline-white outline-offset-4"
              src={balakumar}
              alt="balakumar"
              width={280}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
