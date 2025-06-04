import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import cardStyles from "./cards.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import Translate from "@docusaurus/Translate";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          <Translate>Rahat - Aid Token Distribution</Translate>
        </h1>
        <p className="hero__subtitle">
          <Translate>
            Supporting vulnerable communities with a simple and efficient relief
            distribution platform.
          </Translate>
        </p>
        <div className={cardStyles.cardContainer}>
          <div className={cardStyles.card}>
            <img
              src="/img/undraw_docusaurus_tree.svg"
              alt="Developer Documentation"
              className={cardStyles.cardImage}
            />
            <h2 className={cardStyles.cardTitle}>
              <Translate>Developer Documentation</Translate>
            </h2>
            <p className={cardStyles.cardDescription}>
              <Translate>
                Access comprehensive documentation for developers, including API references,
                integration guides, and technical specifications.
              </Translate>
            </p>
            <Link
              className={clsx("button button--secondary button--lg", cardStyles.cardButton)}
              to="/docs/next/Introduction/Welcome"
            >
              <Translate>View Developer Docs</Translate>
            </Link>
          </div>

          <div className={cardStyles.card}>
            <img
              src="/img/undraw_docusaurus_react.svg"
              alt="User Documentation"
              className={cardStyles.cardImage}
            />
            <h2 className={cardStyles.cardTitle}>
              <Translate>User Documentation</Translate>
            </h2>
            <p className={cardStyles.cardDescription}>
              <Translate>
                Learn how to use Rahat platform with step-by-step guides,
                tutorials, and best practices for end users.
              </Translate>
            </p>
            <Link
              className={clsx("button button--secondary button--lg", cardStyles.cardButton)}
              to="/user-docs/Introduction/Welcome"
            >
              <Translate>View User Docs</Translate>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
