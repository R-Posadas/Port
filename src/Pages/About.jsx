import {
  Box,
  Container,
  Typography,
  Divider,
  Button,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import Layout from "./Layout";

export default function About() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Layout>
      <Box
        id="about"
        sx={{
          width: "100%",
          minHeight: "100vh",
          backgroundColor: "#2e2e2e",
          color: "white",
          py: isMobile ? 6 : 10,
          px: isMobile ? 2 : 6,
        }}
      >
        {/* Header Section */}
        <Container sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant={isMobile ? "h4" : "h3"}
            sx={{ fontWeight: "bold", mb: 2 }}
          >
            About <span style={{ color: "#00ff77" }}>Myself</span>
          </Typography>
          <Typography
            variant={isMobile ? "body1" : "h6"}
            sx={{ lineHeight: 1.6, fontSize: isMobile ? "16px" : "18px" }}
          >
            Hi, I’m <strong>Raffy</strong>, a front-end developer and editor
            specializing in user-friendly websites, web apps, and basic
            video/photo editing. I use technologies like{" "}
            <strong>HTML5, CSS3, JavaScript, React, and WordPress</strong> to
            bring your ideas to life.
          </Typography>
        </Container>

        {/* Divider */}
        <Divider
          sx={{
            borderColor: "#00ff77",
            width: isMobile ? "80%" : isTablet ? "100%" : "150vh",
            mx: "auto",
            borderBottomWidth: "2px",
            mb: 6,
          }}
        />

        {/* Content Section */}
        <Container
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : isTablet ? "column" : "row",
            alignItems: "center",
            justifyContent: "center",
            gap: isMobile ? 4 : 6,
          }}
        >
          {/* Profile Image */}
          <Box
            sx={{
              width: isMobile ? "90%" : isTablet ? "60%" : "400px",
              maxWidth: "400px",
              border: "1px solid white",
              borderRadius: "8px",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <Box
              component="img"
              src="/img/about.JPG"
              alt="Raffy"
              sx={{
                width: "100%",
                height: isMobile ? "auto" : "600px",
                objectFit: "cover",
              }}
            />
          </Box>

          {/* Text Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2.5,
              textAlign: isMobile ? "center" : "left",
              width: isMobile ? "100%" : "50%",
            }}
          >
            <Typography
              variant={isMobile ? "h5" : "h4"}
              sx={{ fontWeight: "bold" }}
            >
              Hello, I'm <span style={{ color: "#00ff77" }}>Raffy Posadas</span>
            </Typography>

            <Typography
              variant="body1"
              sx={{ lineHeight: 1.6, fontSize: isMobile ? "16px" : "18px" }}
            >
              I am a front-end developer eager to learn and collaborate within a
              team. Though I lack experience, I’m driven to contribute to
              exciting projects and enhance my technical abilities. I’m a quick
              learner who thrives in environments where innovation and teamwork
              are valued.
            </Typography>

            <Typography
              variant="body1"
              sx={{ lineHeight: 1.6, fontSize: isMobile ? "16px" : "18px" }}
            >
              <strong>Name:</strong> Raffy <br />
              <strong>Contact:</strong> 09912191578 <br />
              <strong>Email:</strong> raffy.posadas1700@gmail.com
            </Typography>

            <motion.div
              whileHover={{
                x: [0, -5, 5, -5, 5, 0],
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
                  px: isMobile ? 4 : 6,
                  py: isMobile ? 1 : 1.5,
                  fontSize: isMobile ? "14px" : "16px",
                  textTransform: "none",
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: "#00ff77",
                    color: "black",
                  },
                  alignSelf: isMobile ? "center" : "flex-start",
                }}
              >
                Download CV
              </Button>
            </motion.div>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
}
