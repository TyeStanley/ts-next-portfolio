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
      <Transition as={Fragment} appear show={isOpen}>
        <Dialog
          onClose={() => setIsOpen(false)}
          open={isOpen}
          className={`relative z-50`}
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-0"
            enterTo="opacity-100 scale-1"
            leave="ease-in duration-300"
            leaveFrom="opacity-100 scale-1"
            leaveTo="opacity-0 scale-0"
          >
            <div className="fixed inset-0 flex items-center justify-center border-2 border-[#6BD4FF] bg-white/50 p-5 text-center">
              <Dialog.Panel className="border border-[#6BD4FF] bg-white p-1">
                <Dialog.Title className="mt-5 text-lg font-extrabold">
                  {title}
                </Dialog.Title>
                <div className="line-pulse mx-auto mt-5 h-[1px] w-[100px] bg-black" />
                <Dialog.Description className="mt-5 text-[12px] font-bold">
                  {techList}
                </Dialog.Description>
                <Dialog.Description className="mt-5 mb-5 text-sm">
                  {description}
                </Dialog.Description>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
