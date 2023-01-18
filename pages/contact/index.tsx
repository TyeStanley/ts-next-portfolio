import React from "react";
import Navbar from "../../components/Navbar";

export default function contact() {
  return (
    <>
      <div className="h-screen w-screen overflow-hidden bg-[url('../assets/main-background.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="justify-top flex h-full w-full flex-col bg-white/70">
          <Navbar />
          <section className="mx-auto w-[95vw] rounded-xl border border-sky-400 bg-sky-50/70 px-5 text-center"></section>
        </div>
      </div>
    </>
  );
}
