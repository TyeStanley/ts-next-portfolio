import React, { Fragment } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

interface ProjectContent {
  content: {
    picture: string;
    name: string;
    techStack: string;
    description: string;
    alt: string;
    github: string;
    website: string;
  };
  showProject: boolean;
  setShowProject: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ProjectInfo(props: ProjectContent) {
  const { picture, name, techStack, description, alt, github, website } =
    props.content;
  const { showProject, setShowProject } = props;

  return (
    <>
      <Transition
        as={Fragment}
        show={showProject}
        enter="ease-out duration-300"
        enterFrom="opacity-0 scale-0"
        enterTo="opacity-100 scale-1"
        leave="ease-in duration-300"
        leaveFrom="opacity-100 scale-1"
        leaveTo="opacity-0 scale-0"
      >
        <div className="fixed inset-0 z-[60] flex flex-col items-center border-2 border-sky-400 bg-sky-100/90 px-5 pt-5 text-center">
          <button
            onClick={() => setShowProject(false)}
            className="h-[35px] w-[100%] max-w-[400px] rounded border border-gray-100 bg-sky-500 text-gray-100 shadow-md hover:bg-sky-400"
          >
            CLOSE
          </button>
          <div className="sm:mt-5 sm:flex">
            <div className="mx-auto max-w-[400px] pt-5 sm:mr-2 sm:w-[50%] sm:grow">
              <Image
                src={require(`../assets/projects/${picture}`)}
                alt={alt}
                className="rounded-xl border-2 border-sky-500"
              />
            </div>
            <div className="sm:ml-2 sm:w-[50%]">
              <h1 className="pt-4 text-lg font-bold text-sky-900 ">{name}</h1>
              <p className="font-semi-bold pt-1 text-sm text-sky-800">
                {techStack}
              </p>
              <div className="mx-auto mt-1 h-[2px] w-[225px] rounded bg-sky-500 sm:w-[100%] sm:max-w-[400px]" />
              <p className="max-w-[400px] pt-5 text-sm text-sky-700">
                {description}
              </p>
              <div className="pt-5">
                <Link href={github} target="_blank">
                  <button className="m-1 h-[35px] w-[100px] rounded border border-gray-100 bg-sky-500 text-gray-100 shadow-md hover:bg-sky-400">
                    GITHUB
                  </button>
                </Link>
                <Link href={website} target="_blank">
                  <button className="m-1 h-[35px] w-[100px] rounded border border-gray-100 bg-sky-500 text-gray-100 shadow-md hover:bg-sky-400">
                    LIVE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
}
