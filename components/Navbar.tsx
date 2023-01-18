import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavMenu from "./NavMenu";

const HomeIcon = require("../assets/icons/home-button.png");

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    const hamburger: HTMLElement | null = document.getElementById("hamburger");

    setIsOpen(!isOpen);

    if (hamburger !== null) hamburger.classList.toggle("hamburger");
  }

  return (
    <>
      <NavMenu isOpen={isOpen} />
      <nav className="z-50">
        <div className="mx-auto mt-4 flex w-[95vw] items-center justify-between">
          <div className="flex space-x-2">
            <h1 className="text-4xl font-extrabold text-sky-900">About</h1>
            <Link
              href="/"
              className="flex items-center justify-center hover:shadow-lg"
            >
              <Image src={HomeIcon} alt="Home Icon" width={30} height={30} />
            </Link>
          </div>

          <div className="hidden h-[40px] items-end text-xl text-sky-800 sm:flex">
            <Link href="/about" className="animate-pulse">
              About
            </Link>
            <Link href="/portfolio" className="ml-2 animate-pulse">
              Portfolio
            </Link>
            <Link href="/contact" className="ml-2 animate-pulse">
              Contact
            </Link>
          </div>

          <div
            id="hamburger"
            className="relative py-2 transition-all sm:hidden"
            onClick={handleClick}
          >
            <span className="relative bottom-[4px] block h-1 w-8 animate-pulse rounded bg-sky-400" />
            <span className="relative top-[2px] block h-1 w-8 animate-pulse rounded bg-sky-400" />
            <span className="invisible relative bottom-[2px] block h-1 w-8 animate-pulse rounded bg-sky-400" />
            <span className="relative top-[4px] block h-1 w-8 animate-pulse rounded bg-sky-400" />
          </div>
        </div>
      </nav>
    </>
  );
}
