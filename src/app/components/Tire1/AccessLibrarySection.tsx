import React from "react";
import image1 from "../../../assets/PHASE3PICTURE/image35.png";
import image2 from "../../../assets/PHASE3PICTURE/image33.png";
import image3 from "../../../assets/PHASE3PICTURE/image36.png";

const accessItems = [
  {
    title: "ACCESS ASCENDO",
    image: image1,
    position: "center",
  },
  {
    title: "ACCESS PROFICIO",
    image: image2,
    position: "center",
  },
  {
    title: "ACCESS EMINEO",
    image: image3,
    position: "center",
  },
];

export default function AccessLibrarySection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#35300F] text-white">
      <div className="mx-auto flex min-h-[842px] w-full max-w-[1280px] flex-col items-center px-6 pb-36 pt-[76px]">
        {/* Heading */}
        <h2 className="text-center font-['The_Seasons',serif] text-[44px] font-normal uppercase leading-[1.25] tracking-[0.16em] sm:text-[54px] md:text-[61px]">
          ACCESS YOUR
          <br />
          SAPERE LIBRARY
        </h2>

        {/* Description */}
        <p className="mt-[30px] max-w-[900px] text-center font-sans text-[20px] font-semibold leading-[1.35] tracking-[-0.01em]">
          Whether you are exploring your first idea or scaling an established
          venture, Sapēre offers the knowledge, relationships, and support to
          help you build within luxury.
        </p>

        <p className="mt-[22px] text-center font-sans text-[20px] font-semibold leading-none">
          Your path, your pace.
        </p>

        {/* Circle Image Buttons */}
        <div className="mt-[110px] grid w-full grid-cols-1 place-items-center gap-12 md:grid-cols-3 md:gap-0">
          {accessItems.map((item) => (
            <button
              key={item.title}
              type="button"
              className="group relative flex h-[216px] w-[216px] items-center justify-center overflow-hidden rounded-full text-center transition-transform duration-300 hover:scale-105"
            >
              {/* Circle Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                style={{ objectPosition: item.position }}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 rounded-full bg-black/25" />

              {/* Text */}
              <span className="relative z-10 px-4 font-sans text-[20px] font-semibold uppercase leading-none text-white">
                {item.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
