"use client";
import {
  Box,
  Drawer,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import SegmentIcon from "@mui/icons-material/Segment";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation"; // Import usePathname
import { Logo } from "../Utils/images";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const router = useTransitionRouter();
  const pathname = usePathname();

  function slideInOut() {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: "translateY(0)",
        },
        {
          opacity: 0.2,
          transform: "translateY(-35%)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about-compass-peak-builders" },
    { name: "Contact", path: "/contact" },
  ];

  // Mobile drawer content
  const drawer = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem 1rem",
        gap: "2rem",
        height: "100%",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          "& .close-button": {
            top: "-10px",
            right: "15px",
          },
        }}
      >
        <Box></Box>
        <Link
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              handleDrawerToggle();
              return;
            }
            e.preventDefault();
            router.push("/", {
              onTransitionReady: slideInOut,
            });
            handleDrawerToggle();
          }}
          href="/"
        >
          <Image
            src={Logo}
            alt="Logo"
            style={{
              maxWidth: "120px",
              width: "120px",
              height: "auto",
              marginLeft: "55px",
            }}
          />
        </Link>
        <IconButton onClick={handleDrawerToggle} className="close-button">
          <CloseIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
          width: "100%",
          "& .link": {
            fontSize: "16px",
            textTransform: "uppercase",
            fontWeight: 500,
            letterSpacing: "2px",
            fontFamily: "Roboto, Arial, sans-serif",
            position: "relative",
            textDecoration: "none",
            color: "#141414",
            paddingBottom: "8px",
            "&::after": {
              content: '""',
              position: "absolute",
              width: "100%",
              height: "1px",
              bottom: "0",
              left: "0",
              backgroundColor: "currentColor",
              transform: "scaleX(0)",
              transformOrigin: "bottom right",
              transition: "transform 0.3s ease",
            },
            "&:hover::after": {
              transform: "scaleX(1)",
              transformOrigin: "bottom left",
            },
          },
        }}
      >
        {navigationItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className="link"
            onClick={(e) => {
              if (pathname === item.path) {
                e.preventDefault();
                handleDrawerToggle();
                return;
              }
              e.preventDefault();
              router.push(item.path, {
                onTransitionReady: slideInOut,
              });
              handleDrawerToggle();
            }}
            // onClick={handleDrawerToggle}
          >
            {item.name}
          </Link>
        ))}
      </Box>
    </Box>
  );

  return (
    <>
      <Box
        sx={{
          bgcolor: "#FFFFFF",
        }}
      >
        {!isMobile ? (
          <Box
            sx={{
              maxWidth: "1040px",
              mx: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                "& .logo": {
                  padding: "1rem 0",
                  maxWidth: "137px",
                  width: "137px",
                  height: "102px",
                  m: "6px 0px 5px 0px",
                },
              }}
            >
              <Link
                onClick={(e) => {
                  if (pathname === "/") {
                    e.preventDefault();
                    return;
                  }
                  e.preventDefault();
                  router.push("/", {
                    onTransitionReady: slideInOut,
                  });
                }}
                href="/"
              >
                <Image src={Logo} alt="Logo" className="logo" />
              </Link>
            </Box>

            {/* Mobile menu button */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                display: { xs: "block", md: "none" },
                color: "text.primary",
              }}
            >
              <SegmentIcon />
            </IconButton>

            <Box
              sx={{
                minHeight: "50px",
                display: "flex",
                alignItems: "center",
                gap: "35px",
                "& .link": {
                  fontSize: "12px",
                  textTransform: "uppercase",
                  fontWeight: 400,
                  letterSpacing: "3px",
                  fontFamily: "Roboto, Arial, sans-serif",
                  position: "relative",
                  paddingBottom: "4px",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: "100%",
                    height: "1px",
                    top: "33px",
                    left: "0",
                    backgroundColor: "currentColor",
                    transform: "scaleX(0)",
                    transformOrigin: "bottom right",
                    transition: "transform 0.3s ease",
                  },
                  "&:hover::after": {
                    transform: "scaleX(1)",
                    transformOrigin: "bottom left",
                  },
                },
              }}
            >
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  onClick={(e) => {
                    if (pathname === item.path) {
                      e.preventDefault();
                      return;
                    }
                    e.preventDefault();
                    router.push(item.path, {
                      onTransitionReady: slideInOut,
                    });
                  }}
                  href={item.path}
                  className="link"
                >
                  {item.name}
                </Link>
              ))}
            </Box>
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              maxWidth: "1040px",
              mx: "auto",
              padding: "0 2rem",
            }}
          >
            <Box
              sx={{
                "& .logo": {
                  padding: "1rem 0",
                  maxWidth: "137px",
                  width: "137px",
                  height: "102px",
                  m: "6px 0px 5px 0px",
                },
              }}
            >
              <Link
                onClick={(e) => {
                  if (pathname === "/") {
                    e.preventDefault();
                    return;
                  }
                  e.preventDefault();
                  router.push("/", {
                    onTransitionReady: slideInOut,
                  });
                }}
                href="/"
              >
                <Image src={Logo} alt="Logo" className="logo" />
              </Link>
            </Box>
            {/* Mobile menu button */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                display: { xs: "block", md: "none" },
                color: "text.primary",
              }}
            >
              <SegmentIcon />
            </IconButton>
          </Box>
        )}
      </Box>

      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "100%",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
