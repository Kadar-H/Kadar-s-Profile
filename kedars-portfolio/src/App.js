import { ThemeProvider } from "styled-components";
import "./App.css";
import GlobalStyle from "./globalStyles";
import { LightTheme } from "./Theme";
import { AnimatePresence } from "framer-motion";

//Components
import Main from "./Components/main";
import AboutPage from "./Components/AboutPage";
import BlogPage from "./Components/BlogPage";
import WorkPage from "./Components/WorkPage";
import MySkillsPage from "./Components/MySkillsPage";
import SoundBar from "./subComponents/SoundBar";

import { Routes, Route, useLocation } from "react-router-dom";



function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={LightTheme}>
        <SoundBar />

        {/* For framer-motion animation on page change! */}
        {/* Changed prop from exitBefore to mode */}
        <AnimatePresence mode='wait'>
          {/* Changed Switch to Routes */}

          <Routes key={location.pathname} location={location} >
            {/* Changed component to element */}

            <Route path="/" element={<Main />} />

            <Route path="/about" element={<AboutPage />} />

            <Route path="/blog" element={<BlogPage />} />

            <Route path="/work" element={<WorkPage />} />

            <Route path="/skills" element={<MySkillsPage />} />
            {/* Below is to catch all the other routes and send the user to main component,
you can add custom 404 component or message instead of Main component*/}
            <Route path="*" element={<Main />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;

