import { 
    Box, 
    Container, 
    Typography,
    Divider,
    Button,
} from "@mui/material";
import Layout from "./Layout";
import { Icon } from "@iconify/react";

export default function MyWork() {

    const services = [
        {
            title: "Phantohm Vapour",
            image: "/img/phantohm.jpg",
            description: "A vape shop POS system simplifies sales, inventory, and customer management for smoother operations.",
        },
        {
            title: "CareAI",
            image: "/img/careai.png",
            description: "CareAl is a chatbot that offers companionship and emotional support through personalized, empathetic conversations, helping to reduce loneliness and promote well-being.",
        },
        {
            title: "UpcarePH (Educator Module)",
            image: "/img/upcare.png",
            description: "A platform designed to showcase individual talents and seamlessly connect them with employers and organizations that value their expertise.",
        },
    ];

  return (
    <Layout>
        <Box
        id="myWork"
        sx={{
            width: "100%",
            minHeight: "100vh",
            backgroundColor: "#2e2e2e", // Dark background
            color: "white", // White text
        }}
        >
            <Box
            sx={{
                mt: 10,
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
                        My <span style={{color: "#00ff77"}}>Work</span>
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
                        mt: 5,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            px: 4,
                            gap: 5,
                        }}
                        >
                        {services.map((service, i) => ( 
                            <Box
                            key={i}
                            sx={{
                                width: 350,
                                height: 450,
                                backgroundColor: "#1e1e1e",
                                color: "white",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                px: 3,
                                border: "1px solid #00ff77",
                                borderRadius: "12px",
                            }}
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

                                <Typography variant="body2" sx={{ lineHeight: 1.6, textAlign: "center" }}>
                                    {service.description}
                                </Typography>

                            </Box>
                        ))}
                    </Box>
                </Container>
            </Box>
        </Box>
    </Layout>
  );
}
