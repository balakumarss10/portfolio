const About = () => {
  return (
    <>
      <section className="w-full px-3 py-20 md:py-32 md:w-5/6 lg:w-3/5 mx-auto">
        <h1 className="sora font-bold text-3xl mb-2 text-[#272343]">About Me!</h1>
        <p className="inter leading-loose tracking-wide mb-4 text-slate-700">
          A motivated individual with a keen interest in Web Development. I'm
          good at building websites using HTML, CSS, JavaScript, React,
          Bootstrap, and Tailwind. I did an internship at 21K School where I
          redesigned a webpage for their Student Referral Program and EYC
          British Curriculum. I also learned to set up things like AWS services
          for Continuous Integration and Deployment(CI/CD). I'm ready to bring
          my energy and skills to cool tech projects!
        </p>
        <div className="grid grid-cols:1 gap-y-6 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <h3 className="text-lg sora font-bold text-[#3b82f6]">Residence</h3>
            <p className="inter leading-loose tracking-wide text-slate-700">
              Chennai, Tamil Nadu
            </p>
          </div>
          <div>
            <h3 className="text-lg sora font-bold text-[#3b82f6]">Language</h3>
            <p className="inter leading-loose tracking-wide text-slate-700">
              English, Tamil
            </p>
          </div>
          <div>
            <h3 className="text-lg sora font-bold text-[#3b82f6]">Interest</h3>
            <p className="inter leading-loose tracking-wide text-slate-700">
              Web Development
            </p>
          </div>
          <div>
            <h3 className="text-lg sora font-bold text-[#3b82f6]">Born</h3>
            <p className="inter leading-loose tracking-wide text-slate-700">
              09-09-1998
            </p>
          </div>
          <div>
            <h3 className="text-lg sora font-bold text-[#3b82f6]">Education</h3>
            <p className="inter leading-loose tracking-wide text-slate-700">
              Bachelor of Engineering
            </p>
          </div>
          <div>
            <h3 className="text-lg sora font-bold text-[#3b82f6]">Email</h3>
            <p className="inter leading-loose tracking-wide text-slate-700">
              balakumarss10@gmail.com
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
