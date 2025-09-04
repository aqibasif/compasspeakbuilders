import React from "react";
import { Quotes, UseProfile } from "../Utils/images";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

const TestimonialsCard = ({ testimonial }) => {
  return (
    <Box>
      <Box
        sx={{
          border: "1px solid #cececeff",
          p: "20px",
          backgroundColor: "#f8f7f7f0",
          borderRadius: "14px",
          minHeight: "300px",
          position: "relative",
          "& > img": {
            mb: "15px",
            filter:
              "brightness(0) saturate(100%) invert(27%) sepia(20%) saturate(5074%) hue-rotate(229deg) brightness(97%) contrast(96%)",
          },
        }}
      >
        <Image src={Quotes} alt="quote icon" height={30} width={30} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ fontSize: "16px", fontWeight: 700 }}>
            {testimonial.content}
          </Typography>
          <List
            sx={{
              width: "100%",
              p: "0px",
              mt: "auto",
              position: "absolute",
              bottom: "15px",
              left: "10px",

              "& .MuiListItem-root": {
                padding: "0px",
                alignItems: "center",
              },
              "& .MuiAvatar-root": {
                height: "50px",
                width: "50px",
                display: "flex",
                alignItems: "center",
              },
              "& img": {
                height: "100%",
                width: "100%",
              },
              "& .MuiListItemAvatar-root": {
                // minWidth: "50px",
                height: "50px",
                mt: "0px",
              },
            }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={testimonial.name} src={UseProfile.src} />
              </ListItemAvatar>
              <ListItemText
                primary={testimonial.name}
                sx={{
                  "& > span": {
                    fontSize: "18px",
                    fontWeight: "600",
                  },
                  "& p": {
                    fontSize: "14px !important",
                    //   fontWeight: 300,
                  },
                }}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: "text.primary", display: "inline" }}
                    >
                      {testimonial.role}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default TestimonialsCard;
