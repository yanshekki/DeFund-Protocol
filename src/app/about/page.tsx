"use client";

export default function About() {
  return (
    <main
      className="flex flex-col items-center p-5 gap-4 justify-center text-center"
      style={{
        minHeight: "80vh",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
        }}
      >
        <h1 className="text-4xl font-bold mb-5">Hello World!</h1>
        <p className="text-xl mb-5">
          DeFund Protocol is a decentralized platform empowering individuals and
          organizations to create and manage their own investment funds in a
          trustless and transparent environment. By leveraging blockchain
          technology and smart contracts, DeFund Protocol eliminates
          intermediaries, allowing fund managers to launch their own funds while
          enabling investors to participate in diverse investment opportunities
          securely and efficiently.
        </p>
        <p className="text-xl mb-5">
          Fund managers can customize parameters such as deposit limits,
          withdrawal policies, and profit-sharing mechanisms, tailoring their
          funds to specific strategies and goals. Investors, on the other hand,
          can explore various funds, contribute their assets, and earn returns
          based on the performance of their chosen funds.
        </p>
        <p className="text-xl mb-5">
          With features like tokenized fund shares, automated profit
          distribution, and on-chain transparency, DeFund Protocol democratizes
          fund management and investment, making it accessible to everyone,
          anywhere in the world.
        </p>
      </div>
    </main>
  );
}
