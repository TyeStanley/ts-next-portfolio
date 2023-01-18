import React, { Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";

interface AboutProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  techList: string;
  description: string;
}

export default function TechModal(props: AboutProps) {
  const { isOpen, setIsOpen, title, techList, description } = props;

  return (
    <>
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
        <Dialog
          onClose={() => setIsOpen(false)}
          open={isOpen}
          className="relative z-50"
        >
          <Dialog.Overlay className="fixed inset-0 flex items-center justify-center border-2 border-sky-400 bg-gray-200/40 p-5 text-center">
            <Dialog.Panel className="border border-sky-400 bg-sky-50 p-1 md:w-[650px] md:p-5 lg:w-[800px]">
              <Dialog.Title className="mt-5 text-lg font-extrabold text-sky-900 md:text-[1.5rem] lg:text-[1.75rem]">
                {title}
              </Dialog.Title>
              <div className="line-pulse mx-auto mt-5 h-[1px] w-[100px] bg-sky-400" />
              <Dialog.Description className="mt-5 text-[12px] font-bold text-sky-800 md:text-[1rem] lg:text-[1.25rem]">
                {techList}
              </Dialog.Description>
              <Dialog.Description className="mt-5 mb-5 px-5 text-sm text-sky-700 md:text-[1rem] lg:text-[1.25rem]">
                {description}
              </Dialog.Description>
            </Dialog.Panel>
          </Dialog.Overlay>
        </Dialog>
      </Transition>
    </>
  );
}
