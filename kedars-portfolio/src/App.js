import { ThemeProvider } from "styled-components";
import "./App.css";
import GlobalStyle from "./globalStyles";
import { LightTheme } from "./Theme";
import { Route, Switch, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
//Components
import Main from "./Components/main";
import AboutPage from "./Components/AboutPage";
import BlogPage from "./Components/BlogPage";
import WorkPage from "./Components/WorkPage";
import MySkillsPage from "./Components/MySkillsPage";
import SoundBar from "./subComponents/SoundBar";

function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={LightTheme}>
        <SoundBar />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/blog" component={BlogPage} />
            <Route exact path="/work" component={WorkPage} />
            <Route exact path="/skills" component={MySkillsPage} />
          </Switch>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
