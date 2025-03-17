"use client";
import { Logo } from "../../../public/Assets";
import { Box } from "@mui/material";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { name: "Home", url: "/" },
  { name: "services", url: "/services" },
  { name: "About", url: "/about" },
  { name: "Contact", url: "/contact" },
];

const Navbar = () => {
  return (
    <Box
      sx={{
        position: "sticky",
        top: "0px",
        backgroundColor: "#ffffff",
      }}
    >
      <Box
        sx={{
          maxHeight: "120px",
          maxWidth: "1240px",
          height: "100%",
          margin: "0px auto",
          display: "flex",
          justifyContent: "center",
          padding: "0px 20px",
          "& img": {
            maxWidth: "137px",
            width: "137px",
            height: "auto",
            objectFit: "contain",
            marginTop: "6px",
            marginBottom: "5px",
            padding: "1em 0",
          },
        }}
      >
        <Image src={Logo} alt="logo" />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {navItems.map((item) => (
          <Box
            key={item.name}
            sx={{
              "& a": {
                fontSize: "0.75rem",
                color: "#141414",
                padding: "0px 20px 5px 20px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                position: "relative",
                display: "inline-block",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  width: "100%",
                  transform: "scaleX(0)",
                  height: "1.5px",
                  bottom: "-10px",
                  left: 0,
                  backgroundColor: "#141414",
                  transformOrigin: "bottom right",
                  transition: "transform 0.30s ease-out",
                },
                "&:hover:after": {
                  transform: "scaleX(1)",
                  transformOrigin: "bottom left",
                },
              },
            }}
          >
            <Link href={item.url} className="link">
              {item.name}
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Navbar;
