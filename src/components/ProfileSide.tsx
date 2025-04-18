import SosmedIcon from "./SosmedIcon";
import { Button } from "./ui/button";

const ProfileSide = () => {
  return (
    <div className="w-[45%] flex justify-center items-center  md:self-baseline py-8 px-10 md:sticky top-0">
      <div className="flex flex-col justify-center items-center border border-secondary-foreground rounded-3xl p-5 space-y-3">
        <div className="flex justify-between items-center gap-8 mt-2">
          <h5 className="text-3xl font-extrabold">Marchenda</h5>
          <p className="text-end font-semibold">Software Engineer</p>
        </div>
        <img
          src="/images/profile-img.jpg"
          alt="my-image"
          className="rounded-2xl w-2/3 h-2/3 object-cover"
        />
        <div className="flex flex-col justify-center items-center">
          <p className="font-semibold">mezafuwandhana@gmail.com</p>
          <p className="font-bold text-xl">Base in Madiun, ID</p>
        </div>
        <div className="flex gap-2 justify-between items-center mt-2">
          <SosmedIcon url={import.meta.env.VITE_GITHUB_URL} type="github" />
          <SosmedIcon url={import.meta.env.VITE_LINKEDIN_URL} type="linkedin" />
          <SosmedIcon
            url={import.meta.env.VITE_INSTAGRAM_URL}
            type="instagram"
          />
          <SosmedIcon url={import.meta.env.VITE_TIKTOK_URL} type="tiktok" />
        </div>
        <Button className="flex justify-center items-center text-center mt-1 bg-[#58C4DC] border-2 border-[#58C4DC] hover:bg-transparent hover:border-[#58C4DC] hover:border-2 hover:text-[#58C4DC] rounded-full cursor-pointer hover:scale-105 text-lg transition-all duration-200 ease-in-out">
          GET IN TOUCH
        </Button>
        <footer className="flex p-4">
          <p className="w-full text-center text-muted-foreground">
            © 2025 Marchenda Ezafuwandhana. All rights reserved
          </p>
        </footer>
      </div>
    </div>
  );
};

export default ProfileSide;
