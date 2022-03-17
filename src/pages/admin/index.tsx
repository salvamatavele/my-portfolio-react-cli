import { Box, Container, Link, Toolbar } from "@mui/material";
import { NextPage } from "next";
import Image from 'next/image'
import React from "react";
import Head from 'next/head'
import Side from "../../componets/Drawer";

const Dashboard: NextPage = () => {
  const drawerWidth = 240;
  return (
    <>
      <Head>
        <title>Salvado&apos;s Portfolio Admin page</title>
      </Head>
      <Box sx={{ display: "flex" }}>
        <Side />
        <Box
          component="main"
          sx={{
            flowGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` }, 
          }}
        >
          <Toolbar />
          <Link href={"/"}> Salva</Link>
          <Container> here all info oky <h1>s</h1> <Image src="/logo-img.png" width={50} height={50} alt="Node" /> </Container>
        </Box>
      </Box>
    </>
  );
};
export default Dashboard;
