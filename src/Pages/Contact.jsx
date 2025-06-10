import { 
    Box, 
    Container, 
    Typography,
    Divider,
    Button,
    TextField,
    Checkbox
} from "@mui/material";
import Layout from "./Layout";
import { Icon } from "@iconify/react";

export default function Skills() {

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
                        Contact <span style={{color: "#00ff77"}}>Me</span>
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
                        width: "100%",
                        maxWidth: "600px",
                        backgroundColor: "#1e1e1e", // Slightly lighter background for the form
                        borderRadius: "8px",
                        padding: "40px 20px",
                        boxShadow: 3,
                    }}
                    >
                        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "20px", color: "white", textAlign: "center" }}>
                            Let’s talk. <br /> <span style={{ color: "#00ff77" }}>Enter your project details.</span>
                        </Typography>

                        <Divider sx={{ borderColor: "#00ff77", marginBottom: "20px" }} />

                        <TextField 
                            fullWidth 
                            variant="outlined" 
                            placeholder="Name" 
                            sx={{ marginBottom: 2, backgroundColor: "white", borderRadius: "4px" }} 
                        />
                        
                        <TextField 
                            fullWidth 
                            variant="outlined" 
                            placeholder="Email" 
                            sx={{ marginBottom: 2, backgroundColor: "white", borderRadius: "4px" }} 
                        />
                        
                        <TextField 
                            fullWidth 
                            variant="outlined" 
                            placeholder="Project Description" 
                            multiline 
                            rows={4} 
                            sx={{ marginBottom: 2, backgroundColor: "white", borderRadius: "4px" }} 
                        />
                        
                        <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
                            <Checkbox />
                            <Typography variant="body2" sx={{ color: "white" }}>
                                I agree to the <span style={{ color: "#00ff77" }}>Cookie Policy</span> and <span style={{ color: "#00ff77" }}>Privacy Policy</span>
                            </Typography>
                        </Box>

                        <Button variant="contained" sx={{ backgroundColor: "#00ff77", color: "black", width: "100%" }}>
                            Submit
                        </Button>
                        
                        <Typography variant="body2" sx={{ textAlign: "center", marginTop: 2, color: "white" }}>
                            raffy.posadas@hcdc.edu.h | +63 9077759308
                        </Typography>
                        
                    </Box>
                </Container>
            </Box>
        </Box>
    </Layout>
  );
}
