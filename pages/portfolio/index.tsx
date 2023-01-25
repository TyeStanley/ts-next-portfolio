import Head from "next/head";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import { useState } from "react";

const temp = "portfolio";

export default function Portfolio() {
  const [content, setContent] = useState();

  function handleLeftClick() {
    // console.log("left");
  }

  function handleRightClick() {
    // console.log("right");
  }
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="h-screen w-screen overflow-hidden bg-[url('../assets/main-background.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="justify-top flex h-full w-full flex-col bg-white/70">
          <Navbar name="Portfolio" />
          <section className="mx-auto w-[95vw] rounded-xl border border-sky-400 bg-sky-50/70 px-5 text-center">
            <div id="mobile" className="mt-5 xs:hidden">
              <div className="mx-auto w-[100%]">
                <Image
                  src={require(`../../assets/${temp}.png`)}
                  alt="Portfolio"
                  className="rounded-xl border-2 border-sky-500"
                />
              </div>

              <p className="mt-5 text-sm">React, JavaScript, HTML/CSS</p>
              <h3 className="mt-5 text-2xl">Portfolio</h3>

              <div className="relative bottom-9 flex justify-between">
                <div className="w-11" onClick={handleRightClick}>
                  <Image
                    src={require(`../../assets/icons/left-arrow.png`)}
                    alt="Left Arrow"
                    width={50}
                  />
                </div>

                <div className="w-11" onClick={handleRightClick}>
                  <Image
                    src={require(`../../assets/icons/right-arrow.png`)}
                    alt="Right Arrow"
                    width={50}
                  />
                </div>
              </div>
            </div>

            <div id="desktop" className="hidden xs:block"></div>
          </section>
        </div>
      </div>
    </>
  );
}
