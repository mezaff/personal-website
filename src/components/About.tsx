import { User } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center md:items-end px-5 gap-4 md:w-full md:h-full mt-40">
      <div className="flex flex-row gap-2 justify-center items-center self-end border-2 rounded-full py-2 px-4 md:mt-15">
        <User />
        <p className="text-sm font-semibold">ABOUT</p>
      </div>
      <h1 className="text-5xl leading-none text-end max-w-5xl font-semibold md:mt-10">
        Code, Story, and <span className="text-[#58C4DC]">Beyound</span>
      </h1>
      <p className="max-w-3xl text-lg text-end text-primary mt-10">
        Hi! I’m Marchenda, a passionate and adaptable Software Engineer with a
        solid foundation in full-stack development. Recently graduated, I
        specialize in JavaScript, TypeScript, Node.js, React.js, and modern web
        technologies. I’ve completed an intensive bootcamp to sharpen my skills.
      </p>
      <p className="max-w-3xl text-lg text-end text-primary mt-5">
        I’m eager to contribute to teams focused on building impactful
        solutions, utilizing my ability to quickly learn new technologies, write
        clean code, and develop responsive, high-performance applications. I’m
        motivated, detail-oriented, and driven to continuously improve and solve
        complex problems.
      </p>
      <div className="flex flex-row gap-10 justify-center items-center md:self-end py-2 px-4 mt-10">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-7xl font-bold text-[#58C4DC]">1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-7xl font-bold text-[#58C4DC]">5+</h1>
          <p>PROJECT COMPLETED</p>
        </div>
      </div>
    </div>
  );
};

export default About;
