import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import Layout from '../components/layout'
import TitleGif from '../public/text-anim-gray-lg.gif'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Benjamin Henning - Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Jumbotron>
          <div className="d-flex flex-column flex-md-row w-100 justify-content-center">
            <h1 style={{marginLeft: "20px"}}>Benjamin Henning</h1>
            <div className="d-flex align-items-center pt-2" style={{height: "48px"}}><img src={TitleGif} style={{marginLeft: "20px", width: "450px", height: "36px"}} alt="Fullstack Developer"></img></div>
          </div>
          
          <p style={{marginLeft: "20px", marginTop: "20px"}}>
            Thanks for viewing my Portfolio! Check out my past work in the 'projects' tab where you can see live previews or view the source code on github.
          </p>
          <div className="d-flex w-100 justify-content-center">
            <Link href="/projects"><Button variant="primary">See Projects <i class="fas fa-arrow-right"></i></Button></Link>
          </div>
        </Jumbotron>
      </div>
    </Layout>
  )
}