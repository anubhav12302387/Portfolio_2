import styled, { ThemeProvider} from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";


function App() {
  return <ThemeProvider theme={darkTheme}>
    <Navbar/>
  </ThemeProvider>;
}

export default App;
