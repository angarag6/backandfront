"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import { PermIdentitySharp, ShoppingBasketSharp } from "@mui/icons-material";
import { Pineconeblack } from "@/utils/allicons";
import SearchAppBar from "./Search";
import React, { useState } from "react";
import Dialog from "@/component/Dialog";
import Link from "next/link";

export default function Navbar() {
  const pages = ["НҮҮР", "ХООЛНЫ ЦЭС", "ХҮРГЭЛТИЙН БҮС"];
  const [activeMenu, setActiveMenu] = useState(0);
  const handleClick = (index: number) => setActiveMenu(index);
  const styles = {
    btn: {
      color: "black",
      "&:hover": {
        backgroundColor: "transparent",
      },
      ungu: {
        color: "green",
      },
    },
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Stack alignItems={"center"}>
      <Stack
        width={"1440px"}
        direction={"row"}
        justifyContent={"space-between"}
        padding={"20px 100px 10px"}
      >
        <Stack direction={"row"} gap={"24px"}>
          <Pineconeblack />
          <Stack direction={"row"} gap={"20px"}>
            {pages.map((menu, index) => (
              <Box key={index} onClick={() => handleClick(index)}>
                <Typography sx={activeMenu === index ? { color: "green" } : {}}>
                  {menu}
                </Typography>
              </Box>
            ))}

            {/* <Typography color={"green"}>НҮҮР</Typography>
            <Typography>ХООЛНЫ ЦЭС</Typography>
            <Typography>ХҮРГЭЛТИЙН БҮС</Typography> */}
          </Stack>
        </Stack>

        <Stack direction={"row"} gap={"24px"}>
          <SearchAppBar />
          <Button
            sx={styles.btn}
            children="Сагс"
            startIcon={<ShoppingBasketSharp />}
            disableRipple
          />
          {open && <Dialog onChange={handleClickOpen} />}
          <Dialog />
          {/* <Button sx={styles.btn} children="Нэвтрэх" startIcon={<PermIdentitySharp />} onClick={handleClickOpen} disableRipple/>
           */}
        </Stack>
      </Stack>
    </Stack>
  );
}
