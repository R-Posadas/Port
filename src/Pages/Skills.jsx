import {
  Box,
  Container,
  Typography,
  Divider,
} from "@mui/material";
import Layout from "./Layout";
import { Icon } from "@iconify/react";

export default function Skills() {
  const skills = [
    { icon: "logos:html-5" },
    { icon: "logos:css-3" },
    { icon: "logos:php" },
    { icon: "logos:javascript" },
    { icon: "logos:react" },
    { icon: "logos:mysql" },
  ];

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
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", marginBottom: "20px", color: "white" }}
            >
              My <span style={{ color: "#00ff77" }}>Skills</span>
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
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 15,
                maxWidth: 1000,
              }}
            >
              {skills.map((skill, i) => (
                <Box
                  key={i}
                  sx={{
                    width: 250,
                    height: 200,
                    backgroundColor: "#1e1e1e",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 10px rgb(22, 22, 22)",
                    borderRadius: "12px",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    "&:hover": {
                        transform: "scale(1.05)",
                        border: "none",
                        boxShadow: "0 0 20px rgba(0, 255, 119, 0.5)",
                    },
                  }}
                >
                  <Icon
                    icon={skill.icon}
                    width={120}
                    height={120}
                  />
                </Box>
              ))}
            </Box>
          </Container>
        </Box>
      </Box>
    </Layout>
  );
}
