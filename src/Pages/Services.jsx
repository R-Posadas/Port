import { 
    Box, 
    Container, 
    Typography,
    Divider,
    Dialog,

} from "@mui/material";
import Layout from "./Layout";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Services() {

    const services = [
        {
            title: "Web Development",
            icon: "mdi:code-tags",
            description: "I create stunning, user-friendly websites and web apps using HTML5, CSS3, JavaScript, React, and WordPress for seamless, responsive designs and custom components.",
        },
        {
            title: "Video Editing",
            icon: "mdi:movie-edit",
            description: "I provide basic video and photo editing services, including trimming, color correction, and simple effects to enhance your content.",
        },
        {
            title: "Comic Colorist",
            icon: "mdi:palette-outline",
            description: "I provide flat coloring services for comics, applying clean, consistent base colors to artwork to enhance clarity and support the overall narrative.",
        },
    ];

    const certs = [
        { image: "/img/1.jpg" },
        { image: "/img/2.jpg" },
        { image: "/img/3.jpg" },
        { image: "/img/4.jpg" },
        { image: "/img/5.png" },
    ];

    const [open, setOpen] = useState(false);
    const [selectedImg, setSelectedImg] = useState(null);

    const handleOpen = (img) => {
        setSelectedImg(img);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedImg(null);
  };

  return (
    <Layout>
        <Box
        id="services"
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
                        My <span style={{color: "#00ff77"}}>Services & Certificate</span>
                    </Typography>
                    <Typography variant="h6" sx={{ lineHeight: "1.6", fontSize: "18px" }}>
                        I offera unique combination of front-end development and basic video/photo editing services to help you
                        build engaging websites, professional video content, and refine your written material for maximum impact.
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
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 4,
                    }}
                >
                    <Box
                        sx={{
                        display: "flex",
                        px: 4,
                        gap: 5,
                        flexWrap: "wrap",
                        justifyContent: "center",
                        }}
                    >
                        {services.map((service, i) => (
                        <Box
                            key={i}
                            sx={{
                            width: 300,
                            height: 300,
                            backgroundColor: "#1e1e1e",
                            color: "white",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            px: 3,
                            borderRadius: "12px",
                            transition: "all 0.3s ease",
                            cursor: "pointer",
                            "&:hover": {
                                transform: "scale(1.05)",
                                border: "none",
                                boxShadow: "0 0 15px rgba(0, 255, 119, 0.6)",
                            },
                            }}
                        >
                            <Icon
                            icon={service.icon}
                            width={50}
                            height={50}
                            style={{ color: "#00ff77", marginBottom: "16px" }}
                            />
                            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                            {service.title}
                            </Typography>
                            <Typography variant="body2" sx={{ lineHeight: 1.6, textAlign: "center" }}>
                            {service.description}
                            </Typography>
                        </Box>
                        ))}
                    </Box>
                    </Container>
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "40px 20px",
                    }}
                >
                    <Box
                        sx={{
                        overflow: "hidden",
                        width: "100%",
                        position: "relative",
                        }}
                    >
                        <motion.div
                            style={{
                                display: "flex",
                                whiteSpace: "nowrap",
                            }}
                            animate={{ x: ["0%", "-100%"] }}
                            transition={{
                                repeat: Infinity,
                                duration: 60,
                                ease: "linear",
                            }}
                        >
                        
                            {[...certs, ...certs].map((cert, i) => (
                                <Box
                                key={i}
                                sx={{
                                    flex: "0 0 auto",
                                    width: 300,
                                    height: 220,
                                    mx: 2,
                                    backgroundColor: "#1e1e1e",
                                    borderRadius: "12px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    cursor: "pointer",
                                    transition: "transform 0.3s ease",
                                    "&:hover": {
                                    transform: "scale(1.05)",
                                    },
                                }}
                                onClick={() => handleOpen(cert.image)}
                                >
                                <Box
                                    component="img"
                                    src={cert.image}
                                    alt="certificate"
                                    sx={{
                                    width: "90%",
                                    height: "90%",
                                    objectFit: "contain",
                                    }}
                                />
                                </Box>
                            ))}
                        </motion.div>
                    </Box>
                </Box>
                {/* Fullscreen Dialog */}
                <Dialog open={open} onClose={handleClose} maxWidth="lg">
                    <Box
                        component="img"
                        src={selectedImg}
                        alt="full certificate"
                        sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        backgroundColor: "black",
                        }}
                    />
                </Dialog>
            </Box>
        </Box>
    </Layout>
  );
}
