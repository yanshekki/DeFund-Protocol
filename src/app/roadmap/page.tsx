"use client";

import React from "react";
import { styled } from "@mui/material/styles";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const PaperStyled = styled(Paper)(({ theme }) => ({
  padding: "12px 24px",
  margin: "10px 0",
}));

const TitleStyled = styled(Typography)({
  fontWeight: "bold",
});

const DateStyled = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

const TimelinePage = () => {
  const roadmapData = [
    {
      title: "Conceptualization",
      date: "October 2024",
      description:
        "Define the platform’s vision, goals, and core features. Identify target users.",
    },
    {
      title: "Research",
      date: "November 2024",
      description:
        "Analyze market trends, existing platforms, and regulatory requirements.",
    },
    {
      title: "Design",
      date: "December 2024",
      description:
        "Create a detailed project plan, system architecture, and UI/UX prototypes.",
    },
    {
      title: "Development",
      date: "January 2025 - March 2025",
      description:
        "Set up the development environment, implement smart contracts, and build front-end and back-end components.",
    },
    {
      title: "Testing",
      date: "March 2025",
      description:
        "Conduct unit tests, integration tests, and user acceptance testing (UAT).",
    },
    {
      title: "Public Testing",
      date: "March 2025",
      description:
        "Open the platform for public testing to gather feedback and fix issues.",
    },
    {
      title: "Deployment & Launch",
      date: "May 2025",
      description:
        "Deploy the platform to the main blockchain network and make it publicly available.",
    },
    {
      title: "Open Source",
      date: "May 2025",
      description:
        "Release the platform’s source code to promote transparency and community involvement.",
      link: "https://github.com/yanshekki/DeFund-Protocol",
    },
    {
      title: "Create First Fund",
      date: "May 2025",
      description:
        "Launch the first fund on the platform to demonstrate functionality and attract early users.",
      link: "https://defund.pro/panel/0xB2f57A77515974490dc37A53fca01f8fa9E81371",
    },
    {
      title: "Smart Contract Audit",
      date: "To Be Determined",
      description:
        "Hire a third-party auditor to review smart contracts and ensure security.",
    },
    {
      title: "Seek Partnerships",
      date: "To Be Determined",
      description:
        "Establish partnerships with other projects or institutions to expand the platform’s capabilities.",
    },
    {
      title: "Launch Our Layer 1",
      date: "To Be Determined",
      description: "Launch our own layer 1 blockchain network.",
    },
  ];

  return (
    <main
      className="p-5 gap-4 justify-center text-center"
      style={{ minHeight: "80vh", maxWidth: "800px", margin: "0 auto" }}
    >
      <Timeline position="alternate">
        {roadmapData.map((event, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot />
              {index < roadmapData.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <PaperStyled elevation={3}>
                <TitleStyled variant="h6">{event.title}</TitleStyled>
                <DateStyled>{event.date}</DateStyled>
                <Typography>{event.description}</Typography>
                {event.link && (
                  <Typography>
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#1976d2" }}
                    >
                      View More
                    </a>
                  </Typography>
                )}
              </PaperStyled>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </main>
  );
};

export default TimelinePage;
