/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Documentation</h5>
            <a href={this.docUrl('doc1.html', this.props.language)}>
              Server Docs
            </a>
            <a href={this.docUrl('doc2.html', this.props.language)}>
              Service Docs
            </a>
            <a href={this.docUrl('doc3.html', this.props.language)}>
              Testing Docs
            </a>
            <a href={this.docUrl('doc3.html', this.props.language)}>
              Tools Docs
            </a>
          </div>
          <div>
            <h5>Built Using this Tech</h5>
            <a
              href="https://community.algolia.com/docsearch/"
              target="_blank"
              rel="noopener">
              Docsearch by Algolia
            </a>
            <a
              href="https://docusaurus.io/"
              target="_blank"
              rel="noopener">
              Docusaurus
            </a>
            <a
              href="https://education.github.com/pack/"
              target="_blank"
              rel="noopener">
              GitHub Student Developer Pack
            </a>
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noreferrer noopener">
              React JS
            </a>
          </div>
          <div>
            <h5>Contact Me</h5>
            {/* <a href={`${this.props.config.baseUrl}blog`}>Blog</a> */}
            <a href="tel:+6283812711745">Call Me</a>
            <a href="mailto:irulchazi@gmail.com">Send Me an Email</a>
            <a
              href="https://github.com/irulchazi/"
              target="_blank"
              rel="noreferrer noopener">
              Visit my GitHub
            </a>
            {/* <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
            {this.props.config.twitterUsername && (
              <div className="social">
                <a
                  href={`https://twitter.com/${this.props.config.twitterUsername}`}
                  className="twitter-follow-button">
                  Follow @{this.props.config.twitterUsername}
                </a>
              </div>
            )}
            {this.props.config.facebookAppId && (
              <div className="social">
                <div
                  className="fb-like"
                  data-href={this.props.config.url}
                  data-colorscheme="dark"
                  data-layout="standard"
                  data-share="true"
                  data-width="225"
                  data-show-faces="false"
                />
              </div>
            )} */}
          </div>
        </section>

        {/* <a
          href="https://opensource.facebook.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource">
          <img
            src={`${this.props.config.baseUrl}img/oss_logo.png`}
            alt="Facebook Open Source"
            width="170"
            height="45"
          />
        </a> */}
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
