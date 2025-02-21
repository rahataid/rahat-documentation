<p>this is all version page</p>;
import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import versions from '../../versions.json';


export default function VersionsPage() {
  const { siteConfig } = useDocusaurusContext();
  const latestVersion = versions[0];
  return (
    <Layout
      title={`Versions`}
      description="Versions of Rahat Software Release"
    >
      <main>
        <div className="container">
          <div >
            <h3 id="latest" style={{ marginTop: '25px' }}>Current version (Stable)</h3>
            <p>Latest stable version of Rahat</p>
            <table>
              <tbody>
                <tr>
                  <th>{latestVersion}</th>
                  <td>
                    <Link to={`docs/next/Introduction/rahat`}>Documentation</Link>
                  </td>
                  <td>
                    <a href="https://github.com/esatya/rahat">
                      Release Notes
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <h3 id="rc">Latest version</h3>
            <p>Here you can find the latest unreleased documentation and code.</p>
            <table>
              <tbody>
                <tr>
                  <th>main</th>
                  <td>
                    <Link to={`docs/next/Introduction/rahat`}>Documentation</Link>
                  </td>
                  <td>
                    <a href="https://github.com/esatya/rahat">Source Code</a>
                  </td>
                </tr>
              </tbody>
            </table>
            <h3 id="archive">Past Versions</h3>
            <p>Here you can find documentation for previous versions of Rahat.</p>
            <table>
              <tbody>
                {versions.map(
                  version =>
                    version !== latestVersion && (
                      <tr key={version}>
                        <th>{version}</th>
                        <td>
                          <Link to={`docs/next/Introduction/rahat`}>
                            Documentation
                          </Link>
                        </td>
                      </tr>
                    )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </Layout>
  );
}
