import { FaDownload, FaHome } from "react-icons/fa";
import { Link } from "react-scroll";
import { TbInfoHexagonFilled } from "react-icons/tb";
import { FaCogs } from "react-icons/fa";
import { TbBriefcaseFilled } from "react-icons/tb";
import "../App.css";
import balakumar from "./images/balakumar.webp";
import Balakumar from "./resume/Balakumar.pdf";

const Header = () => {
  const offsetValue = -150;
  const Duration = 2000;

  return (
    <>
      <header className="w-full px-6 py-2 sticky top-0 z-50 bg-white border-b-2 border-gray-200">
        <div className="container mx-auto flex justify-around md:justify-between items-center">
          <img
            className="rounded-full"
            src={balakumar}
            width={55}
            alt="balakumar"
          />
          <ul className="flex">
            <li className="mx-9 leading-loose inter tracking-wide font-medium cursor-pointer">
              <Link
                to="home"
                smooth={true}
                spy={true}
                activeClass="active"
                duration={Duration}
                offset={offsetValue}
              >
                <span className="block md:hidden text-lg">
                  <FaHome />
                </span>{" "}
                <span className="hidden md:block">Home</span>
              </Link>
            </li>
            <li className="me-9 leading-loose inter tracking-wide font-medium cursor-pointer">
              <Link
                to="about"
                smooth={true}
                spy={true}
                activeClass="active"
                duration={Duration}
                offset={offsetValue}
              >
                <span className="block md:hidden text-lg">
                  <TbInfoHexagonFilled />
                </span>{" "}
                <span className="hidden md:block">About</span>
              </Link>
            </li>
            <li className="me-9 leading-loose inter tracking-wide font-medium cursor-pointer">
              <Link
                to="skills"
                smooth={true}
                spy={true}
                activeClass="active"
                duration={Duration}
                offset={offsetValue}
              >
                <span className="block md:hidden text-lg">
                  <FaCogs />
                </span>{" "}
                <span className="hidden md:block">Skills</span>
              </Link>
            </li>
            <li className="leading-loose inter tracking-wide font-medium cursor-pointer">
              <Link
                to="portfolio"
                smooth={true}
                spy={true}
                activeClass="active"
                duration={Duration}
                offset={offsetValue}
              >
                <span className="block md:hidden text-lg">
                  <TbBriefcaseFilled />
                </span>{" "}
                <span className="hidden md:block">Portfolio</span>
              </Link>
            </li>
          </ul>
          <a
            className="hidden md:block inter font-medium text-[#2d334a] rounded-full bg-[#ffcb56] py-2 px-4 hover:translate-y-0.5"
            href={Balakumar}
            download="Balakumar-Resume.pdf"
          >
            <span className="inline-block mx-2">
              <FaDownload />
            </span>
            Resume
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
