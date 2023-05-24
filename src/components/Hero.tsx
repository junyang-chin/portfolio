import React, { useEffect, useMemo, useRef, useState } from "react";

const Hero = () => {
  type Taglines = Array<string>;

  const taglines: Taglines = ["web apps", "APIs", "solutions", "things. Fast"];

  const length: number = taglines.length;

  type Tagline = Array<any>;

  const [tagline, setTagline]: Tagline = useState(taglines[0]);
  const val = useEffect(() => {
    let cursor = 0;
    let length = taglines.length;
    setInterval(() => {
      console.log(cursor);
      cursor++;
      if (cursor >= length) {
        cursor = 0;
      }
      setTagline(taglines[cursor]);
    }, 3000);
  }, []);

  return (
    <section className="section-container h-screen m-auto flex justify-center items-center">
      <div className="flex flex-col gap-12">
        <h1 className="text-5xl sm:text-6xl font-title font-bold sm:w-3/5 pr-2 sm:pr-6 text-right leading-tight border-r-[1.5px] border-dark">
          I build
          <br />
          <span className="bg-dark text-white px-2 leading-normal shadow-imgShadowDarkLight">
            {tagline}
          </span>
        </h1>
        <p className="pl-2 sm:pl-6 sm:w-3/5 sm:self-end border-l-[1.5px] border-dark">
          Hi, I am Jun Yang, a web developer based in Kuala Lumpur, Malaysia.
          <br />
          <br />I spend a majority of my time working on backend development,
          but I also enjoy dabbling in frontend development and design on the
          side. I find myself drawn to the minimalist design approach and aim to
          implement this style into my work.
        </p>
      </div>
    </section>
  );
};

export default Hero;
