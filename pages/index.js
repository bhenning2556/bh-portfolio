import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import Layout from '../components/layout'
import TitleGif from '../public/text-anim-gray.gif'

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
          <h1>Benjamin Henning</h1>
          <img src={TitleGif} style={{height: "30px", width: "270px"}} alt="Fullstack Developer"></img>
          <p>
            Thanks for viewing my Portfolio! Check out my past work in the 'projects' tab where you can see live previews or view the source code on github.
          </p>
          <p>
            <Link href="/projects"><Button variant="primary">See Projects <i class="fas fa-arrow-right"></i></Button></Link>
          </p>
        </Jumbotron>
      </div>
    </Layout>
  )
}