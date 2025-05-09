import { HouseIcon } from "lucide-react";

const Introduce = () => {
  return (
    <div className="flex flex-col md:items-end px-5 gap-4 w-full h-full">
      <div className="flex flex-row gap-2 justify-center items-center self-center md:self-end border-2 rounded-full py-2 px-4 md:mt-15">
        <HouseIcon />
        <p className="text-xs md:text-sm font-semibold">HOME</p>
      </div>
      <h1 className="text-3xl md:text-[78px] leading-none md:text-end md:max-w-5xl font-semibold md:mt-20">
        I'm <span className="text-[#58C4DC]">Marchenda</span>,
        <br />
        Junior Full-Stack Web Developer
      </h1>
      <p className="md:text-lg md:text-end text-primary md:max-w-3xl mt-5 md:mt-10">
        Graduated from Harisenin.com’s Full-Stack Web Developer bootcamp. I’m
        passionate about web development and love learning new technologies. I
        enjoy turning ideas into functional and user-friendly stuff.
      </p>
    </div>
  );
};

export default Introduce;
