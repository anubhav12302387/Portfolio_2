import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import Hero from "./components/Sections/Hero"; 
import { BrowserRouter } from "react-router-dom";
import Skills from "./components/Sections/Skills";
import Experience from "./components/Sections/Experience";
import Education from "./components/Sections/Eduaction";
// import DogCat from "./components/canvas/Stars";
import Contact from "./components/Sections/Contact";
import Footer from "./components/Sections/Footer";
import Sparkles from "./assets/sss";
// import StarCanvas from "../canvas/Stars";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  height: 90vh;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
        <Body>
          <Sparkles />
          <div>
          <Hero />
          <Wrapper>
          <Skills />
          <Experience />
          </Wrapper>
          <Wrapper>
          <Education />
          <Contact />
          </Wrapper>
          <Footer />
          </div>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
