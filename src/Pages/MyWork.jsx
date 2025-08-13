import { 
    Box, 
    Container, 
    Typography,
    Divider,
    Dialog,
    IconButton
} from "@mui/material";
import Layout from "./Layout";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

export default function MyWork() {
    const [open, setOpen] = useState(false);
    const [galleryImages, setGalleryImages] = useState([]);

    const services = [
        {
            title: "Phantohm Vapour",
            image: "/img/phantohm.jpg",
            description: "A vape shop POS system simplifies sales, inventory, and customer management for smoother operations.",
            gallery: ["/img/phantohm.jpg"] // optional gallery
        },
        {
            title: "CareAI",
            image: "/img/careai.png",
            description: "CareAI is a chatbot that offers companionship and emotional support through personalized, empathetic conversations.",
            gallery: ["/img/careai.png"]
        },
        {
            title: "UpcarePH (Educator Module)",
            image: "/img/upcare.png",
            description: "A platform designed to showcase individual talents and seamlessly connect them with employers.",
            gallery: [
                "/img/Dashboard.png",
                "/img/ContentFeatures.png",
                "/img/Content.png",
                "/img/AssessmentTest.png",
                "/img/QuestionBank.png",
                "/img/Certification.png",
                "/img/PerformanceReport.png",
            ]
        },
    ];

    const handleImageClick = (images) => {
        setGalleryImages(images);
        setOpen(true);
    };

    return (
        <Layout>
            <Box
                id="myWork"
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
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "40px 20px",
                    }}
                >
                    <Container sx={{ maxWidth: "800px", textAlign: "center" }}>
                        <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
                            My <span style={{ color: "#00ff77" }}>Work</span>
                        </Typography>
                    </Container>

                    <Divider
                        sx={{
                            mt: 4,
                            borderColor: "#00ff77",
                            width: "150vh",
                            borderBottomWidth: "2px",
                        }}
                    />

                    <Container
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            padding: 4,
                            mt: 5,
                        }}
                    >
                        <Box sx={{ display: "flex", gap: 5, justifyContent: "center" }}>
                            {services.map((service, i) => (
                                <Box
                                    key={i}
                                    sx={{
                                        width: 350,
                                        height: 450,
                                        backgroundColor: "#1e1e1e",
                                        borderRadius: "12px",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        px: 3,
                                        cursor: "pointer",
                                        "&:hover": {
                                            transform: "scale(1.05)",
                                            boxShadow: "0 0 20px rgba(0, 255, 119, 0.5)",
                                        },
                                    }}
                                    onClick={() => handleImageClick(service.gallery)}
                                >
                                    <Box
                                        component="img"
                                        src={service.image}
                                        alt={service.title}
                                        sx={{
                                            width: "100%",
                                            height: 200,
                                            objectFit: "contain",
                                            borderRadius: "8px",
                                            mb: 2,
                                            mt: 2,
                                        }}
                                    />

                                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                                        {service.title}
                                    </Typography>

                                    <Typography variant="body2" sx={{ textAlign: "center" }}>
                                        {service.description}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Container>
                </Box>

                <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md">
                    <Box sx={{ position: "relative", backgroundColor: "#000" }}>
                        <IconButton
                            sx={{ position: "absolute", top: 10, right: 10, color: "white" }}
                            onClick={() => setOpen(false)}
                        >
                            <CloseIcon />
                        </IconButton>
                        <Box
                            sx={{
                                display: "flex",
                                gap: 2,
                                overflowX: "auto",
                                padding: 2,
                            }}
                        >
                            {galleryImages.map((img, index) => (
                                <Box
                                    component="img"
                                    key={index}
                                    src={img}
                                    alt={`Gallery ${index}`}
                                    sx={{
                                        width: "100%",
                                        maxHeight: "500px",
                                        borderRadius: "8px",
                                    }}
                                />
                            ))}
                        </Box>
                    </Box>
                </Dialog>
            </Box>
        </Layout>
    );
}
