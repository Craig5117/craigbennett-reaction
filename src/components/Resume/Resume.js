import React from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';

function Resume() {
  return (
    <section>
      <div className="d-flex">
        <div className="skew section-heading">
          <h3 className="anti-skew">Resume</h3>
        </div>
      </div>
      <p className="resume-text">
        A list of my skills can be found below. In addition to the skills
        listed, I also have experience working with GitHub and Heroku. Use the
        provided blue link to download my resume.
      </p>
      <div className="d-flex justify-content-end mb-5 ">
        <div className="skew resume-link text-center">
          <a href="./Craig-Bennett_Resume.pdf" download>
            <p className="anti-skew resume-link-text">
              My Resume <i className="fas fa-file-download"></i>
            </p>
          </a>
        </div>
      </div>
      <div className="skills-border mb-5">
        <Container className="skills-container">
          <div className="bg-theme-2 skew skills-header mt-4 ml-1 ml-md-5">
            <h4 className="anti-skew">My Skills</h4>
          </div>
          <Row>
            <Col xs={12}></Col>
          </Row>
          <Row className="skills d-flex justify-content-center">
            <Col xs={11} md={4} lg={3} className="mt-5">
              <Card className="skill-card">
                <Card.Title className="skill-card-header">
                  <h5>
                    Front-end <i className="fas fa-laptop-code"></i>
                  </h5>
                </Card.Title>
                <Card.Body>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Bootstrap</li>
                    <li>Bulma</li>
                    <li>Materialize</li>
                    <li>React</li>
                    <li>React Bootstrap</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={11} md={4} lg={3} className="m-5">
              <Card className="skill-card">
                <Card.Title className="skill-card-header">
                  <h5>
                    Back-end <i className="fas fa-database"></i>
                  </h5>
                </Card.Title>
                <Card.Body>
                  <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MySQL</li>
                    <li>Sequelize</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>MongoDB Atlas</li>
                    <li>Inquirer</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Resume;
