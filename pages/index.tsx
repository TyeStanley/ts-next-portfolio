import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Cube from "../components/Cube";

export default function Home() {
  return (
    <>
      <Head>
        <title>Web Developer | Tye Stanley</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/thirteen.svg" />
      </Head>

      <div className="h-screen w-screen overflow-hidden bg-[url('../assets/main-background.jpg')] bg-cover">
        <div className="flex h-full w-full flex-col justify-center bg-white bg-opacity-70">
          <Cube />
          <section className="text-center">
            <div className="mx-auto w-[300px] rounded-lg border border-black bg-[#fff]/[.5] p-4 xs:w-[410px]">
              <p className="text-md font-medium xs:text-xl sm:text-[26px]">
                Full-Stack Developer
              </p>
              <h1 className="mt-2 text-2xl font-medium tracking-widest xs:text-[36px] xs:leading-9 sm:mt-5 sm:text-[46px]">
                TYE STANLEY
              </h1>

              <div className="mx-auto mt-2 h-1 w-[140px] bg-black xs:mt-3 xs:w-[200px] sm:w-[225px]" />
            </div>

            <div className="mx-auto mt-10 flex w-[320px] justify-around xs:w-[450px]">
              <Link
                className="flex h-[35px] w-[90px] items-center justify-center rounded border border-black hover:animate-bounce hover:bg-blue-200 xs:w-[110px]"
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
                className="flex h-[35px] w-[90px] items-center justify-center rounded border border-black hover:animate-bounce hover:bg-blue-200 xs:w-[110px]"
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
                className="flex h-[35px] w-[90px] items-center justify-center rounded border border-black hover:animate-bounce hover:bg-blue-200 xs:w-[110px]"
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

            <div className="mx-auto mt-10 flex w-[200px] justify-between">
              <Link
                href="https://github.com/TyeStanley"
                className="border-1 rounded border border-white p-1 hover:animate-bounce hover:bg-blue-200"
              >
                <Image
                  src={require("../assets/icons/github-icon.png")}
                  alt="Github Icon"
                  width={"40"}
                  height={"40"}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/tye-stanley/"
                className="border-1 rounded border border-white p-1 hover:animate-bounce hover:bg-blue-200"
              >
                <Image
                  src={require("../assets/icons/linkedin-icon.png")}
                  alt="Linkedin Icon"
                  width={"40"}
                  height={"40"}
                />
              </Link>
              <Link
                href="https://stackoverflow.com/users/17858669/tye-stanley"
                className="border-1 rounded border border-white p-1 hover:animate-bounce hover:bg-blue-200"
              >
                <Image
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