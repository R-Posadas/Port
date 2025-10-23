import { 
  Box, 
  Container, 
  Typography,
  Divider,
  Button,
  TextField
} from "@mui/material";
import Layout from "./Layout";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

export default function Skills() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [captchaValue, setCaptchaValue] = useState(null); 
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please complete the CAPTCHA verification before submitting.");
      return;
    }

    setIsSubmitting(true);

    emailjs
      .send(
        "service_gvzk0yk",
        "template_fhdfkw9",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        { publicKey: "IcCmLFo39nOiSvIS1" }
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setCaptchaValue(null);
          setIsSubmitting(false);
        },
        (error) => {
          console.error("EmailJS error:", error);
          alert("Failed to send message. Please try again.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <Layout>
      <Box
        id="contact"
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
            padding: "40px 20px",
          }}
        >
          <Container sx={{ maxWidth: "800px", textAlign: "center" }}>
            <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
              Contact <span style={{ color: "#00ff77" }}>Me</span>
            </Typography>
          </Container>

          <Divider sx={{ mt: 4, borderColor: "#00ff77", width: "150vh", maxWidth: "90vw" }} />

          <Container sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                width: "100%",
                maxWidth: "600px",
                backgroundColor: "#1e1e1e",
                borderRadius: "8px",
                padding: "40px 20px",
                boxShadow: 3,
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}
              >
                Let’s talk. <br />{" "}
                <span style={{ color: "#00ff77" }}>Enter your project details.</span>
              </Typography>

              <Divider sx={{ borderColor: "#00ff77", mb: 2 }} />

              <TextField
                fullWidth
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                sx={{ mb: 2, backgroundColor: "white", borderRadius: "4px" }}
              />

              <TextField
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                type="email"
                required
                sx={{ mb: 2, backgroundColor: "white", borderRadius: "4px" }}
              />

              <TextField
                fullWidth
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Project Description"
                multiline
                rows={4}
                required
                sx={{ mb: 2, backgroundColor: "white", borderRadius: "4px" }}
              />

              {/* ✅ Google reCAPTCHA box */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mb: 2,
                  transform: "scale(1)",
                  transformOrigin: "center",
                  "@media (max-width:900px)": {
                    transform: "scale(0.9)",
                  },
                  "@media (max-width:600px)": {
                    transform: "scale(0.8)",
                  },
                  "@media (max-width:400px)": {
                    transform: "scale(0.7)",
                  },
                }}
              >
                <ReCAPTCHA
                  sitekey="6LdIdPQrAAAAAISAZ3HOvdlfkY5WZDeYcZ1C7RF-"
                  onChange={handleCaptchaChange}
                />
              </Box>

              {/* ✅ Button is disabled until CAPTCHA is completed */}
              <Button
                type="submit"
                variant="contained"
                disabled={!captchaValue || isSubmitting}
                sx={{
                  backgroundColor: !captchaValue ? "#555" : "#00ff77",
                  color: !captchaValue ? "#aaa" : "black",
                  width: "100%",
                  fontWeight: "bold",
                  py: 1.2,
                  "&:hover": {
                    backgroundColor: captchaValue ? "#00cc66" : "#555",
                  },
                }}
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </Button>

              <Typography variant="body2" sx={{ textAlign: "center", mt: 2 }}>
                raffy.posadas1700@gmail.com | +63 9077759308
              </Typography>
            </Box>
          </Container>
        </Box>
      </Box>
    </Layout>
  );
}
