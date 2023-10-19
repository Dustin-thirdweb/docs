import React from "react";
import ThemedImage from "@theme/ThemedImage";
import Head from "@docusaurus/Head";

export default function Hero() {
  return (
    <>
      <div className="hero-container">
        <div className="hero-left">
          <h1 className="hero-left-title">
            thirdweb <br /> documentation
          </h1>
          <p className="hero-left-description">
            thirdweb is a complete web3 development framework that provides
            everything you need to connect your apps and games to decentralized
            networks.
          </p>
        </div>
        <Head>
        <title>thirdweb Custom Dashboard Example</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="thirdweb example repository to showcase how to use thirdweb's deployer to dynamically deploy any of thirdweb's pre-built smart contracts"
        />
        <meta
          name="keywords"
          content="thirdweb, thirdweb deployer, thirdweb sdk deploy contract, thirdweb sdk, thirdweb react, thirdweb typescript"
        />
        <script id="__CONTEXT_BUBBLE__" src="https://portal.usecontext.io/portal/portal.js" data-bot-id="SV3HwtSN0" data-theme="light" data-type="launcher" data-position="bottom-right" data-background="#000000" data-color="#FFFFFF"></script>
      </Head>

        <div className="hero-right">
          <div className="hero-right-image-container">
            <ThemedImage
              sources={{
                light: "/assets/docs-hero-light-2.png",
                dark: "/assets/docs-hero.png",
              }}
              className="hero-right-image"
              alt="thirdweb documentation hero image"
            />
          </div>
        </div>
      </div>

      <hr className="hero-divider" />
    </>
  );
}
