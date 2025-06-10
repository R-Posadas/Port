import {React, useEffect, useState } from "react";
import {Box , Typography, Button} from "@mui/material";
import { color, motion } from "framer-motion";
import Typist from "react-typist";
import Layout from "./Layout";
import { Typewriter } from 'react-simple-typewriter'

const roles = ["Web Developer", "Raffy", "Editor"];

export default function Home({ user }) {
    const [loop, setLoop] = useState(0);

    useEffect(() => {
    const timeout = setTimeout(() => {
            setLoop(prev => (prev + 1) % roles.length);
        }, 3000);
        return () => clearTimeout(timeout);
    }, [loop]);

    return (
        <Layout>
            <Box id="home">
                <Box
                    sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "20px",
                    }}
                >

                    {/* Heading */}
                    {/* <Typography
                    variant="h1"
                    sx={{
                        zIndex:20,
                        color: "white",
                        fontWeight: "bold",
                        textAlign: "center",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)", // Adding text shadow
                    }}
                    >
                        I am{" "}
                        <Box component="span" sx={{ display: "inline-flex", ml: 1 }}>
                            <Typist key={loop} cursor={{ show: false }}>
                                <span style={{ color: "#00ff77" }}>{roles[loop]}</span>
                            </Typist>
                        </Box>
                    </Typography> */}


                    <Typography variant="h1"
                    sx={{
                        zIndex:20,
                        color: "white",
                        fontWeight: "bold",
                        textAlign: "center",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)", // Adding text shadow
                    }}
                    >
                    I am <span style={{ color: '#00ff77' }}>
                        <Typewriter
                        words={['Web Developer', 'Raffy', 'Editor']}
                        loop={0}
                        cursor
                        cursorStyle="|"
                        typeSpeed={80}
                        deleteSpeed={60}
                        delaySpeed={1000}
                        
                        />
                    </span>
                    </Typography>


                    {/* Buttons */}
                    <Box sx={{ display: "flex", gap: "20px" }}>
                    {["My Work", "Hire Me"].map((text, index) => (
                        <motion.div
                        key={index}
                        whileHover={{
                            x: [0, -5, 5, -5, 5, 0], // Left-right shake effect
                            transition: { duration: 0.4 },
                        }}
                        >
                        <Button
                            sx={{
                            border: "1px solid #00ff77",
                            backgroundColor: "transparent",
                            color: "white",
                            padding: "12px 40px",
                            minWidth: "200px",
                            fontSize: "16px",
                            textTransform: "none",
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
            </Box>
        </Layout>
    );
}
