import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import Layout from '../components/layout'
import TitleGif from '../public/text-anim-gray-lg.gif'
import Skill from '../components/skill'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

import htmlLogo from '../public/html5-2.svg'
import cssLogo from '../public/css3.svg'
import javascriptLogo from '../public/javascript.svg'
import reactLogo from '../public/react-1.svg'
import bootstrapLogo from '../public/bootstrap-4.svg'
import nextjsLogo from '../public/next-js.svg'
import csharpLogo from'../public/c--4.svg'



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

        <Jumbotron>
          <h2>Skills</h2>
          <div className="d-flex">
            <Skill title="HTML" imgsrc={htmlLogo} />
            <Skill title="CSS" imgsrc={cssLogo} />
            <Skill title="JavaScript" imgsrc={javascriptLogo} />
            <Skill title="React" imgsrc={reactLogo} />
            <Skill title="Bootstrap" imgsrc={bootstrapLogo} />
            <Skill title="NextJS" imgsrc={nextjsLogo} />
            <Skill title="C#" imgsrc={csharpLogo} />

          </div>
        </Jumbotron>

      </div>
    </Layout>
  )
}