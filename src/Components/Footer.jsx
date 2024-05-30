import Social from './Social'

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <>
    <footer className="bg-black py-6 inter text-white tracking-wide">
    <div className="w-full flex flex-col justify-between py-3 sm:flex-row px-3 md:px-28">
       <div className="py-2 w-full sm:w-1/3">
        <h1 className="text-xl sora font-bold uppercase">Balakumar</h1>
        <p className="py-2 text-sm">A Frontend Developer creating website and web app interfaces that drive product success.</p> 
       </div>
       <div className="py-2 w-full sm:w-1/3 md:w-1/6">
        <h1 className="sora font-bold text-xl pb-3 uppercase">Social</h1>
        <p className='flex'><Social /></p>
        </div>            
    </div>
      <div className="container mx-auto border-t">
        <p className="text-center text-xs md:text-sm pt-6"> &copy;{' '}{date}. This website was developed by Balakumar.</p>
      </div>
      </footer>
    </>
  );
};

export default Footer;
