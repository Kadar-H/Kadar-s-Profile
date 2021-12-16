import { React, useState, useEffect } from "react";
import styled from "styled-components";
import Coding from "../assets/Images/coding.jpeg";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { Blogs } from "../data/BlogData";
import BlogComponent from "./BlogComponent";
import Anchor from "../subComponents/Anchor";
import BackgroundTitle from "../subComponents/BackgroundTitle";
import { motion } from "framer-motion";

const MainContainer = styled(motion.div)`
  /* background-image: url(${Coding}); */
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100vw;
`;

const Container = styled.div`
  background-color: ${(props) => "rgba(${props.theme.bodyRgba},0.8)"};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
`;

// Framer motion
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const BlogPage = () => {
  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 70) / 30;
    setNumbers(parseInt(num));
  }, []);

  return (
    <>
      <MainContainer
        variants={container}
        initial="hidden"
        animate="show"
        exit={{
          opacity: 0,
          transition: { duration: 0.5 },
        }}
      >
        <Container>
          <LogoComponent />
          <PowerButton />
          <SocialIcons />
          <Anchor numbers={numbers} />
          <Center>
            <Grid>
              {Blogs.map((blog) => {
                return <BlogComponent key={blog.id} blog={blog} />;
              })}
            </Grid>
          </Center>
          <BackgroundTitle
            text="THE KING's & QUEEN'S PROJECT"
            top="5rem"
            left="5rem"
          />
        </Container>
      </MainContainer>
    </>
  );
};

export default BlogPage;
