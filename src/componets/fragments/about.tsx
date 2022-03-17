import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Menu, SystemSecurityUpdate } from "@mui/icons-material";
import { NextPage } from "next";
import React, { useEffect, useState, memo } from "react";

import axios from "../../lib/defaults";

interface IAbout {
  id: number;
  user_id: number;
  content: string;
}
interface ISkill {
  id: number;
  name: string;
  type: string;
}
interface ICv {
  id: number;
  doc: string;
}

const About: NextPage = () => {
  //states
  const [about, setAbout] = useState<IAbout>();
  const [cv, setCv] = useState<ICv>();

  useEffect(() => {
    async function getAbout() {
      try {
        const response = await axios.get("/about");
        setAbout(response.data);
      } catch (error: any) {
        console.log(error.response);
      }
    }
    getAbout();
  }, []);

  useEffect(() => {
    async function getCv() {
      try {
        const response = await axios.get("about/cv");
        setCv(response.data);
      } catch (error: any) {
        console.log(error.response);
      }
    }
    getCv();
  }, []);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} sx={{ boxShadow: 2 }}>
          <Card sx={{ background: "#f3e5f5" }}>
            <CardContent>
              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                  color: "#8e24aa",
                  mt: 4,
                }}
              >
                1+ Years
                <br />
                Experience
              </Typography>
              <Divider />
              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                  color: "#FFA07A",
                  mt: 4,
                }}
              >
                5+
                <br />
                Jobs Done
              </Typography>
              <Divider />
              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                  color: "#808080",
                  mt: 4,
                }}
              >
                11+
                <br />
                GitHub&apos;s repositories
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} sx={{ boxShadow: 3 }}>
          <Card sx={{ color: "#000000" }}>
            <CardContent>
              <Typography
                variant="h4"
                sx={{ textAlign: "center", color: "#8e24aa" }}
              >
                Skills
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  p: 1,
                  m: 1,
                }}
              >
                <Box component="div">
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      p: 1,
                    }}
                  >
                    <img
                      width={40}
                      height={30}
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    />
                    <Typography variant="h6">React.js</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      p: 1,
                    }}
                  >
                    <img
                      width={40}
                      height={30}
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                    />{" "}
                    <Typography variant="h6">Next.js</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      p: 1,
                    }}
                  >
                    <Typography variant="h6"> Vue.js</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      p: 1,
                    }}
                  >
                    <Typography variant="h6"> Vue.js</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      p: 1,
                    }}
                  >
                    <Typography variant="h6"> Vue.js</Typography>
                  </Box>
                </Box>
                <Box component="div">
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      p: 1,
                    }}
                  >
                    <Typography variant="h6"> Javascript</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      p: 1,
                    }}
                  >
                    <Typography variant="h6"> Typescript</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      p: 1,
                    }}
                  >
                    <Typography variant="h6"> Node.js</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      p: 1,
                    }}
                  >
                    <Typography>Adonis.js</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      p: 1,
                    }}
                  >
                    <Typography variant="h6">Php</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyConent: "space-between",
                      p: 1,
                    }}
                  >
                    <Typography variant="h6">Laravel</Typography>
                  </Box>
                </Box>
              </Box>
              <Divider />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  p: 1,
                  m: 1,
                }}
              >
                <Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" />
                    <Typography variant="h5">Git</Typography>
                  </Box>
                  <Box>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
                    <Typography variant="h6">GitHub</Typography>
                  </Box>
                </Box>
                <Typography variant="button">
                  <Button startIcon={<Menu />}>herruko</Button>
                  <br />
                  <Button startIcon={<SystemSecurityUpdate />}>Linux</Button>
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} sx={{ boxShadow: 4 }}>
          <Card>
            <CardContent>
              <Typography
                variant="h4"
                sx={{ color: "#8e24aa", textAlign: "center" }}
              >
                My Awesome Services
              </Typography>
              <Typography
                sx={{ mb: 1.5, textAlign: "justify" }}
                color="text.secondary"
              >
                {about?.content}
                Hi, I am Salvado, a FullStack Developer. Computer Engineer,
                specialized in software development. Experience in all stages of
                the development cycle of dynamic projects. Well-versed in
                various programming languages, able to quickly learn new
                processes, technologies and adaptability. Self-motivated with
                strong organizational and time management skills.. i have
                developed and managed a lot of individual and collective
                projects, most of these projects were web platforms. I have
                advanced knowledge of PHP, Laravel, Html, CSS, Javascript,
                Typescript, Adonis Js, React js, CSS frameworks...
              </Typography>
              <Button
                fullWidth
                sx={{ background: "#8e24aa", m: 0 }}
                variant="contained"
                href="#contained-buttons"
              >
                Dowload cv {cv?.id} <h1>{cv?.id}</h1>
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default memo(About);
