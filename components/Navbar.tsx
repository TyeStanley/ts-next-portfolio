import Image from "next/image";
import Link from "next/link";

const HomeIcon = require("../assets/icons/home-button.png");

export default function Navbar() {
  return (
    <nav className="">
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

        <div className="flex h-[40px] items-end text-xl text-sky-800">
          <Link href="/about">About</Link>
          <Link href="/portfolio" className="ml-2">
            Portfolio
          </Link>
          <Link href="/contact" className="ml-2">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
