import { 
    Box, 
    Container, 
    Typography,
    Divider,
    Button
} from "@mui/material";
import { motion } from "framer-motion";
import Layout from "./Layout";

export default function About() {
  return (
    <Layout>
        <Box
        id="about"
        sx={{
            width: "100%",
            minHeight: "100vh",
            backgroundColor: "#2e2e2e", // Dark background
            color: "white", // White text
        }}
        >
            <Box
            sx={{
                mt: 5,
                width: "100%",
                minHeight: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#2e2e2e", // Dark background
                color: "white", // White text
                padding: "40px 20px",
            }}
            >
                <Container
                    sx={{
                    maxWidth: "800px",
                    textAlign: "center",
                    }}
                >
                    <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: "20px", color: "white" }}>
                    About <span style={{color: "#00ff77"}}>Myself</span>
                    </Typography>
                    <Typography variant="h6" sx={{ lineHeight: "1.6", fontSize: "18px" }}>
                    Hi, I’m <strong>Raffy</strong>, a front-end developer and editor specializing in user-friendly websites, web apps, and basic video/photo editing.
                    I use technologies like <strong>HTML5, CSS3, JavaScript, React, and WordPress</strong> to bring your ideas to life.
                    </Typography>
                </Container>
                
                <Box
                    sx={{
                        width: "100%",
                    }}
                >
                    <Divider
                        sx={{
                        mt: 4,
                        borderColor: "#00ff77",
                        width: "150vh",
                        mx: "auto",
                        borderBottomWidth: "2px",
                        }}
                    />
                </Box>

                <Container
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        mt: 4,
                    }}
                >
                    <Box
                        sx={{
                            border: `1px solid rgb(255, 255, 255)`,
                            margin: "0 20px 0 0",
                        }}
                    >
                        <Box
                            component="img"
                            src="/img/about.JPG"
                            alt=""
                            width={400}
                            height={600}
                            sx={{
                            objectFit: 'cover',
                            display: 'block',
                            width: '100%',
                            height: '100%',
                            }}
                        />
                    </Box>
                   <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                        }}
                        >
                        <Typography variant="h5" sx={{ fontWeight: "bold", color: "white" }}>
                            Hello, I'm <span style={{ color: "#00ff77" }}>Raffy Posadas</span>
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: "1.6", fontSize: "18px" }}>
                            I am a front-end developer eager to learn and collaborate within a team, despite my lack
                            of experience. I would be thrilled to become a part of a company. I am enthusiastic
                            about contributing my skill to exciting projects. I am eager to enhance my technical abilities
                            and grow alongside a team of talented professionals. I'm quick learner and thrive in environments where
                            innovation and collaboration are valued. I look forward to the opportunity to make a
                            meaningful impact and learn from experienced developers who can guide my journey
                            in the tech industry.
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: "1.6", fontSize: "18px" }}>
                            Name: Raffy<br />
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: "1.6", fontSize: "18px" }}>
                            Contact: 09077759308<br />
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: "1.6", fontSize: "18px" }}>
                            Email: raffy.posadas@hcdc.edu.ph<br />
                        </Typography>

                        <motion.div
                            whileHover={{
                                x: [0, -5, 5, -5, 5, 0], // Left-right shake effect
                                transition: { duration: 0.4 },
                            }}
                        >
                            <Button
                                component="a"
                                href="/Raffy_Posadas.pdf"
                                download
                                sx={{
                                    border: "1px solid #00ff77",
                                    backgroundColor: "transparent",
                                    color: "white",
                                    padding: "12px 40px",
                                    width: "200px",
                                    fontSize: "16px",
                                    textTransform: "none",
                                    "&:hover": {
                                        backgroundColor: "#00ff77",
                                        color: "black",
                                    },
                                }}
                            >
                                Download CV
                            </Button>
                        </motion.div>
                        
                        </Box>

                    <Box>

                    </Box>
                </Container>
            </Box>
        </Box>
    </Layout>
  );
}
