import React from 'react';
import { Accordion, Card, Container, Row, Col } from 'react-bootstrap';

function Portfolio() {
  return (
    <section>
      <div className="d-flex">
        <div className="skew section-heading">
          <h3 className="anti-skew">Portfolio</h3>
        </div>
      </div>
      <Container>
        <Row className="my-5">
          <Col xs={11} md={6} className="card-slot">
            <Accordion defaultActiveKey="0">
              <Card>
                <Card.Title className="project-title">SLP Goalden</Card.Title>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="0"
                  >
                    Image
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Img
                    src={
                      require(`../../assets/images/projects/slp-goalden-pic.webp`)
                        .default
                    }
                    className="project"
                  />
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey="1"
                  >
                    Details
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <p>
                      An app designed to help speech language pathologists keep
                      track of student goals and goal progress. It utilizes a
                      MySQL database and Handlebars templating engine. Built
                      with Node, MySQL, Sequelize, Express, HTML, CSS,
                      JavaScript.
                    </p>
                    <Card.Link
                      href="https://mighty-falls-97052.herokuapp.com/"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      <span className="site-link">Site</span>
                    </Card.Link>
                    <Card.Link
                      href="https://github.com/Craig5117/slp-goalden"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      <i className="fab fa-github icon-link icon"></i>
                    </Card.Link>
                  </Card.Body>
                </Accordion.Collapse>
                <Card.Text> Node MySQL Materialize</Card.Text>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Portfolio;