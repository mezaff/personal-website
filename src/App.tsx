import About from "./components/About";
import Contact from "./components/Contact";
import Introduce from "./components/Introduce";
import PageContainer from "./components/Layouts/PageContainer";
import SectionContainer from "./components/Layouts/SectionContainer";
import Portfolio from "./components/Portfolio";
import ProfileSide from "./components/ProfileSide";
import Skill from "./components/Skill";

function App() {
  return (
    <div className="flex flex-col md:flex-row-reverse justify-center items-center w-full h-full">
      <ProfileSide />
      <PageContainer className="md:w-[50%]">
        <SectionContainer id="home">
          <Introduce />
        </SectionContainer>
        <SectionContainer id="about">
          <About />
        </SectionContainer>
        <SectionContainer id="skills">
          <Skill />
        </SectionContainer>
        <SectionContainer id="projects">
          <Portfolio />
        </SectionContainer>
        <SectionContainer id="contact">
          <Contact />
        </SectionContainer>
      </PageContainer>
      <div className="md:w-[5%]"></div>
    </div>
  );
}

export default App;
