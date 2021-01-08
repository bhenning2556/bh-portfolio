import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Layout from '../components/layout'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import React from 'react'
import axios from 'axios';

class Contact extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        organization: '',
        subject:'',
        message: ''
      }
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
  }
  onEmailChange(event) {
    this.setState({email: event.target.value})
  }
  onOrgChange(event) {
    this.setState({organization: event.target.value})
  }
  onSubjectChange(event) {
    this.setState({subject: event.target.value})
  }
  onMsgChange(event) {
    this.setState({message: event.target.value})
  }

  submitEmail(e){
    e.preventDefault();
    axios({
      method: "POST", 
      url:"/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success'){
          alert("Message Sent."); 
          this.resetForm()
      }else if(response.data.status === 'fail'){
          alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    this.setState({name: '', email: '', organization: '', subject:'', message: ''})
  }

  render () {
    return (
      <Layout>
        <div className={styles.container}>
          <Head>
            <title>Portfolio - Contact</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <div className={styles.content}>
            <h1 className="w-100 text-center">Contact Me</h1>
            <hr />
            <div className="d-flex flex-column flex-md-row text-center justify-content-around align-items-center pb-2">
              <div className="mb-2"><i class="far fa-envelope"></i> Email me: bhenning2556@gmail</div>
              <div className="mb-2"><i class="fas fa-phone"></i> Call me: 425.273.9251</div>
              <div className="mb-2"><i class="fab fa-linkedin"></i> Connect with me: <a href="https://www.linkedin.com/in/benjaminmhenning/" target="_blank">benjaminmhenning</a></div>
            </div>

            <Form onSubmit={this.submitEmail.bind(this)} method="POST">

              <Form.Group controlId="name">
                <Form.Label>First and Last Name</Form.Label>
                <Form.Control type="text" placeholder="First and Last Name" required value={this.state.name} onChange={this.onNameChange.bind(this)} />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Email" required value={this.state.email} onChange={this.onEmailChange.bind(this)} />
              </Form.Group>

              <Form.Group controlId="organization">
                <Form.Label>Organization</Form.Label>
                <Form.Control type="text" placeholder="Organization" required value={this.state.organization} onChange={this.onOrgChange.bind(this)} />
              </Form.Group>

              <Form.Group controlId="subject">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Subject" required value={this.state.subject} onChange={this.onSubjectChange.bind(this)} />
              </Form.Group>

              <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} required value={this.state.message} onChange={this.onMsgChange.bind(this)} />
              </Form.Group>

              <div className="w-100 d-flex justify-content-center">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>  
            </Form>  
          </div>   

        </div>
      </Layout>
    )
  }
}

export default Contact