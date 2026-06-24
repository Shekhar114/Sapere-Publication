import React from "react";

const accessItems = ["ACCESS ASCENDO", "ACCESS PROFICIO", "ACCESS EMINEO"];

export default function AccessLibrarySection() {
  return (
    <section className="w-full bg-[#35300F] text-white">
      <div className="mx-auto flex min-h-[842px] w-full max-w-[1280px] flex-col items-center px-6 pt-[76px] pb-28">
        {/* Heading */}
        <h2 className="text-center font-['The_Seasons',serif] text-[61px]/[1.58px] font-normal uppercase leading-[1.45] tracking-[0.16em] sm:text-[54px] md:text-[60px]">
          ACCESS YOUR
          <br />
          SAPERE LIBRARY
        </h2>

        {/* Description */}
        <p className="mt-[30px] max-w-[900px] text-center font-sans text-[20px]/[1.2] font-semibold leading-[1.35] tracking-[-0.01em] sm:text-[20px]">
          Whether you are exploring your first idea or scaling an established
          venture, Sapēre offers the knowledge, relationships, and support to
          help you build within luxury.
        </p>

        <p className="mt-[22px] text-center font-sans text-[20px]/[1.2] font-semibold leading-none">
          Your path, your pace.
        </p>

        {/* Circle Buttons */}
        <div className="mt-[110px] grid w-full grid-cols-1 place-items-center gap-12 md:grid-cols-3 md:gap-0">
          {accessItems.map((item) => (
            <button
              key={item}
              className="flex h-[216px] w-[216px] items-center justify-center rounded-full bg-[#B9B184] text-center font-sans text-[20px]/[1.2] font-semibold uppercase leading-none text-white transition-transform duration-300 hover:scale-105 sm:h-[216px] sm:w-[216px]"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
