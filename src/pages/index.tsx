import {
  Box,
  CardMedia,
  Container,
  Grid,
  Link,
  Tab,
  Typography,
} from "@mui/material";
import { GitHub, Email, LinkedIn, FaceSharp } from "@mui/icons-material";
import type { NextPage } from "next";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import Head from "next/head";
import React, { ReactNode, SyntheticEvent, useState } from "react";

import About from "../componets/fragments/about";
import Blog from "../componets/fragments/blog";
import Contact from "../componets/fragments/contact";
import Nav from "../componets/Nav";
import Portfolio from "../componets/fragments/portfolio";
import styles from "../styles/Home.module.css";

interface TabPanelProps {
  children?: ReactNode;
  dir?: string;
  index: number;
  value: string;
}
  

const Home: NextPage = () => {
  // states
  const [value, setValue] = useState<string>("1");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Head>
        <title>Salvado&apos;s Portfolio</title>
      </Head>

      <Nav />
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                p: 1,
                m: 1,
              }}
            >
              <div className={styles.imagebg}>
                <CardMedia
                  component="img"
                  height="350"
                  width="400"
                  image="/logo-img.png"
                  alt="S M"
                  sx={{ borderRadius: 50 }}
                />
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h1" sx={{ color: "#FFA07A" }}>
                Hi! I Am
              </Typography>
              <Typography variant="h2" sx={{ color: "#8e24aa", my: 2 }}>
                Salvado
              </Typography>
              <Typography variant="h3" sx={{ color: "#808080", mb: 4 }}>
                Full-Stack Developer
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                p: 1,
                m: 1,
              }}
            >
              <Link title='github' target="_blank" href="https://github.com/salvamatavele">
                <GitHub />
              </Link>
              <Link title='email' target="_blank" href="/">
                <Email />
              </Link>
              <Link title='linkdin' target="_blank" href="/">
                <LinkedIn />
              </Link>
              <Link title='skype' target="_blank" href="/">
                <FaceSharp/> 
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ background: "#f3e5f5" }}>
              <TabList
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="secondary"
                variant="fullWidth"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="portfolio" value="1" />
                <Tab label="blog" value="2" />
                <Tab label="about" value="3" />
                <Tab label="contact" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Portfolio />
            </TabPanel>
            <TabPanel value="2">
              <Blog />
            </TabPanel>
            <TabPanel value="3">
              <About />
            </TabPanel>
            <TabPanel value="4">
              <Contact />
            </TabPanel>
          </TabContext>
        </Box>
      </Container>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by &nbsp;
          <span className={styles.logo}>
            <strong>DRY CODE</strong>
          </span>
        </a>
      </footer>
    </>
  );
};

export default Home;
