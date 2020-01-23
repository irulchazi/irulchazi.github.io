/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const experienceLinks = [
    // {
    //   content: `Learn more using the [documentation on this site.](${docUrl(
    //     'doc1.html',
    //   )})`,
    //   title: 'Browse Docs',
    // },
    {
      content: 'Role: DevOps Engineer' + '\n' + '\n' +
      'Period: Jan 2019 - Jan 2020' + '\n' + '\n' +
      'Responsibilities:' + '\n' + '\n' +
      '- Managing Server Infrastructure in Cloud Service.' + '\n' + '\n' +
      '- Simplify CI/CD in development process, from development environment until production environment.' + '\n' + '\n' +
      '- Engage with developer to solve issue about deployment, data, or related issue.',
      title: 'Paket ID',
    },
    {
      content: 'Role: System Analyst' + '\n' + '\n' +
       'Period: Jan 2018 - Dec 2018' + '\n' + '\n' +
       'Responsibilities:' + '\n' + '\n' +
       '- Analyzing System Process and Involve in every stages of software development life cycle.' + '\n' + '\n' +
       '- Act as Scrum Master, maintain backlog, plan weekly sprint and distribute scrum cards.' + '\n' + '\n' +
       '- Creating Document Report based on System Development.',
      title: 'Solutech Inovasi Teknologi',
    },
  ];

  const educationLinks = [
    {
      content: 'Major: Computer Science at Faculty of Information and Technology' + '\n' + '\n' +
      'Period: 2013 - 2017' + '\n' + '\n' +
      'GPA: 3.8 (in scale of 0 to 4.0)' + '\n' + '\n' +
      'Activities and Societies:' + '\n' + '\n' +
      '- Kelas Unggulan Teknik Informatika 2013.' + '\n' + '\n' +
      '- Cyber Patrol Community.',
      title: 'Universitas Budi Luhur (UBL)',
    },
    {
      content: 'Major: Computer Science at Faculty of Mathematics and Natural Science' + '\n' + '\n' +
      'Period: 2015 - 2016' + '\n' + '\n' +
      'GPA: 3.6 (in scale of 0 to 4.0)' + '\n' + '\n' +
      'Other Information:' + '\n' + '\n' +
      '- Joint degree program between Budi Luhur University and Gadjah Mada University',
      title: 'Universitas Gadjah Mada (UGM)',
    },
  ];

  const certificationLinks = [
    {
      content: `Issued by: [EC-Council](https://www.eccouncil.org/)` + '\n' + '\n' +
      'Issued Date: October 29, 2019' + '\n' + '\n' +
      '- [Click this for Certification Detail](https://drive.google.com/file/d/1JLfloTrOn3TdDwz9K8-F49ZLI2-1-H7K/view)',
      title: 'Certified Secure Computer User (CSCU)',
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Hi There, Chairul's Here 👋</h1>
          </header>
          <p>I'am ambitious person with a strong desire to simplify CI/CD in software development process, having an interest in Linux Server and Open Source Application, in my free time I love to read a book about Philosophy and doing Landscape Photography.</p>
          <h1>Work Experience</h1>
          <hr></hr>
          <GridBlock contents={experienceLinks} layout="twoColumn" />
          <h1>Educational Background</h1>
          <hr></hr>
          <GridBlock contents={educationLinks} layout="twoColumn" />
          <h1>Certification</h1>
          <hr></hr>
          <GridBlock contents={certificationLinks} layout="twoColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
