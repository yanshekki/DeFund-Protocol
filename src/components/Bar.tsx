"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Image from "next/image";
import logo from "@/app/img/logo.png";
import ConnectWallet from "@/components/ConnectWallet";
import { Link as MUILink } from "@mui/material";
import { redirect } from "next/navigation";

export default function Bar() {
  return (
    <AppBar
      position="static"
      style={{
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        boxShadow: "none",
        color: "white",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MUILink style={{ cursor: "pointer" }} onClick={() => redirect("/")}>
            {logo && (
              <Image
                src={logo}
                alt="DeFund Protocol"
                style={{ width: "30px", height: "auto", marginRight: 5 }}
              />
            )}
          </MUILink>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              color: "inherit",
              cursor: "pointer",
              textDecoration: "none",
            }}
            onClick={() => redirect("/")}
          >
            DeFund
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <MUILink
              style={{ color: "#FFF", cursor: "pointer" }}
              onClick={() => redirect("/marketplace")}
            >
              Market Place
            </MUILink>
            <MUILink
              style={{ color: "#FFF", cursor: "pointer", marginLeft: 10 }}
              onClick={() => redirect("/create")}
            >
              Create
            </MUILink>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <ConnectWallet />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
