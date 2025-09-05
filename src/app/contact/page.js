import { Box, Typography } from "@mui/material";
import Banner from "../components/Banner2";
import PhoneEnabledRoundedIcon from "@mui/icons-material/PhoneEnabledRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
import TextAnimationWrapper from "../components/TextAnimationWrapper";
import { ContactBanner } from "../Utils/images";

export default function Contact() {
  return (
    <Box>
      <Banner
        backgroundImage={ContactBanner}
        heading="Contact Us"
        centerHeading
      />

      <Box
        sx={{
          position: "relative",
          px: "20px",
          maxWidth: "1040px",
          mx: "auto",
          "& .transparent-text": {
            fontSize: "130px",
            fontWeight: 800,
            color: "#000000",
            textTransform: "uppercase",
            textAlign: "center",
            mx: "auto",
            width: "100%",
            opacity: 0.03,
            "@media (max-width: 1000px)": {
              fontSize: "80px",
            },
            "@media (max-width: 600px)": {
              fontSize: "50px",
            },
          },
        }}
      >
        <TextAnimationWrapper>
          <Typography className="raleway-font transparent-text">
            get in touch
          </Typography>
        </TextAnimationWrapper>
        <Box
          sx={{
            maxWidth: "1250px",
            mx: "auto",
            mt: "-100px",
            pb: "110px",
            position: "relative",
            bgcolor: "inherit",
            "@media (max-width: 1000px)": {
              py: "80px",
            },
            "@media (max-width: 600px)": {
              py: "50px",
            },
            "& h4": {
              fontSize: "32px",
              fontWeight: 700,
              color: "#141414",
              mb: "20px",
            },
            "& p": {
              fontSize: "16px",
              fontWeight: 400,
              color: "#141414",
              mb: "20px",
            },
          }}
        >
          <TextAnimationWrapper>
            <Typography variant="h4" className="raleway-font">
              Contact Details
            </Typography>
            <Typography className="roboto-font">
              It’s never too early or too late to reach out – we’d love to see
              how we can help!
            </Typography>
          </TextAnimationWrapper>

          <Box
            sx={{
              backgroundColor: "#FFFFFF",
              padding: "32px",
              mt: "80px",
              borderRadius: "4px",
              display: "flex",
              flexDirection: "column",
              rowGap: "40px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: "20px",
                "& .icon": {
                  height: "60px",
                  width: "60px",
                  minWidth: "60px",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "& svg": {
                    height: "28px",
                    width: "28px",
                    fill: "#0f78a9",
                  },
                },
                "& .details": {
                  "& h3": {
                    fontSize: "24px",
                    color: "#141414",
                    fontWeight: 700,
                    mb: "10px",
                  },
                  "& p": {
                    fontSize: "16px",
                    color: "#141414",
                    fontWeight: 300,
                    fontFamily: "Roboto",
                    m: "0px",
                  },
                },
              }}
            >
              <Box className="icon">
                <PhoneEnabledRoundedIcon />
              </Box>
              <Box className="details">
                <Typography variant="h3" className="raleway-font">
                  Call Us
                </Typography>
                <Typography className="roboto-font">970.413.4265</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: "20px",
                "& .icon": {
                  height: "60px",
                  width: "60px",
                  minWidth: "60px",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "& svg": {
                    height: "28px",
                    width: "28px",
                    fill: "#0f78a9",
                  },
                },
                "& .details": {
                  "& h3": {
                    fontSize: "24px",
                    color: "#141414",
                    fontWeight: 700,
                    mb: "10px",
                  },
                  "& p": {
                    fontSize: "16px",
                    color: "#141414",
                    fontWeight: 300,
                    fontFamily: "Roboto",
                    m: "0px",
                  },
                },
              }}
            >
              <Box className="icon">
                <MailRoundedIcon />
              </Box>
              <Box className="details">
                <Typography variant="h3" className="raleway-font">
                  Email Us
                </Typography>
                <Typography className="roboto-font">
                  info@compasspeakbuilders.com
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: "20px",
                "& .icon": {
                  height: "60px",
                  width: "60px",
                  minWidth: "60px",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "& svg": {
                    height: "28px",
                    width: "28px",
                    fill: "#0f78a9",
                  },
                },
                "& .details": {
                  "& h3": {
                    fontSize: "24px",
                    color: "#141414",
                    fontWeight: 700,
                    mb: "10px",
                  },
                  "& p": {
                    fontSize: "16px",
                    color: "#141414",
                    fontWeight: 300,
                    fontFamily: "Roboto",
                    m: "0px",
                  },
                },
              }}
            >
              <Box className="icon">
                <FmdGoodRoundedIcon />
              </Box>
              <Box className="details">
                <Typography variant="h3" className="raleway-font">
                  Mailing Address
                </Typography>
                <Typography className="roboto-font">
                  PO Box 63, Timnath, CO 80547
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
