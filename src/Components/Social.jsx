import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Social = () => {
  return (
    <>
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
    </>
  );
};

export default Social;
