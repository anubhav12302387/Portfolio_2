import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import Hero from "./components/Sections/Hero"; // Make sure Hero component is imported
import { BrowserRouter } from "react-router-dom";
import Skills from "./components/Sections/Skills";
import Experience from "./components/Sections/Experience";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  height: 90vh;
  overflow-x: hidden;
  position: relative;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
        <Body>
          <Hero />
          <Skills />
          <Experience />
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
