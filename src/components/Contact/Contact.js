import React, { useCallback, useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { validateEmail } from '../../utils/helpers'

function ContactForm() {
    const [validated, setValidated] = useState(false);
    const [loading, setLoading] = useState(false);
    const [inputE1, setInputE1] = useState('');
    const [inputE2, setInputE2] = useState('');
    const [inputE3, setInputE3] = useState('')
    const [disabled, setDisabled] =useState(false);
    // const [formState, setFormState] = useState({
    //     name: '',
    //     email: '',
    //     message: '',
    //   });
  const handleSubmit = async (e) => {
    // const form = e.currentTarget;
   
    e.preventDefault();
    if (!validated && !disabled ) {
        setValidated(false)
        handlingValidation();
    }   

    setLoading(true)
    setValidated(true)
    if (!disabled) {
        let res = await fetch('/', {
    body: JSON.stringify({
        name: inputE1,
        email: inputE2,
        message: inputE3
    }),
    headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        Authorization: 'Bearer somecodehere'
    },
    method: "POST",
    credentials: "include"
    })
    // error !loading ? condition : loading && !error : condition ? datacondition : <></>
    const { error, data } = await res.json();
    if (error && !loading) {
        console.log(error)
        return
    } else {
        <div>loading...</div>
    }
    console.log(inputE1, inputE2, inputE3)
    setLoading(false);
    setInputE1('');
    setInputE2('');
    setInputE3('');
    
    return data.json();
    }
    
    // mailchimp, sendgrid, mailgun, nodemail, AWS SES
    // if (form.checkValidity() === false) {
        
    

    //   e.stopPropagation();
    // } else {
        
    // console.log(formState)
    // }
    // setValidated(true);
  };

  const handlingValidation = useCallback(() => {
      if (!validated) {
          setDisabled(!validateEmail(inputE2) || (!inputE1) || (!inputE2) || (!inputE3))
      }
  }, [inputE1, inputE2, inputE3, validated])

  useEffect(() => {
      handlingValidation()
  }, [handlingValidation])

    //   const { name, email, message } = formState;

    //   function handleChange(e) {
    //     // if (e.target.name === 'email') {
    //     //   const isValid = validateEmail(e.target.value);
    //     //   console.log(isValid);
    //     //   if (!isValid) {
    //     //     setValidated(false);
    //     //   }
    //     // //     setErrorMessage('');
    //     // //   }
    //     // } 
    //     //   if (!e.target.value.length) {
    //     //     setErrorMessage(`${e.target.name} is required.`);
    //     //   } else {
    //     //     setErrorMessage('');
    //     //   }
    //     // }
       
    //     // if (!errorMessage) {
    //       setFormState({ ...formState, [e.target.name]: e.target.value });
    //     // }
    //     // console.log('errorMessage', errorMessage);
    //   }
    
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
          <Form.Control type="text" placeholder="Enter your name" name="name" onChange={setInputE1} required/>
          {/* {!inputE1 && <div>Please enter your name</div>} */}
          {/* {!inputE1 ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )} */}
          <Form.Control.Feedback type="invalid">
            Please provide your name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" name="email" onChange={setInputE2} required/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid email address.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="messageTextarea">
          <Form.Label>Your Message</Form.Label>
          <Form.Control as="textarea" rows={5} name="message" onChange={setInputE3} required/>
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
