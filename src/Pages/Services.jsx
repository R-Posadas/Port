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
            title: "Editing",
            icon: "mdi:movie-edit",
            description: "I provide basic video and photo editing services, including trimming, color correction, and simple effects to enhance your content.",
        },
        {
            title: "Comic Colorist",
            icon: "mdi:palette-outline",
            description: "I provide flat coloring services for comics, applying clean, consistent base colors to artwork to enhance clarity and support the overall narrative.",
        },
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
            backgroundColor: "#2e2e2e", 
            color: "white",
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
                backgroundColor: "#2e2e2e", 
                color: "white", 
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
                        My <span style={{color: "#00ff77"}}>Services</span>
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
