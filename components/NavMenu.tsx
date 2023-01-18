import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";

interface NavMenuProps {
  isOpen: boolean;
  about: string;
  portfolio: string;
  contact: string;
}

export default function NavMenu(props: NavMenuProps) {
  const { isOpen, about, portfolio, contact } = props;

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
          <Link href="/about" className={about}>
            About
          </Link>
          <Link href="/portfolio" className={portfolio}>
            Portfolio
          </Link>
          <Link href="/contact" className={contact}>
            Contact
          </Link>
        </div>
      </div>
    </Transition>
  );
}
