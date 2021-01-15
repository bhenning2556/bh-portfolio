import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Layout from '../components/layout'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import emailjs from 'emailjs-com'


export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_1c0epjn', 'template_3l9yd1r', e.target, 'user_z25IDELEA65XRbiiJEA47')
      .then((result) => {
        document.getElementById('alert').innerHTML = "Your message was sent! Thanks!"
      }, (error) => {
        console.log(error.text);
        document.getElementById('alert').innerHTML = "There was an error sending your message, please try again later"
      });
      e.target.reset()
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio - Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.content}>
        <h1 className="w-100 text-center">Contact Me</h1>
        <hr />
        <div className="d-flex flex-column flex-md-row text-center justify-content-around align-items-center pb-2">
          <div className="mb-2"><i class="far fa-envelope"></i> </div>
          <div className="mb-2"><i class="fas fa-phone"></i> </div>
          <div className="mb-2"><i class="fab fa-linkedin"></i> Connect with me: <a href="https://www.linkedin.com/in/benjaminmhenning/" target="_blank">benjaminmhenning</a></div>
        </div>

        <Form onSubmit={sendEmail}>

          <Form.Group controlId="nameForm">
            <Form.Label>First and Last Name</Form.Label>
            <Form.Control type="text" placeholder="First and Last Name" required name="name" />
          </Form.Group>

          <Form.Group controlId="emailForm">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Email" required name="email" />
          </Form.Group>

          <Form.Group controlId="organizationForm">
            <Form.Label>Organization</Form.Label>
            <Form.Control type="text" placeholder="Organization" required name="organization" />
          </Form.Group>

          <Form.Group controlId="subjectForm">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="Subject" required name="subject" />
          </Form.Group>

          <Form.Group controlId="messageForm">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} required name="message" />
          </Form.Group>

          <div className="w-100 d-flex justify-content-center">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
          <p id="alert" className="w-100 text-center text-danger mb-0"></p>    
        </Form>  
      </div>   

    </div>
  )
}