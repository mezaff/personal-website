import { User } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center md:items-end px-5 gap-4 md:w-full md:h-full">
      <div className="flex flex-row gap-2 justify-center items-center self-center md:self-end border-2 rounded-full py-2 px-4 md:mt-15">
        <User />
        <p className="text-xs md:text-sm font-semibold">ABOUT</p>
      </div>
      <h1 className="text-3xl md:text-5xl leading-none md:text-end max-w-5xl font-semibold md:mt-10">
        Code, Story, and <span className="text-[#58C4DC]">Beyound</span>
      </h1>
      <p className="max-w-3xl md:text-lg  md:text-end text-primary md:mt-10">
        Hi! I’m Marchenda, a passionate and adaptable Software Engineer with a
        solid foundation in full-stack development. Recently graduated, I
        specialize in JavaScript, TypeScript, Node.js, React.js, and modern web
        technologies. I’ve completed an intensive bootcamp to sharpen my skills.
      </p>
      <p className="max-w-3xl md:text-lg md:text-end text-primary mt-5">
        I’m eager to contribute to teams focused on building impactful
        solutions, utilizing my ability to quickly learn new technologies, write
        clean code, and develop responsive, high-performance applications. I’m
        motivated, detail-oriented, and driven to continuously improve and solve
        complex problems.
      </p>
      <div className="flex flex-row gap-10 justify-center items-center self-center md:self-end py-2 px-4 mt-10">
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl md:text-7xl md:text-end font-bold text-[#58C4DC]">
            1+
          </h1>
          <p className="text-sm md:text-lg">YEARS OF EXPERIENCE</p>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl md:text-7xl md:text-end font-bold text-[#58C4DC]">
            5+
          </h1>
          <p className="text-sm md:text-lg">PROJECT COMPLETED</p>
        </div>
      </div>
    </div>
  );
};

export default About;
