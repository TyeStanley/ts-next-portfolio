import Image from "next/image";
import ReactLogo from "../assets/cube-logos/react-icon.png";
import NodeLogo from "../assets/cube-logos/node-icon.jpg";
import MongoLogo from "../assets/cube-logos/mongodb-icon.jpg";
import ExpressLogo from "../assets/cube-logos/express-icon.png";
import NextjsLogo from "../assets/cube-logos/nextjs-icon.png";
import TailwindLogo from "../assets/cube-logos/tailwindcss-icon.png";

export default function Cube() {
  return (
    <div className="cube relative bottom-[100px] mt-[75px] xs:bottom-[150px] xs:mt-[125px]">
      <div className="side front">
        <div className="flex h-[75px] w-[75px] items-center justify-center rounded-full bg-white xs:h-[100px] xs:w-[100px]">
          <Image src={ReactLogo} alt="React Logo" width={"95"} height={"95"} />
        </div>
      </div>
      <div className="side left">
        <div className="flex h-[75px] w-[75px] items-center justify-center rounded-full bg-white xs:h-[100px] xs:w-[100px]">
          <Image
            className="rounded-full"
            src={NodeLogo}
            alt="Node Logo"
            width={"95"}
            height={"95"}
          />
        </div>
      </div>
      <div className="side right">
        <div className="flex h-[75px] w-[75px] items-center justify-center rounded-full bg-white xs:h-[100px] xs:w-[100px]">
          <Image
            className="rounded-full"
            src={MongoLogo}
            alt="MongoDB Logo"
            width={"95"}
            height={"95"}
          />
        </div>
      </div>
      {/* back side doesn't get shown in the rotation */}
      <div className="side back">
        <div className="flex h-[75px] w-[75px] items-center justify-center rounded-full bg-white xs:h-[100px] xs:w-[100px]">
          <Image
            src={ExpressLogo}
            alt="Express Logo"
            width={"95"}
            height={"95"}
          />
        </div>
      </div>
      <div className="side top">
        <div className="flex h-[75px] w-[75px] items-center justify-center rounded-full bg-white xs:h-[100px] xs:w-[100px]">
          <Image
            src={NextjsLogo}
            alt="Next.js Logo"
            width={"100"}
            height={"100"}
          />
        </div>
      </div>
      <div className="side bottom">
        <div className="flex h-[75px] w-[75px] items-center justify-center rounded-full bg-white xs:h-[100px] xs:w-[100px]">
          <Image
            src={TailwindLogo}
            alt="Tailwind Logo"
            width={"95"}
            height={"95"}
          />
        </div>
      </div>
    </div>
  );
}
