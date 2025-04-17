import About from "./components/About";
import Introduce from "./components/Introduce";
import PageContainer from "./components/Layouts/PageContainer";
import SectionContainer from "./components/Layouts/SectionContainer";
import ProfileSide from "./components/ProfileSide";
import Skill from "./components/Skill";

function App() {
  return (
    <div className="flex flex-col md:flex-row-reverse md:justify-center items-center">
      <ProfileSide />
      <PageContainer className="w-[50%]">
        <SectionContainer
          id="home"
          className="h-screen flex flex-col justify-center items-center"
        >
          <Introduce />
        </SectionContainer>
        <SectionContainer
          id="about"
          className="h-screen flex flex-col justify-center items-center"
        >
          <About />
        </SectionContainer>
        <SectionContainer
          id="skills"
          className="h-screen flex flex-col justify-center items-center"
        >
          <Skill />
        </SectionContainer>
      </PageContainer>
      <div className="w-[5%]"></div>
    </div>
  );
}

export default App;
