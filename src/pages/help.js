import React from "react";
import Layout from "@theme/Layout";
import { Container, Row, Col } from "reactstrap";
import Link from "@docusaurus/Link";

export default function HelpPage() {
  return (
    <Layout title={`Help`} description="Help Page">
      <main>
        <Container>
          <Row style={{ marginTop: "4rem", marginLeft: "0.3rem" }}>
            <Col md={12}>
              <h1>Need help?</h1>
              <p style={{ fontSize: "20px" }}>
                Rahat is worked on by dedicated team members for the improvement
                of the Rahat applications. You can find out ways to talk to our
                members below.
              </p>
            </Col>
          </Row>
          <Row style={{ marginTop: "2rem" }}>
            <Col>
              <h1>Browse the docs</h1>
              <p style={{ fontSize: "20px" }}>
                Find what you're looking for in our detailed documentation and
                guides.
                <ul>
                  <li style={{ fontSize: "20px" }}>
                    Learn how to{" "}
                    <Link to="/docs/developer_guide">get started</Link> with
                    Jest.{" "}
                  </li>
                  <li style={{ fontSize: "20px" }}>
                    {" "}
                    Look at the full{" "}
                    <Link to="/docs/intro">API Reference</Link>.
                  </li>
                </ul>
              </p>
            </Col>
            <Col>
              <h1>Join the community</h1>
              <p style={{ fontSize: "20px" }}>
                Ask questions and find answers from other Rahat users like you.
                <ul>
                  <li style={{ fontSize: "20px" }}>
                    Join us on Discord,{" "}
                    <Link to="https://discord.gg/zDwzuCAhmu">
                      Rahat Community
                    </Link>
                  </li>
                </ul>
              </p>
            </Col>
            <Col>
              <h1>Stay up to date</h1>
              <p style={{ fontSize: "20px" }}>
                Find out what's new with Jest.
                <ul>
                  <li style={{ fontSize: "20px" }}>
                    Visit our <Link to="https://rahat.io/">website</Link>
                  </li>
                  <li style={{ fontSize: "20px" }}>
                    Follow Rahat on{" "}
                    <Link to="https://twitter.com/rahataid">Twitter.</Link>
                  </li>
                  <li style={{ fontSize: "20px" }}>
                    {" "}
                    Star us on,{" "}
                    <Link to="https://github.com/esatya">Github</Link>
                  </li>
                </ul>
              </p>
            </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  );
}
