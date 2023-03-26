import { useEffect } from "react";

const Hero = () => {
  const titles = ["web app", "api"];
  useEffect(() => {
    setInterval(() => {
      title = titles[0];
    }, 2000);
  }, []);

  return (
    <main className="bg-light w-full">
      <section className="section-container h-screen m-auto flex justify-center items-center">
        <div className="flex flex-col gap-12">
          <h1 className="text-6xl font-title font-bold w-3/5 pr-6 text-right leading-tight border-r-[1.5px] border-dark">
            I build
            <br />
            <span className="bg-dark text-light px-2">{title}</span>
          </h1>
          <p className="pl-6 w-3/5 self-end border-l-[1.5px] border-dark">
            Hi, I am Jun Yang, a web developer based in Kuala Lumpur, Malaysia.
            <br />
            <br />I spend a majority of my time working on backend development,
            but I also enjoy dabbling in frontend development and design on the
            side. I find myself drawn to the minimalist design approach and aim
            to implement this style into my work.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Hero;
