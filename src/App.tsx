import PageContainer from "./components/Layouts/PageContainer";
import SectionContainer from "./components/Layouts/SectionContainer";
import ProfileSide from "./components/ProfileSide";

function App() {
  return (
    <div className="flex flex-col md:flex-row-reverse md:justify-center items-center">
      <ProfileSide />
      <PageContainer className="w-2/3">
        <SectionContainer className=" h-screen">
          <div></div>
          <div></div>
          <h1 className="text-black">hello world</h1>
        </SectionContainer>
      </PageContainer>
    </div>
  );
}

export default App;
