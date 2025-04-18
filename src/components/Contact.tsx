import { Mail } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center md:items-end px-5 gap-4 md:w-full md:h-full">
      <div className="flex flex-row gap-2 justify-center items-center self-center md:self-end border-2 rounded-full py-2 px-4">
        <Mail />
        <p className="text-xs md:text-sm font-semibold">CONTACT</p>
      </div>
      <h1 className="text-3xl md:text-5xl leading-none text-center md:text-end max-w-5xl font-semibold mb-5 md:mt-5">
        Let's Work <span className="text-[#58C4DC]">Together!</span>
      </h1>
      <form action="" className="flex flex-col items-center gap-5 mt-5">
        <div className="flex flex-col md:flex-row gap-5">
          <Label className="flex flex-col items-start">
            FULLNAME
            <Input type="text" placeholder="Your Name" className="md:w-100" />
          </Label>
          <Label className="flex flex-col items-start">
            EMAIL
            <Input
              type="email"
              placeholder="Your email address"
              className="w-80 md:w-100"
            />
          </Label>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <Label className="flex flex-col items-start">
            PHONE
            <Input
              type="number"
              placeholder="Your phone number"
              className="w-80 md:w-100"
            />
          </Label>
          <Label className="flex flex-col items-start">
            COUNTRY
            <Input
              type="text"
              placeholder="Your country"
              className="w-80 md:w-100"
            />
          </Label>
        </div>
        <div>
          <Label className="flex flex-col items-start">
            MESSAGE
            <Textarea
              placeholder="Write your message here..."
              className="w-80 md:w-205 h-30 md:h-50 resize-none"
            />
          </Label>
        </div>
        <div className="self-start md:self-end">
          <Button className="flex justify-center items-center text-center mt-1 bg-[#58C4DC] border-2 border-[#58C4DC] hover:bg-transparent hover:border-[#58C4DC] hover:border-2 hover:text-[#58C4DC] rounded-full cursor-pointer hover:scale-105 text-lg transition-all duration-200 ease-in-out">
            SEND MESSAGE
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
