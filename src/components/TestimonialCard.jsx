import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Rating,
} from "@mui/material";

const TestimonialCard = ({ name, role, comment }) => {
  return (
    <Card
      sx={{
        height: "100%",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        borderRadius: 2,
        p: 1,
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Box>
            <Typography variant="h6" fontWeight="bold">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {role}
            </Typography>
          </Box>
        </Box>

        <Typography variant="body1">{comment}</Typography>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
