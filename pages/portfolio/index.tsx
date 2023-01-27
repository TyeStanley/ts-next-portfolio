import Head from "next/head";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import projectsArr from "../../data/project-content.json";
import ProjectInfo from "../../components/ProjectInfo";

interface ProjectContent {
  picture: string;
  name: string;
  techStack: string;
  description: string;
  alt: string;
  github: string;
  website: string;
}

export default function Portfolio() {
  const [currentArrayNumber, setCurrentArrayNumber] = useState<number>(0);
  const [content, setContent] = useState<ProjectContent>(projectsArr[0]);

  const [showProject, setShowProject] = useState<boolean>(false);

  function handleLeftClick() {
    if (content.name === projectsArr[0].name) {
      const lastArrayItem: number = projectsArr.length - 1;

      setContent(projectsArr[lastArrayItem]);
      setCurrentArrayNumber(lastArrayItem);
    } else {
      setContent(projectsArr[currentArrayNumber - 1]);
      setCurrentArrayNumber(currentArrayNumber - 1);
    }
  }

  function handleRightClick() {
    if (content.name === projectsArr[projectsArr.length - 1].name) {
      setContent(projectsArr[0]);
      setCurrentArrayNumber(0);
    } else {
      setContent(projectsArr[currentArrayNumber + 1]);
      setCurrentArrayNumber(currentArrayNumber + 1);
    }
  }
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <ProjectInfo
        content={content}
        showProject={showProject}
        setShowProject={setShowProject}
      />

      <div className="h-screen w-screen overflow-hidden bg-[url('../assets/main-background.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="justify-top flex h-full w-full flex-col bg-white/70">
          <Navbar name="Portfolio" />
          <section className="mx-auto w-[95vw] rounded-xl border border-sky-400 bg-sky-50/70 px-5 text-center">
            <div id="mobile" className="mt-5 xs:hidden">
              <div
                className="mx-auto w-[100%]"
                onClick={() => setShowProject(true)}
              >
                <Image
                  src={require(`../../assets/projects/${content.picture}`)}
                  alt="Portfolio"
                  className="rounded-xl border-2 border-sky-500"
                  priority
                />
              </div>

              <p className="mt-5 text-xs font-semibold text-sky-800">
                {content.techStack}
              </p>
              <h3 className="mt-5 font-extrabold text-sky-900">
                {content.name}
              </h3>

              <div className="relative bottom-[34px] flex justify-between">
                <div className="w-11" onClick={handleLeftClick}>
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

            <div
              id="desktop"
              className="my-5 hidden grid-cols-2 gap-5 xs:grid md:grid-cols-3 lg:grid-cols-4"
            >
              {projectsArr.map((project, index) =>
                index === currentArrayNumber ? (
                  <div
                    key={index}
                    className="rounded-xl border-2 border-sky-500 hover:scale-110"
                    onClick={() => setShowProject(true)}
                  >
                    <Image
                      src={require(`../../assets/projects/${project.picture}`)}
                      alt={project.alt}
                      className="rounded-xl opacity-70 transition-all hover:opacity-100"
                      priority
                    />
                  </div>
                ) : (
                  <div
                    key={index}
                    className="rounded-xl border-2 border-sky-500 hover:scale-110"
                    onClick={() => {
                      setContent(project);
                      setCurrentArrayNumber(index);
                      setShowProject(true);
                    }}
                  >
                    <Image
                      src={require(`../../assets/projects/${project.picture}`)}
                      alt={project.alt}
                      className="rounded-xl opacity-70 transition-all hover:opacity-100"
                      priority
                    />
                  </div>
                )
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
