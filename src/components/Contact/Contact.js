import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
// import { validateEmail } from '../../utils/helpers'

function ContactForm() {
    const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
        
      e.stopPropagation();
    } else {
        
        console.log(formState)
    }
    setValidated(true);
  };

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
      });
      const { name, email, message } = formState;

      function handleChange(e) {
        // if (e.target.name === 'email') {
        //   const isValid = validateEmail(e.target.value);
        //   console.log(isValid);
        //   if (!isValid) {
        //     setValidated(false);
        //   }
        // //     setErrorMessage('');
        // //   }
        // } 
        //   if (!e.target.value.length) {
        //     setErrorMessage(`${e.target.name} is required.`);
        //   } else {
        //     setErrorMessage('');
        //   }
        // }
       
        // if (!errorMessage) {
          setFormState({ ...formState, [e.target.name]: e.target.value });
        // }
        // console.log('errorMessage', errorMessage);
      }
    
    //   function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log(formState);
    //   }
  return (
    <section>
      <div className="d-flex">
        <div className="skew section-heading">
          <h3 className="anti-skew">Contact Me</h3>
        </div>
      </div>
      <p className="mx-3">You may use the form below to send me a message. You may also click on
          one of the blue links below to find me on GitHub, LinkedIn, or send me
          an email with your default email app.</p>
      <Form className="contact-form mx-4 mb-4" noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" name="name" onChange={handleChange} defaultValue={name} required/>
          <Form.Control.Feedback type="invalid">
            Please provide your name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" name="email" onChange={handleChange} defaultValue={email} required/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid email address.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="messageTextarea">
          <Form.Label>Your Message</Form.Label>
          <Form.Control as="textarea" rows={5} name="message" onChange={handleChange} defaultValue={message} required/>
          <Form.Control.Feedback type="invalid">
            Please enter the text of your message.
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" className="submit-button ml-3">
          Submit
        </Button>
      </Form>
    </section>
  );
}

export default ContactForm;
