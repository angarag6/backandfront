import React from "react";
import Navbar from "@/component/Navbar";
import Login from "@/component/Login";
import Footer from "@/component/Footer";
import { Stack } from "@mui/material";

const page = () => {
  return (
    <Stack sx={{ display: "flex", flexDirection: "column", gap: "60px" }}>
      <Navbar />
      <Stack
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Login />
      </Stack>
      <Footer />
    </Stack>
  );
};

export default page;