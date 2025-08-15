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
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function MyWork() {
    const [open, setOpen] = useState(false);
    const [galleryImages, setGalleryImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const services = [
        {
            title: "Phantohm Vapour",
            image: "/img/phantohm.jpg",
            description: "A vape shop POS system simplifies sales, inventory, and customer management for smoother operations.",
            gallery: ["/img/phantohm.jpg"]
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
        setCurrentIndex(0);
        setOpen(true);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
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

                <Dialog
                open={open}
                onClose={() => setOpen(false)}
                maxWidth="md"
                PaperProps={{
                    sx: {
                    backgroundColor: "black",
                    position: "relative", // makes IconButton positioning work
                    },
                }}
                >

                <IconButton
                    sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    backgroundColor: "#f0f0f08c",
                    color: "black",
                    zIndex: 2,
                    }}
                    onClick={() => setOpen(false)}
                >
                    <CloseIcon />
                </IconButton>


                <IconButton
                    sx={{
                    position: "absolute",
                    top: "50%",
                    left: 10,
                    transform: "translateY(-50%)",
                    color: "black",
                    backgroundColor: "#f0f0f08c",
                    zIndex: 2,
                    }}
                    onClick={handlePrev}
                >
                    <ArrowBackIosNewIcon />
                </IconButton>

                
                <IconButton
                    sx={{
                    position: "absolute",
                    top: "50%",
                    right: 10,
                    transform: "translateY(-50%)",
                    color: "black",
                    backgroundColor: "#f0f0f08c",
                    zIndex: 2,
                    }}
                    onClick={handleNext}
                >
                    <ArrowForwardIosIcon />
                </IconButton>

                
                {galleryImages.length > 0 && (
                    <Box
                    component="img"
                    src={galleryImages[currentIndex]}
                    alt={`Gallery ${currentIndex}`}
                    sx={{
                        width: "100%",
                        maxHeight: "80vh",
                        objectFit: "contain",
                        display: "block",
                        margin: "auto",
                    }}
                    />
                )}
                </Dialog>
            </Box>
        </Layout>
    );
}
