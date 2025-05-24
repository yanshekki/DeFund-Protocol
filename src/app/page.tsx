"use client";

import { Button, Box, Typography } from "@mui/material";
import { redirect } from "next/navigation";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import home_1 from "@/app/img/home_1.png";
import home_2 from "@/app/img/home_2.png";
import home_3 from "@/app/img/home_3.png";
import home_4 from "@/app/img/home_4.png";
import PageLink from "@/components/pageLink";

export default function Home() {
  return (
    <main
      className="flex flex-col items-center p-5 gap-4 justify-center text-center"
      style={{ minHeight: "80vh" }}
    >
      <Box sx={{ maxWidth: { xs: "100%", sm: "800px" } }}>
        <Box sx={{ marginTop: 5 }}>
          <Typography variant="h3" gutterBottom>
            Welcome to DeFund Protocol
          </Typography>
          <Typography variant="h5" gutterBottom>
            A decentralized platform for secure, transparent, and customizable
            investments.
          </Typography>

          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h6">For Fund Managers</Typography>
              <Typography>
                Launch your own fund with custom rules and automated profit
                sharing.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h6">For Investors</Typography>
              <Typography>
                Explore funds, invest securely, and earn with full transparency.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ marginTop: 5 }}>
            {home_4 && (
              <Image
                src={home_4}
                alt="DeFund Protocol"
                style={{ width: "100%", height: "auto", marginRight: 5 }}
              />
            )}
        </Box>
        <Box sx={{ marginTop: 5 }}>
          <Button
            style={{
              color: "black",
              borderColor: "white",
              backgroundColor: "white",
              marginTop: 10,
            }}
            variant="contained"
            color="primary"
            size="large"
            onClick={() => redirect("/create")}
            sx={{ m: 2 }}
          >
            Create Your Fund Now
          </Button>
          <Button
            style={{
              color: "white",
              borderColor: "white",
              marginTop: 10,
            }}
            variant="outlined"
            color="primary"
            size="large"
            onClick={() => redirect("/marketplace")}
            sx={{ m: 2 }}
          >
            Explore Funds
          </Button>
        </Box>

        <Grid container spacing={2} sx={{ mt: 5 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            {home_1 && (
              <Image
                src={home_1}
                alt="DeFund Protocol"
                style={{ width: "100%", height: "auto", marginRight: 5 }}
              />
            )}
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h6">Create a Fund</Typography>
            <ul
              style={{
                textAlign: "left",
                listStyle: "disc",
                padding: "30px",
              }}
            >
              <li>Smart contracts automate fund management.</li>
              <li>
                Blockchain ensures transactions are transparent and
                tamper-proof.
              </li>
              <li>
                Accessible to all users, regardless of technical background.
              </li>
            </ul>
          </Grid>
          <Grid size={{ xs: 12, md: 12 }}>
            <i>
              You can easily create your own investment fund on the blockchain
              with just a few simple steps and clicks. By deploying a smart
              contract, which acts as the foundation of your fund, you ensure
              that all investments are managed securely and transparently. This
              smart contract oversees all fund operations, including deposits
              and profit distribution, using blockchain technology to provide
              transparency and immutability. Whether you’re a beginner exploring
              investing or an experienced investor, this process is designed to
              be straightforward and requires little technical expertise.
            </i>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mt: 5 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h6">Set Your Rules</Typography>
            <ul
              style={{
                textAlign: "left",
                listStyle: "disc",
                padding: "30px",
              }}
            >
              <li>
                Flexible settings to support various investment approaches.
              </li>
              <li>
                Transparent rules help investors understand risks and returns.
              </li>
              <li>
                Smart contracts enforce these rules consistently and fairly.
              </li>
            </ul>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            {home_2 && (
              <Image
                src={home_2}
                alt="DeFund Protocol"
                style={{ width: "100%", height: "auto", marginRight: 5 }}
              />
            )}
          </Grid>
          <Grid size={{ xs: 12, md: 12 }}>
            <i>
              After creating your fund, you can customize its rules to match
              your investment strategy and goals. This involves setting deposit
              limits (e.g., minimum and maximum amounts), defining withdrawal
              policies (e.g., timing and conditions for withdrawals), and
              establishing profit-sharing mechanisms (e.g., how revenue is
              divided between investors and the fund manager). These rules are
              fully customizable, giving you the flexibility to design a fund
              that aligns with your vision.
            </i>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mt: 5 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            {home_3 && (
              <Image
                src={home_3}
                alt="DeFund Protocol"
                style={{ width: "100%", height: "auto", marginRight: 5 }}
              />
            )}
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h6">Manage & Earn</Typography>
            <ul
              style={{
                textAlign: "left",
                listStyle: "disc",
                padding: "30px",
              }}
            >
              <li>Automated profit distribution minimizes manual work.</li>
              <li>
                Growth in investor participation boosts your earning potential.
              </li>
              <li>
                Simplified management lets you focus on strategy, not
                administration.
              </li>
            </ul>
          </Grid>
          <Grid size={{ xs: 12, md: 12 }}>
            <i>
              Once your fund is live, you can manage it and start earning
              rewards. Investors can join, deposit their assets, and earn
              returns based on the fund’s performance. The smart contract
              automatically distributes profits to all participants, ensuring
              that both investors and you, as the fund manager, receive your
              shares as per the preset rules. You can also earn management fees
              as commissions, allowing you to profit while helping investors
              succeed.
            </i>
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}
