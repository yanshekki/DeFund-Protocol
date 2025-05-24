"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import PageLink from "@/components/pageLink";

const ProposalPaper = styled(Paper)(({ theme }) => ({
  width: "100hv",
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

export default function Proposal() {
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
          <ProposalPaper elevation={0}>
            <h1>DeFund Protocol Project Proposal</h1>
            <h2>Project Description</h2>
            <p>
              <b>Overview:</b> DeFund Protocol is a decentralized platform
              designed to enable individuals and organizations to create and
              manage investment funds in a secure, transparent, and
              intermediary-free environment. Built on the Avalanche network, it
              leverages blockchain technology and smart contracts to empower
              fund managers to launch customizable funds while providing
              investors with seamless access to diverse investment
              opportunities.
            </p>
            <h2>Goals:</h2>
            <ul>
              <li>
                Democratize access to fund management and investment
                opportunities for all users.
              </li>
              <li>
                Deliver a secure, transparent, and efficient platform for
                creating and participating in funds.
              </li>
              <li>
                Drive innovation in decentralized finance (DeFi) by supporting
                customizable investment strategies.
              </li>
              <li>
                Provide professional technical support services to help global
                companies raise funds on the platform, positioning DeFund
                Protocol as a decentralized Kickstarter.
              </li>
            </ul>
            <h2>Expected Use Cases:</h2>
            <ul>
              <li>
                <b>Fund Managers:</b> Create tailored funds based on specific
                strategies, such as cryptocurrency trading, real estate
                investment, or venture capital.
              </li>
              <li>
                <b>Investors:</b> Diversify portfolios by joining multiple funds
                with varying risk and return profiles.
              </li>
              <li>
                <b>Institutions and Companies:</b> Manage and distribute funds
                transparently and in compliance with regulatory standards, with
                professional support for decentralized fundraising.
              </li>
            </ul>
          </ProposalPaper>

          <ProposalPaper elevation={0}>
            <h2>Potential Benefits for the Avalanche Ecosystem:</h2>
            <ul>
              <li>Increasing Liquidity</li>
              <li>Fostering Innovation and Diversity</li>
              <li>Driving Developer Community Growth</li>
              <li>Enhancing Ecosystem Integration</li>
              <li>Improving Security and Transparency</li>
              <li>Boosting User Adoption and Education</li>
              <li>Showcasing Avalanche’s Performance Advantages</li>
            </ul>
          </ProposalPaper>

          <ProposalPaper elevation={0}>
            <h2>Detailed Roadmap</h2>
            <ul>
              <li>
                <b>Conceptualization (October 2024):</b> Define the platform’s
                vision, goals, and core features; identify target users.
              </li>
              <li>
                <b>Research (November 2024):</b> Analyze market trends,
                competitors, and regulatory requirements.
              </li>
              <li>
                <b>Design (December 2024):</b> Develop a project plan, system
                architecture, and UI/UX prototypes.
              </li>
              <li>
                <b>Development (January 2025 - March 2025):</b> Build smart
                contracts, front-end, and back-end components; set up the
                development environment.
              </li>
              <li>
                <b>Testing (March 2025):</b> Perform unit tests, integration
                tests, and user acceptance testing (UAT).
              </li>
              <li>
                <b>Public Testing (March 2025):</b> Launch a public testing
                phase to collect feedback and address issues.
              </li>
              <li>
                <b>Deployment & Launch (TBD):</b> Deploy the platform on the
                Avalanche mainnet and make it publicly accessible.
              </li>
              <li>
                <b>Create First Fund (TBD):</b> Launch an initial fund to
                demonstrate functionality and attract users.
              </li>
              <li>
                <b>Smart Contract Audit (TBD):</b> Engage a third-party auditor
                to ensure security and reliability.
              </li>
              <li>
                <b>Open Source (TBD):</b> Release the source code to foster
                transparency and community involvement.
              </li>
              <li>
                <b>Seek Partnerships (TBD):</b> Collaborate with other projects
                or institutions to expand capabilities.
              </li>
              <li>
                <b>Launch Professional Support Services (TBD):</b> Introduce
                paid professional support to help companies raise funds on
                DeFund Protocol.
              </li>
              <li>
                <b>Launch Our Layer 1 (TBD):</b> Develop and launch a
                proprietary Layer 1 blockchain network.
              </li>
            </ul>
          </ProposalPaper>

          <ProposalPaper elevation={0}>
            <h2>Business Model and Potential Revenue Sources</h2>
            <ul>
              <li>
                <b>1% Fixed Fee on Profit Distributions:</b> A consistent
                revenue stream charged on every profit distribution.
              </li>
              <li>
                <b>Paid Smart Contract Audit Services:</b> Optional audit
                services for each fund contract.
              </li>
              <li>
                <b>Transparent Fee Distribution Service:</b> A small service fee
                for fair fee allocation.
              </li>
              <li>
                <b>Professional Technical Support for Global Fundraising:</b>{" "}
                Paid services for smart contract development, blockchain
                integration, and fundraising strategy consulting.
              </li>
              <li>
                <b>DeFund Protocol DAO Token Sale:</b> A DAO token will fund
                ongoing development and enable decentralized governance.
              </li>
            </ul>
          </ProposalPaper>

          <ProposalPaper elevation={0}>
            <h2>Budget Proposal with Suggested Milestones</h2>
            <ul>
              <li>
                <b>Development Phase (January 2025 - March 2025):</b> Funding
                for smart contract development, front-end/back-end coding, and
                initial testing.
              </li>
              <li>
                <b>Testing and Auditing (March 2025):</b> Funding for
                comprehensive testing and a third-party smart contract audit.
              </li>
              <li>
                <b>Deployment and Launch (TBD):</b> Funding for mainnet
                deployment and initial marketing efforts.
              </li>
              <li>
                <b>Post-Launch Development (TBD):</b> Funding for new features,
                partnerships, and professional support services.
              </li>
            </ul>
          </ProposalPaper>

          <ProposalPaper elevation={0}>
            <h2>Project-Specific KPIs</h2>
            <ul>
              <li>Number of Funds Created</li>
              <li>Total Value Locked (TVL)</li>
              <li>Number of Active Investors</li>
              <li>Transaction Volume</li>
              <li>Fund Performance Metrics</li>
              <li>Number of Companies Using Professional Support</li>
              <li>Community Growth</li>
            </ul>
          </ProposalPaper>

          <ProposalPaper elevation={0}>
            <h2>Team Background and Skills</h2>
            <p>
              The DeFund Protocol team comprises skilled professionals equipped
              to deliver the project:
            </p>
            <ul>
              <li>Blockchain Developers</li>
              <li>Front-End and Back-End Engineers</li>
              <li>Financial Experts</li>
              <li>Technical Support Specialists</li>
              <li>Marketing and Community Managers</li>
              <li>Legal and Compliance Advisors</li>
            </ul>
          </ProposalPaper>

          <ProposalPaper elevation={0}>
            <h2>Conclusion</h2>
            <p>
              DeFund Protocol is poised to revolutionize decentralized fund
              management and fundraising on the Avalanche network. By offering a
              secure, transparent, and customizable platform, combined with
              professional technical support for global companies, DeFund
              Protocol aims to become the decentralized Kickstarter.
            </p>
          </ProposalPaper>
        </Box>
      </Container>
    </main>
  );
}
