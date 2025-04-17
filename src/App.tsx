import About from "./components/About";
import Introduce from "./components/Introduce";
import PageContainer from "./components/Layouts/PageContainer";
import SectionContainer from "./components/Layouts/SectionContainer";
import ProfileSide from "./components/ProfileSide";
import Skill from "./components/Skill";

function App() {
  return (
    <div className="flex flex-col md:flex-row-reverse justify-center items-center w-full h-full">
      <ProfileSide />
      <PageContainer className="md:w-[50%]">
        <SectionContainer
          id="home"
          className="h-full md:h-screen flex flex-col justify-center items-center mb-15 w-full"
        >
          <Introduce />
        </SectionContainer>
        <SectionContainer
          id="about"
          className="h-full md:h-screen flex flex-col justify-center items-center mb-15"
        >
          <About />
        </SectionContainer>
        <SectionContainer
          id="skills"
          className="h-full md:h-screen flex flex-col justify-center items-center mb-15"
        >
          <Skill />
        </SectionContainer>
      </PageContainer>
      <div className="md:w-[5%]"></div>
    </div>
  );
}

export default App;
