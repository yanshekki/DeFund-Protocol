"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const IntroPaper = styled(Paper)(({ theme }) => ({
  width: "100hv",
  height: "100hv",
  padding: theme.spacing(2),
  ...theme.typography.body2,
  marginBottom: theme.spacing(5),
  backgroundColor: "#f2f2f2",
  ul: {
    paddingLeft: "20px",
    ol: {
      paddingLeft: "20px",
      li: {
        listStyle: "circle",
      },
    },
    li: {
      marginBottom: "10px",
      listStyle: "disc",
    },
  },
  h1: {
    color: "#000",
    fontSize: "24px",
    lineHeight: "1.8",
  },
  h2: {
    marginBottom: "10px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#000",
    lineHeight: "1.8",
  },
}));

export default function JoinUs() {
  return (
    <main className="flex flex-col">
      <Container
        fixed
        style={{
          color: "#000",
          maxWidth: "100%",
          paddingLeft: 0,
          paddingRight: 0,
          height: "100%",
        }}
      >
        <Box
          sx={{
            bgcolor: "#FFF",
            minHeight: "80vh",
            mt: 5,
            p: 5,
          }}
        >
          <IntroPaper elevation={0}>
            <h1
              style={{
                color: "#000",
                fontSize: "24px",
                lineHeight: "1.8",
                marginBottom: "10px",
              }}
            >
              Join Us and Shape the Future of Decentralized Finance!
            </h1>
            <h2 style={{ color: "#000", fontSize: "16px", lineHeight: "1.8" }}>
              Be Part of a Game-Changing Project
            </h2>
            <p>
              At DeFund Protocol, we are dedicated to making fund management
              and investment opportunities more accessible and transparent
              through decentralized technology. Our platform, built on the
              Avalanche network, utilizes blockchain and smart contract
              technology to eliminate intermediaries, enabling anyone to
              participate in fund management. However, as an early-stage
              innovative project, we are currently facing funding challenges.
              This is where you come in! We warmly invite passionate
              individuals to join us as volunteers to help realize this vision.
              Once the project successfully raises funds and launches, you’ll
              have the opportunity to receive our platform tokens as a reward.
            </p>
          </IntroPaper>
          <IntroPaper elevation={0}>
            <h1>Why Join Us Now?</h1>
            <ul>
              <li>
                <b>Early Involvement</b>: Be part of a groundbreaking
                decentralized finance project from the ground up and help shape
                its future.
              </li>
              <li>
                <b>Skill Development</b>: Gain hands-on experience with
                blockchain, smart contracts, and decentralized applications.
              </li>
              <li>
                <b>Social Impact</b>: Contribute to a platform that makes
                investing fairer and more transparent for all.
              </li>
              <li>
                <b>Future Rewards</b>: Once funding is secured, all
                contributors will receive platform tokens as a thank-you.
              </li>
            </ul>
          </IntroPaper>
          <IntroPaper elevation={0}>
            <h1>Roles We Are Recruiting</h1>
            <p>
              We urgently need volunteers in the following roles to help propel
              the project forward:
            </p>
            <ul>
              <li>
                <b>Next.js Frontend Developer</b>
                <ul>
                  <li>
                    Develop and optimize our user interface using Next.js to
                    ensure it’s clean and user-friendly.
                  </li>
                  <li>
                    Collaborate with the team to deliver a smooth and intuitive
                    user experience.
                  </li>
                  <li>
                    Ideal for developers passionate about decentralized
                    applications.
                  </li>
                </ul>
              </li>
              <li>
                <b>Tester</b>
                <ul>
                  <li>
                    Test the platform’s smart contracts, frontend, and backend
                    functionalities to ensure security and stability.
                  </li>
                  <li>
                    Identify and report issues, and suggest improvements.
                  </li>
                  <li>Play a key role in preparing the platform for launch.</li>
                </ul>
              </li>
              <li>
                <b>Promotion Ambassador</b>
                <ul>
                  <li>
                    Spread the word about DeFund Protocol via social media,
                    forums, and events to expand our community.
                  </li>
                  <li>
                    Create and share engaging content to communicate our mission
                    and progress.
                  </li>
                  <li>
                    Perfect for those who love connecting with people and
                    promoting innovative projects.
                  </li>
                </ul>
              </li>
              <li>
                <b>Liquidity Provider</b>
                <ul>
                  <li>
                    Provide liquidity for the decentralized funds on our
                    platform.
                  </li>
                  <li>
                    Ensure seamless participation for investors once the
                    platform launches.
                  </li>
                  <li>
                    Get early exposure to our token economy and potential
                    rewards.
                  </li>
                </ul>
              </li>
            </ul>
          </IntroPaper>
          <IntroPaper elevation={0}>
            <h1>Got Other Ideas? We Welcome Your Creativity!</h1>
            <p>
              DeFund Protocol is a community-driven project, and we believe
              every contribution adds value. If you have skills or ideas not
              listed above but think they can help the project grow, let us
              know! Whether it’s design, content creation, or something else,
              your input might be the missing piece we need.
            </p>
            <h2>Other Suggested Roles:</h2>
            <ul>
              <li>
                <b>UI/UX Designer</b>: Help design a more intuitive and visually
                appealing platform interface.
              </li>
              <li>
                <b>Content Creator</b>: Write blogs, tutorials, or educational
                materials to onboard new users.
              </li>
              <li>
                <b>Community Manager</b>: Foster a positive and engaging
                atmosphere in our community channels.
              </li>
              <li>
                <b>Blockchain Enthusiast</b>: Share your knowledge to help
                others understand DeFi and our platform.
              </li>
            </ul>
          </IntroPaper>
          <IntroPaper elevation={0}>
            <h1>How to Join Us?</h1>
            <p>
              If you’re passionate about the future of decentralized finance and
              want to be part of it, we’d love to have you! Here’s how to get
              started:
            </p>
            <ul>
              <li>
                <b>Contact Us</b>: Reach out via Telegram or X.com at{" "}
                <b>@yanshekki</b> to let us know your interests and how you’d
                like to contribute.
              </li>
              <li>
                <b>Showcase Your Skills</b>: Whether it’s one of the roles above
                or a unique talent, tell us what you can bring to the table.
              </li>
              <li>
                <b>Stay Connected</b>: Join our community channels to stay
                updated on project progress and engage in discussions.
              </li>
            </ul>
            <p>
              Let’s work together to build a platform that transforms investment
              management—making it more transparent, decentralized, and
              inclusive.
            </p>
            <h2>Join DeFund Protocol Today and Help Launch a New Era of Finance!</h2>
          </IntroPaper>
        </Box>
      </Container>
    </main>
  );
}