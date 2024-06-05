import { FaGithub } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

const Social = () => {
  return (
    <>
      <a
        className="text-lg text-[#2c67f2] bg-white p-2 me-6 rounded-full"
        href="https://www.linkedin.com/in/balakumarss10"
        target="_blank"
      >
        <LiaLinkedinIn />
      </a>
      <a
        className="text-lg text-[#2c67f2] bg-white rounded-full p-2 me-6"
        href="https://www.instagram.com/balakumar.10"
        target="_blank"
      >
        <AiFillInstagram />
      </a>
      <a
        className="text-lg text-[#2c67f2] bg-white rounded-full p-2 me-6"
        href="https://wa.me/9790418259"
        target="_blank"
      >
        <IoLogoWhatsapp />
      </a>
      <a
        className="text-lg text-[#2c67f2] bg-white rounded-full p-2"
        href="https://www.github.com/balakumarss10"
        target="_blank"
      >
        <FaGithub />
      </a>
    </>
  );
};

export default Social;
