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
          <div className="d-flex flex-column flex-md-row w-100 justify-content-center align-items-center">
            <h1>Benjamin Henning</h1>
            <img src={TitleGif} style={{marginLeft: "20px", width: "450px", height: "36px"}} alt="Fullstack Developer"></img>
          </div>
          
          <p className="text-align-center">
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