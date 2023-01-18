import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import TechModal from "../../components/TechModal";
import Navbar from "../../components/Navbar";

const photo = require("../../assets/professional-photo.jpg");

export default function About() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  function handleClick() {
    setIsOpen(true);
  }

  function handleClick2() {
    setIsOpen2(true);
  }

  return (
    <>
      <Head>
        <title>About Page | Tye Stanley</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <TechModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Front-End Technologies"
        techList="React, NextJS, Tailwind CSS, Material UI, Bootstrap, CSS3"
        description="I am a Full-Stack Developer, who focuses on the MERN Stack and now NextJS. React is my favorite framework for designing because of its seperation of concerns and efficiency it provides. I'm a fan of performance and optimization to make sites run great!"
      />

      <TechModal
        isOpen={isOpen2}
        setIsOpen={setIsOpen2}
        title="Back-End Technologies"
        techList="Node.js, Express.js, MongoDB, mySQL, RESTful, GraphQL"
        description="I think that without a solid back-end foundation, you cannot succeed as a great front-end developer. I prefer utilizing Node.js framework to develop Restful Api and apply it to my back-end projects. I have knowledge to utilize GraphQL, PWA and I'm excited to learn about other new back-end technology!"
      />

      <div className="h-screen w-screen overflow-hidden bg-[url('../assets/main-background.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="justify-top flex h-full w-full flex-col bg-white/70">
          <Navbar />
          <section className="mx-auto w-[95vw] rounded-xl border border-sky-400 bg-sky-50/70 px-5 text-center">
            <Image
              className="mx-auto mt-5 rounded-full border-2 border-sky-400"
              src={photo}
              alt="Professional Photo"
              width={175}
              height={175}
            />
            <h1 className="mt-5 text-[32px] font-extrabold text-sky-900 sm:text-[42px]">
              Tye Stanley
            </h1>
            <p className="mt-5 text-[12px] font-bold text-sky-800 xs:text-lg">
              TypeScript, React.js, Next.js, Node.js, Tailwind CSS, MongoDB,
              MySQL
            </p>
            <p className="md: mt-5 text-xs text-sky-700 xs:mx-auto xs:w-[410px] xs:text-base xs:leading-normal sm:w-[500px] sm:text-[1rem] md:w-[700px] md:text-lg">
              I&apos;m an established and driven software engineer applying Full
              Stack Developer background with a strong drive to improve/learn
              skill sets in relation to creating full-fledged websites with high
              performance and strong optimization. I have graduated from the
              Bootcamp program and obtained my certificate in full stack web
              development from UT University.
            </p>
            <div className="mt-5 mb-5">
              <button
                onClick={() => handleClick()}
                className="m-1 h-[35px] w-[100px] rounded border border-gray-100 bg-sky-500 text-gray-100 shadow-md hover:bg-sky-400"
              >
                FRONT-END
              </button>
              <button
                onClick={() => handleClick2()}
                className="m-1 h-[35px] w-[100px] rounded border border-gray-100 bg-sky-500 text-gray-100 shadow-md hover:bg-sky-400"
              >
                BACK-END
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
