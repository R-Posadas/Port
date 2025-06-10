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
            mt: 10,
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
                    border: "1px solid #00ff77",
                    borderRadius: "12px",
                  }}
                >
                  <Icon
                    icon={skill.icon}
                    width={120}
                    height={120}
                    style={{ marginBottom: "16px" }}
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
