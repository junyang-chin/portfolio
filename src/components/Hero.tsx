import React, { useEffect, useMemo, useRef, useState } from "react";

const Hero = () => {
  type Taglines = Array<string>;

  const taglines: Taglines = [
    "I am Jun Yang",
    "I build APIs",
    "I solve problems",
    "I do it. Fast",
  ];

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
      <div className="flex flex-col gap-4 sm:gap-8">
        <div className="flex w-full sm:w-11/12 m-auto sm:border-b-[1.5px] border-dark">
          <h1 className="px-2 leading-normal m-auto text-4xl sm:text-6xl font-bold text-center text-dark py-8">
            {tagline}
          </h1>
        </div>
        <div className="flex flex-wrap gap-10 sm:gap-20 justify-center">
          <img
            src="../profilepic.png"
            alt="profile pic"
            width="220"
            className="shadow-imgShadowDark w-40 sm:w-56"
          />
          <p className="pl-2 sm:pl-6 sm:w-3/5 sm:self-end sm:border-l-[1.5px] border-dark">
            Hi, I am Jun Yang , a web developer based in Kuala Lumpur, Malaysia.
            <br />
            <br />I spend a majority of my time working on backend development,
            but I also enjoy dabbling in frontend development and design on the
            side. I find myself drawn to the minimalist design approach and aim
            to implement this style into my work.
            <br />
            <br />
            Jun Yang is currently building cool stuffs at{" "}
            <a
              href="https://invokeisdata.com"
              target="_blank"
              className="hover:underline"
            >
              @invokeisdata
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
