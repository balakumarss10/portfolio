import refernow from "./images/refernow.jpg";
import encycle from "./images/encycle.jpeg";
import ecommerce from "./images/ecommerce.jpeg";

const Portfolio = () => {
  return (
    <>
      <section className="w-full py-20 md:py-36">
        <h1 className="text-center text-2xl sora font-bold mb-10 text-[#272343]">
          Projects
        </h1>
        <div className="container mx-auto flex flex-wrap">
          <div className="w-72 h-[26rem] mb-16 shadow-2xl rounded-md mx-auto hover:shadow-lg hover:shadow-[#3b82f6]">
            <img src={refernow} alt="refernow" />
            <p className="source p-3 tracking-wide leading-7 text-slate-700">
              Recreated the Frontend page of 21k school's New Student Referral
              Program using Bootstrap5.
            </p>
            <a
              className="p-2 rounded-md mx-24 inter font-medium text-[#2d334a] bg-[#ffcb56]"
              href="https://balakumarss10.github.io/refernowpage/"
              target="_blank"
            >
              Visit Now
            </a>
          </div>

          <div className="w-72 h-[26rem] mb-16 shadow-2xl rounded-md mx-auto hover:shadow-lg hover:shadow-[#3b82f6]">
            <img src={encycle} alt="encycle" />
            <p className="source p-3 tracking-wide leading-7 text-slate-700">
              Redesigned EYC page of 21k school to showcase the features and
              benefits of the British Curriculum.
            </p>
            <a
              className="p-2 rounded-md mx-24 inter font-medium text-[#2d334a] bg-[#ffcb56]"
              href="https://balakumarss10.github.io/eycpage/"
              target="_blank"
            >
              Visit Now
            </a>
          </div>

          <div className="w-72 h-[26rem] mb-16 shadow-2xl rounded-md mx-auto hover:shadow-lg hover:shadow-[#3b82f6]">
            <img src={ecommerce} alt="ecommerce" />
            <p className="source p-3 tracking-wide leading-7 text-slate-700">
              A website mainly focused on Advanced Search and Filtering options
              built using react.
            </p>
            <a
              className="p-2 rounded-md mx-24 inter font-medium text-[#2d334a] bg-[#ffcb56]"
              href="https://balakumarss10.github.io/cart.github.io/"
              target="_blank"
            >
              Visit Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
