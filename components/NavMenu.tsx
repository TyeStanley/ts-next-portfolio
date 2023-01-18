import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";

interface NavMenuProps {
  isOpen: boolean;
}

export default function NavMenu({ isOpen }: NavMenuProps) {
  return (
    <Transition
      as={Fragment}
      appear
      show={isOpen}
      enter="ease-out duration-300"
      enterFrom="opacity-0 scale-0"
      enterTo="opacity-100 scale-1"
      leave="ease-in duration-300"
      leaveFrom="opacity-100 scale-1"
      leaveTo="opacity-0 scale-0"
    >
      <div className="fixed inset-0 bg-sky-50">
        <div className="flex h-full flex-col items-center justify-center text-center">
          <Link
            href="/about"
            className="my-3 w-[200px] border border-sky-400 bg-gray-100 px-2 py-2 text-3xl text-sky-500"
          >
            About
          </Link>
          <Link
            href="/portfolio"
            className="my-3 w-[200px] border border-sky-400 bg-gray-100 px-2 py-2 text-3xl text-sky-500"
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className="my-3 w-[200px] border border-sky-400 bg-gray-100 px-2 py-2 text-3xl text-sky-500"
          >
            Contact
          </Link>
        </div>
      </div>
    </Transition>
  );
}
