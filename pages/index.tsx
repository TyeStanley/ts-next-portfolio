import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Cube from "../components/cube";

export default function Home() {
  return (
    <>
      <Head>
        <title>Full Stack Developer | Tye Stanley</title>
        <meta
          name="description"
          content="I'm a full stack developer with a passion for creating beautiful and functional websites. I'm currently looking for a full time position as a web developer."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:image"
          content="https://i.ibb.co/4JsC4fD/portfolio.png"
        />
        <link rel="icon" href="/thirteen.svg" />
      </Head>

      <div className="h-screen w-screen overflow-hidden bg-[url('../assets/main-background.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="flex h-full w-full flex-col justify-center bg-white bg-opacity-70">
          <Cube />
          <section className="text-center">
            <div className="grow-at-start mx-auto w-[300px] rounded-lg border border-black bg-[#fff]/[.5] p-4 opacity-0 xs:w-[410px]">
              <p className="text-md font-medium xs:text-xl sm:text-[26px]">
                Full-Stack Developer
              </p>
              <h1 className="mt-2 text-2xl font-medium tracking-widest xs:text-[36px] xs:leading-9 sm:mt-5 sm:text-[46px]">
                TYE STANLEY
              </h1>

              <div className="mx-auto mt-2 h-1 w-[140px] bg-black xs:mt-3 xs:w-[200px] sm:w-[225px]" />
            </div>

            <div className="reveal mx-auto mt-10 flex w-[320px] justify-around opacity-0 xs:w-[450px]">
              <Link
                className="flex h-[35px] w-[90px] animate-bounce items-center justify-center rounded border border-black hover:animate-none hover:bg-[#6BD4FF] xs:w-[110px]"
                href="/about"
              >
                <Image
                  src={require("../assets/icons/person-icon.png")}
                  alt="Person Icon"
                  width={"15"}
                  height={"15"}
                />
                <p className="ml-1">About</p>
              </Link>
              <Link
                className="bounce-2 flex h-[35px] w-[90px] items-center justify-center rounded border border-black hover:animate-none hover:bg-[#6BD4FF] xs:w-[110px]"
                href="/portfolio"
              >
                <Image
                  src={require("../assets/icons/briefcase-icon.png")}
                  alt="Linkedin Icon"
                  width={"15"}
                  height={"15"}
                />
                <p className="ml-1">Portfolio</p>
              </Link>
              <Link
                className="bounce-3 flex h-[35px] w-[90px] items-center justify-center rounded border border-black hover:animate-none hover:bg-[#6BD4FF] xs:w-[110px]"
                href="/contact"
              >
                <Image
                  src={require("../assets/icons/chat-bubble-icon.png")}
                  alt="Stack Overflow Icon"
                  width={"15"}
                  height={"15"}
                />
                <p className="ml-1">Contact</p>
              </Link>
            </div>

            <div className="rotate-item mx-auto mt-10 flex w-[200px] justify-between opacity-0">
              <Link
                href="https://github.com/TyeStanley"
                className="border-1 rounded border-2 border-white p-1 transition-all hover:border-t-transparent"
              >
                <Image
                  className="transition-all hover:animate-bounce"
                  src={require("../assets/icons/github-icon.png")}
                  alt="Github Icon"
                  width={"40"}
                  height={"40"}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/tye-stanley/"
                className="border-1 rounded border-2 border-white p-1 transition-all hover:border-t-transparent"
              >
                <Image
                  className="transition-all hover:animate-bounce"
                  src={require("../assets/icons/linkedin-icon.png")}
                  alt="Linkedin Icon"
                  width={"40"}
                  height={"40"}
                />
              </Link>
              <Link
                href="https://stackoverflow.com/users/17858669/tye-stanley"
                className="border-1 rounded border-2 border-white p-1 transition-all hover:border-t-transparent"
              >
                <Image
                  className="transition-all hover:animate-bounce"
                  src={require("../assets/icons/stack-overflow-icon.png")}
                  alt="Stack Overflow Icon"
                  width={"40"}
                  height={"40"}
                />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
