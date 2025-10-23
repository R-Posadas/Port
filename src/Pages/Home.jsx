import React, { useEffect, useState } from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import Layout from "./Layout";
import { Typewriter } from "react-simple-typewriter";
import { useTheme } from "@mui/material/styles";

export default function Home() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Layout>
      <Box
        id="home"
        sx={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: isMobile ? 4 : 6,
          textAlign: "center",
          px: isMobile ? 2 : 6,
          backgroundColor: "#1c1c1c",
        }}
      >
        {/* 🔠 Responsive Heading */}
        <Typography
          variant={isMobile ? "h4" : isTablet ? "h3" : "h2"}
          sx={{
            color: "white",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
            lineHeight: 1.3,
            zIndex: 20,
          }}
        >
          I am{" "}
          <span style={{ color: "#00ff77" }}>
            <Typewriter
              words={["Web Developer", "Raffy", "Editor"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={60}
              delaySpeed={1000}
            />
          </span>
        </Typography>

        {/* 🖱️ Buttons */}
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? 2 : 4,
            alignItems: "center",
          }}
        >
          {["My Work", "Hire Me"].map((text, index) => (
            <motion.div
              key={index}
              whileHover={{
                x: [0, -5, 5, -5, 5, 0],
                transition: { duration: 0.4 },
              }}
            >
              <Button
                onClick={() => {
                  const targetId = text === "My Work" ? "myWork" : "contact";
                  const element = document.getElementById(targetId);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                sx={{
                  border: "1px solid #00ff77",
                  backgroundColor: "transparent",
                  color: "white",
                  padding: isMobile ? "10px 24px" : "12px 40px",
                  minWidth: isMobile ? "150px" : "200px",
                  fontSize: isMobile ? "14px" : "16px",
                  textTransform: "none",
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: "#00ff77",
                    color: "black",
                  },
                }}
              >
                {text}
              </Button>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Layout>
  );
}
