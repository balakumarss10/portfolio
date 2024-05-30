import Social from "./Social";
import balakumar from "./images/balakumar.webp";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <>
      <section className="w-full py-20 md:py-36">
        <div className="w-full bg-gradient-to-l from-[#62cff4] to-[#2c67f2]">
          <div className="container xl:w-5/6 mx-auto flex flex-col-reverse items-center md:flex-row">
            <div className="w-full md:w-1/2 text-start px-3 pb-4">
              <h1 className="text-3xl text-white font-bold sm:text-5xl py-3 sora">
                Hey I'm Balakumar
              </h1>
              <p className="leading-loose inter font-medium tracking-wide text-white pb-3">
                Frontend Focused Web Developer. I'm open to Job opportunities
                where I can contribute, learn, expand my skills, and develop
                professionally. Check out some of my work in the Portfolio
                section.
              </p>
              <div className="leading-loose inter font-medium tracking-wide text-white text-lg sm:text-xl">
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
                <Social />
              </div>
            </div>
            <div className="w-full md:w-1/2 py-14 px-3 flex justify-center md:justify-end">
              <img
                className="rounded-full outline outline-[0.6rem] outline-white outline-offset-4"
                src={balakumar}
                alt="balakumar"
                width={280}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
