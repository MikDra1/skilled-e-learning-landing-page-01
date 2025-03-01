import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PopularCoursesSection from "./components/PopularCoursesSection";
import { ProjectProvider } from "./contexts/ProjectProvider";

const Container = styled.div`
  overflow-x: hidden;
  position: relative;
  min-height: 100vh;
`;

function App() {
  return (
    <ProjectProvider>
      <Container>
        <Header />
        <Hero />
        <PopularCoursesSection />
        <Footer />
      </Container>
    </ProjectProvider>
  );
}

export default App;
