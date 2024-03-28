"use client";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import Navbar from "@/component/Navbar";
import Test from "@/component/Test";
import { Background } from "@/utils/allicons";
import { Box, Typography } from "@mui/material";
import homebg from "@/utils/HomeFood2.png";

export default function Home() {
  const [modal, setModal] = React.useState<boolean>(false);
  const modalHandle = () => {
    setModal(!modal);
  };

  return (
    <Stack>
 
      <Navbar />
      <Box sx={{ backgroundColor: "#18BA51", gap: "228px", position: "relative" }} >
        {/* <Background/> */}
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          color={"white"}
          padding={"20px 100px"}
          height={1000}
         
        >
          <Box display={"flex"} flexDirection={"column"} gap={3}>
            <Typography fontSize={50} fontWeight={"600"}>
              Pinecone <br /> Food delivery
            </Typography>
            <hr />
            <Typography fontSize={20}>
              Horem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
            </Typography>
          </Box>

          <Image src={homebg} width={600} alt="Food" />
        </Box>
      </Box>
    </Stack>
  );
}
