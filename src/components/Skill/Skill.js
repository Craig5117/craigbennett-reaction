import React from 'react';
import { Col, Card } from 'react-bootstrap';
// renders the skill cards, skillset was a nested array passed in from parent
// it is mapped here to populate the skill card
function Skill(props) {
  const { name, skillset } = props;
  // sets different icon for front-end and back-end
  const renderSkillIcon = () => {
    if (name === 'Front-end') {
      return <i className="fas fa-laptop-code"></i>;
    } else {
      return <i className="fas fa-database"></i>;
    }
  };

  return (
    <Col xs={11} md={4} lg={3} className="mt-5">
      <Card className="skill-card">
        <Card.Title className="skill-card-header">
          <h5>
            {name} {renderSkillIcon()}
          </h5>
        </Card.Title>
        <Card.Body>
          <ul>
            {skillset.map((skill, i) => (
              <li key={i}>{skill}</li> 
            ))}
          </ul>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Skill;
