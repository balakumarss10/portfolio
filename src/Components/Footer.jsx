import Social from './Social'

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <>
    <footer className="bg-[#20242F] py-5 inter text-white tracking-wide">
    <div className="w-full md:w-4/5 flex flex-col md:flex-row justify-between py-3 px-3 mx-auto">
       <div className="py-2 w-full sm:w-3/5 md:w-1/3">
        <h1 className="text-xl sora font-bold uppercase">Balakumar</h1>
        <p className="py-2 text-sm leading-loose">A Frontend Developer creating website and web app interfaces that drive product success.</p> 
       </div>
       <div className="py-2">
        <h1 className="sora font-bold text-xl pb-3 uppercase">Social</h1>
        <p className='flex pb-2'><Social /></p>
        <a className='text-blue-400' href='mailto:balakumarss10@gmail.com'>balakumarss@gmail.com</a>
        </div>            
    </div>
      </footer>
      <p className="bg-black text-white text-center text-xs md:text-sm py-2"> &copy;{' '}{date}. This website was developed by Balakumar.</p>
    </>
  );
};

export default Footer;
