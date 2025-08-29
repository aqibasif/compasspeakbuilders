import { Box, Typography } from "@mui/material";
import Banner from "../components/Banner";
import AboutBannerImage from "../uploads/about-bg.jpg";

export default function AboutCompassPeakBuilders() {
  return (
    <Box>
      <Banner
        backgroundImage={AboutBannerImage}
        heading="Philosophy"
        centerHeading
        centerHeadingWithTagLine
        subHeading1="The Compass Peak Builders"
      />
      <Box
        sx={{
          position: "relative",
          px: "20px",
          "& span": {
            fontSize: "130px",
            fontWeight: 800,
            color: "#000000",
            textTransform: "uppercase",
            position: "absolute",
            textAlign: "center",
            mx: "auto",
            width: "100%",
            top: "0px",
            opacity: 0.03,
            "@media (max-width: 768px)": {
              fontSize: "80px",
            },
            "@media (max-width: 500px)": {
              fontSize: "50px",
            },
          },
        }}
      >
        <Typography variant="span" className="raleway-font">
          About us
        </Typography>
        <Box
          sx={{
            maxWidth: "800px",
            mx: "auto",
            py: "110px",
            position: "relative",
            bgcolor: "inherit",
            "@media (max-width: 768px)": {
              py: "80px",
            },
            "@media (max-width: 500px)": {
              py: "50px",
            },
            "& h4": {
              margin: "0in 0in 8pt",
              lineHeight: "18.4px",
              fontSize: "16px",
              fontWeight: 500,
              color: "#000000",
              fontStyle: "normal",
              letterSpacing: "0.5px",
            },
          }}
        >
          <Typography variant="h4">
            Compass Peak Builders was founded on the belief that the
            construction experience – for clients, builders, and trade partners
            – deserves to be restored.
          </Typography>
          <Typography variant="h4">
            Clients should be able to trust the integrity and expertise of the
            builder. They ought to be treated as real people to be diligently
            served by a trusted advisor rather than vending machines to be
            manipulated and coerced into the fastest possible fee. Clients have
            the right to never have to worry about a builder taking quality
            shortcuts, engaging in financial dishonesty, or not standing behind
            their work.
          </Typography>
          <Typography variant="h4">
            Builders doing things the right way deserve to be able to work for
            clients that appreciate their expertise and trust them as
            professionals. They should make a fair profit and invest in taking
            care of their employees, providing career paths and futures for
            those that dedicate their skills to the cause.
          </Typography>
          <Typography variant="h4">
            Great trade partners earn the right to be treated fairly as
            partners, not commodities to transact with. They should have the
            opportunity to work with builders who work hard to make the job more
            efficient for everyone, giving these partners the best opportunity
            to also make a fair profit and have the satisfaction of having their
            work and expertise be appreciated.
          </Typography>
          <Typography variant="h4">
            Together, we should all get to take pleasure in the process of
            trusting collaboration that results in the pride of a job well done,
            the delight of a dream becoming reality, and the satisfaction of a
            journey that betters everyone along the way.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
