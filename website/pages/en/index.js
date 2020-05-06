/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = props => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href={docUrl('server.html')}>Server</Button>
            <Button href={docUrl('service.html')}>Service</Button>
            <Button href={docUrl('testing.html')}>Testing</Button>
            <Button href={docUrl('tools.html')}>Tools</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>What is Pandora Doc?</h2>
        <MarkdownBlock>
          This is just an ordinary website that contains server documentation,
          external service that made our life easier, testing framework, and related tools that I used on a daily basis.
        </MarkdownBlock>
        <MarkdownBlock>
          As far as we know, humans can sometimes forget things, 
          so I created this website to remind myself of what I have learned and applied in this life.
        </MarkdownBlock>
        <MarkdownBlock>
          Therefore, this Pandora Doc can be more than just an ordinary documentation website, it's life documentation.
          The Source of Knowledge, Not Much... but Useful for some reason.
        </MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              'If we stop learning and thinking, then there is no creativity and knowledge in our life. Therefore, every human being should struggle beyond anything in order to learn new things. Your life is the best teacher. Nobody can replace such a great teacher. Every life is a great example, we can surely learn many things. However, it is our attitude which makes us different from rest of the people',
            image: `${baseUrl}img/undraw_reading.svg`,
            imageAlign: 'left',
            title: 'Continuous Learning',
          },
        ]}
      </Block>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <FeatureCallout />
          <TryOut />
        </div>
      </div>
    );
  }
}

module.exports = Index;
