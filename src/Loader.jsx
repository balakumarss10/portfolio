import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Loader = () => {
  const container = useRef();
  useGSAP(
    () => {
      gsap.to(".box1", {
        duration: 1,
        x: -10,
        y: -10,
        yoyo: true,
        repeat: -1,
      });
      gsap.to(".box2", {
        duration: 1,
        x: 10,
        y: -10,
        yoyo: true,
        repeat: -1,
      });

      gsap.to(".box4", {
        duration: 1,
        x: -10,
        y: 10,
        yoyo: true,
        repeat: -1,
      });

      gsap.to(".box5", {
        duration: 1,
        x: 10,
        y: 10,
        yoyo: true,
        repeat: -1,
      });
    },
    { scope: container }
  );
  return (
    <>
      <section ref={container} className="fixed flex items-center justify-center w-full h-full">
        <div className="box1 absolute w-9 h-9 rounded-full bg-fuchsia-500"></div>
        <div className="box2 absolute w-9 h-9 rounded-full bg-cyan-500"></div>
        <div className="box3 absolute w-9 h-9 rounded-full bg-amber-400 z-10"></div>
        <div className="box4 absolute w-9 h-9 rounded-full bg-orange-500"></div>
        <div className="box5 absolute w-9 h-9 rounded-full bg-lime-500"></div>
      </section>
    </>
  );
};

export default Loader;
