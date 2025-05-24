"use client";

import { Link as MUILink } from "@mui/material";
import { redirect } from "next/navigation";

export default function Footer() {
  return (
    <div
      style={{
        height: "120px",
        color: "#fff",
      }}
    >
      <div
        style={{
          textAlign: "center",
          lineHeight: "60px",
          fontSize: "18px",
        }}
      >
        <MUILink
          style={{ cursor: "pointer", color: "#fff" }}
          onClick={() => redirect("/about")}
          sx={{ mr: 2 }}
        >
          About DeFund
        </MUILink>
        <MUILink
          style={{ cursor: "pointer", color: "#fff" }}
          onClick={() => redirect("/marketplace")}
          sx={{ mr: 2 }}
        >
          Explore Funds
        </MUILink>
        <MUILink
          style={{ cursor: "pointer", color: "#fff" }}
          onClick={() => redirect("/roadmap")}
          sx={{ mr: 2 }}
        >
          Roadmap
        </MUILink>
        <MUILink
          style={{ cursor: "pointer", color: "#fff" }}
          onClick={() => redirect("/proposal")}
          sx={{ mr: 2 }}
        >
          Proposal
        </MUILink>
        <MUILink
          style={{ cursor: "pointer", color: "#fff" }}
          onClick={() => redirect("/joinus")}
          sx={{ mr: 2 }}
        >
          Join Us
        </MUILink>
        <MUILink
          style={{ cursor: "pointer", color: "#fff" }}
          onClick={() => redirect("/docs")}
        >
          Documentation
        </MUILink>
      </div>
      <h1
        style={{
          textAlign: "center",
          lineHeight: "60px",
          fontSize: "18px",
        }}
      >
        DeFund Protocol &copy; {new Date().getFullYear()}
      </h1>
    </div>
  );
}
