import { PencilRuler } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const skills = [
  {
    id: 1,
    name: "HTML",
    img: "/images/html.svg",
  },
  {
    id: 2,
    name: "CSS",
    img: "/images/css.svg",
  },
  {
    id: 3,
    name: "Javascript",
    img: "/images/javascript.svg",
  },
  {
    id: 4,
    name: "Typescript",
    img: "/images/typescript.svg",
  },
  {
    id: 5,
    name: "PHP",
    img: "/images/php.svg",
  },
  {
    id: 6,
    name: "Node JS",
    img: "/images/nodejs.svg",
  },
  {
    id: 7,
    name: "React JS",
    img: "/images/react.svg",
  },
  {
    id: 8,
    name: "Bootstrap",
    img: "/images/bootstrap.svg",
  },
  {
    id: 9,
    name: "Tailwind",
    img: "/images/tailwind.svg",
  },
  {
    id: 10,
    name: "MySQL",
    img: "/images/mysql.svg",
  },
  {
    id: 11,
    name: "Premiere Pro",
    img: "/images/premierepro.svg",
  },
  {
    id: 12,
    name: "After Effects",
    img: "/images/aftereffects.svg",
  },
  {
    id: 13,
    name: "Photoshop",
    img: "/images/photoshop.svg",
  },
  {
    id: 14,
    name: "Corel Draw",
    img: "/images/coreldraw.svg",
  },
  {
    id: 15,
    name: "Davinci",
    img: "/images/davinci.svg",
  },
];

const Skill = () => {
  return (
    <div className="flex flex-col items-center md:items-end px-5 gap-4 md:mt-20">
      <div className="flex flex-row gap-2 justify-center items-center self-center md:self-end border-2 rounded-full py-2 px-4">
        <PencilRuler />
        <p className="text-sm font-semibold">SKILLS</p>
      </div>
      <h1 className="text-3xl md:text-5xl leading-none text-center md:text-end max-w-5xl font-semibold mb-5 md:mt-5">
        My <span className="text-[#58C4DC]">Expertise</span>
      </h1>
      <div className="flex justify-center items-center gap-3 self-center">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill) => (
            <Card
              key={skill.id}
              className="w-40 h-40 flex flex-col items-center justify-center"
            >
              <CardContent className="flex flex-col items-center justify-between gap-3 h-2/3">
                <img src={skill.img} alt={skill.name} className="w-1/2" />
                <p className="text-sm font-semibold">{skill.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
