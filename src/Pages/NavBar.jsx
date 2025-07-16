import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log("SCROLLING");
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "MyWork", href: "#myWork" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        top: 0,
        width: "100%",
        zIndex: 1100,
        backgroundColor: scrolled ? "rgba(0, 0, 0, 0.81)" : "transparent",
        boxShadow: scrolled ? "0 4px 12px rgb(0, 0, 0)" : "none",
        transition: "all 0.3s ease-in-out",
        backdropFilter: scrolled ? "blur(6px)" : "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="img/RP.png" alt="logo" width="100px" />
        </Box>

        <Box>
          {navLinks.map((link, index) => (
            <Button
              key={index}
              component="a"
              href={link.href}
              sx={{
                textTransform: "none",
                color: "#00ff77",
                backgroundColor: "transparent",
                borderRadius: 0,
                padding: "8px 20px",
                position: "relative",
                "&:hover": {
                  borderBottom: "solid 2px #00ff77",
                },
              }}
            >
              {link.name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
