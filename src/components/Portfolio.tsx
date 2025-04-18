import { AppWindow } from "lucide-react";

const portfolios = [
  {
    id: 1,
    name: "PPTM PSB",
    description: "New Student Registration System",
    img: "/images/pptmpsb.jpeg",
  },
  {
    id: 2,
    name: "CHILL",
    description: "Movie Streaming Platform",
    img: "/images/chill.jpeg",
  },
];

const Portfolio = () => {
  return (
    <div className="flex flex-col justify-center items-center md:items-end px-5 gap-4 md:w-full md:h-full">
      <div className="flex flex-row gap-2 justify-center items-center self-center md:self-end border-2 rounded-full py-2 px-4">
        <AppWindow />
        <p className="text-xs md:text-sm font-semibold">PORTFOLIO</p>
      </div>
      <h1 className="text-3xl md:text-5xl leading-none text-center md:text-end max-w-5xl font-semibold md:mb-5 md:mt-5">
        Featured <span className="text-[#58C4DC]">Portfolios</span>
      </h1>
      {portfolios.map((portfolio) => (
        <div
          key={portfolio.id}
          className="group relative mt-5 md:mb-15 rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src={portfolio.img}
            alt={portfolio.name}
            className="transition-all hover:scale-[1.1] duration-300 ease-in-out"
          />
          <div className="hidden md:flex absolute bottom-0 left-0 right-0 dark:bg-black/60 bg-white/60  sm:rounded-none backdrop-blur-sm ">
            <p className=" text-2xl px-5 py-2 text-center">
              {portfolio.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
