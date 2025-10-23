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
import { useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha"; // ✅ new import

export default function Skills() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    agree: false,
  });

  const [captchaValue, setCaptchaValue] = useState(null); // ✅ store captcha state

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.agree) {
      alert("Please agree to the policies first.");
      return;
    }

    if (!captchaValue) {
      alert("Please complete the CAPTCHA verification.");
      return;
    }

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
          setFormData({ name: "", email: "", message: "", agree: false });
          setCaptchaValue(null);
        },
        (error) => {
          console.error("EmailJS error:", error);
          alert("Failed to send message. Please try again.");
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

          <Divider sx={{ mt: 4, borderColor: "#00ff77", width: "150vh" }} />

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
              <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}>
                Let’s talk. <br /> <span style={{ color: "#00ff77" }}>Enter your project details.</span>
              </Typography>

              <Divider sx={{ borderColor: "#00ff77", mb: 2 }} />

              <TextField
                fullWidth
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                sx={{ mb: 2, backgroundColor: "white", borderRadius: "4px" }}
              />

              <TextField
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
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
                sx={{ mb: 2, backgroundColor: "white", borderRadius: "4px" }}
              />

              {/* <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Checkbox
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                />
                <Typography variant="body2">
                  I agree to the <span style={{ color: "#00ff77" }}>Cookie Policy</span> and{" "}
                  <span style={{ color: "#00ff77" }}>Privacy Policy</span>
                </Typography>
              </Box> */}

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

              <Button
                type="submit"
                variant="contained"
                sx={{ backgroundColor: "#00ff77", color: "black", width: "100%" }}
              >
                Submit
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
