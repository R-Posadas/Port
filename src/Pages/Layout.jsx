import React from "react";
import { Box } from "@mui/material";
import NavBar from "./NavBar";
import { useEffect } from "react";

export default function Layout({ children }) {
  
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column"}}>
      {children}
    </Box>
  );
}
