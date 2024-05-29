const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <>
      <p className="text-center text-sm py-2 bg-black text-white">
        &copy;{' '}{date}. This website was designed and developed by Balakumar.
      </p>
    </>
  );
};

export default Footer;
