import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import Layout from '../components/layout'
import TitleGif from '../public/text-anim-gray-lg.gif'
import Skill from '../components/skill'
import Button from 'react-bootstrap/Button'

import htmlLogo from '../public/html-5.png'
import cssLogo from '../public/css.png'
import javascriptLogo from '../public/javascript.svg'
import reactLogo from '../public/react-1.svg'
import bootstrapLogo from '../public/bootstrap-4.svg'
import nextjsLogo from '../public/next-js.svg'
import csharpLogo from'../public/c--4.svg'
import aspnetLogo from '../public/aspnet_logo.png'
import javaLogo from '../public/java-4.svg'
import pythonLogo from '../public/python-5.svg'
import adobeXdLogo from '../public/adobe-xd.svg'
import adobeAeLogo from '../public/after-effects-2019.svg'
import githubLogo from '../public/github.svg'
import matplotlibLogo from '../public/matplotlib.png'
import numpyLogo from '../public/numpy.png'
import pandasLogo from '../public/pandas.png'
import adobePsLogo from '../public/photoshop-cc.svg'
import sklearnLogo from '../public/sklearn.png'
import sqliteLogo from '../public/sqlite.svg'
import jsonLogo from '../public/json.svg'
import jqueryLogo from '../public/JQuery-logo.png'
import sqlLogo from '../public/SQL.svg'
import scssLogo from '../public/scss-logo.png'
import regexLogo from '../public/regex.png'


export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Portfolio - Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.content}>
          <div className="d-flex flex-column flex-md-row w-100 justify-content-center">
            <h1 style={{marginLeft: "20px"}}>Benjamin Henning</h1>
            <div className="d-flex align-items-center pt-2" style={{height: "48px"}}><img src={TitleGif} style={{marginLeft: "20px", width: "450px", height: "36px"}} alt="Fullstack Developer"></img></div>
          </div>
          
          <p className="text-center" style={{marginLeft: "20px", marginTop: "20px"}}>
            Thanks for viewing my Portfolio! Check out my past work in the 'projects' tab where you can see live previews or view my source code on github.
          </p>
          <div className="d-flex w-100 justify-content-center">
            <Link href="/projects"><Button variant="primary">See Projects <i class="fas fa-arrow-right"></i></Button></Link>
          </div>
        </div>
        
        <div className={styles.content}>
          <div className="d-flex flex-column justify-content-center">
            <h2 className="w-100 text-center">Skills</h2>
            <hr className="w-50" />
            <div className="d-flex flex-row">
              <div className="d-flex flex-column">
                <h3>Frontend</h3>
                <div className="d-flex flex-column flex-md-row">
                  <Skill title="HTML" imgsrc={htmlLogo} />
                  <Skill title="CSS" imgsrc={cssLogo} />
                  <Skill title="JavaScript" imgsrc={javascriptLogo} />
                  <Skill title="React" imgsrc={reactLogo} />
                  <Skill title="Bootstrap" imgsrc={bootstrapLogo} />
                  <Skill title="Sass" imgsrc={scssLogo} />
                </div>
              </div>
            </div>
              
            <div className="d-flex flex-row">
              <div className="d-flex flex-column">
                <h3>Backend</h3>
                <div className="d-flex flex-column flex-md-row">
                  <Skill title="Python" imgsrc={pythonLogo} />
                  <Skill title="JAVA" imgsrc={javaLogo} />
                  <Skill title="C#" imgsrc={csharpLogo} />
                  <Skill title="ASP.NET" imgsrc={aspnetLogo} />
                  <Skill title="NextJS" imgsrc={nextjsLogo} />
                  <Skill title="JSON" imgsrc={jsonLogo} />
                  <Skill title="jQuery" imgsrc={jqueryLogo} />
                  <Skill title="SQL" imgsrc={sqlLogo} />
                  <Skill title="sqlite" imgsrc={sqliteLogo} />
                </div>
              </div>   
            </div>

            <div className="d-flex flex-row">
              <div className="d-flex flex-column">
                <h3>Machine Learning</h3>
                <div className="d-flex flex-column flex-md-row">
                  <Skill title="Numpy" imgsrc={numpyLogo} />
                  <Skill title="Pandas" imgsrc={pandasLogo} />
                  <Skill title="Matplotlib" imgsrc={matplotlibLogo} />
                  <Skill title="SKLearn" imgsrc={sklearnLogo} />
                </div>
              </div>   
            </div>
            
            <div className="d-flex flex-row">
              <div className="d-flex flex-column">
                <h3>Design</h3>
                <div className="d-flex flex-column flex-md-row">
                  <Skill title="Photoshop" imgsrc={adobePsLogo} />
                  <Skill title="After Effects" imgsrc={adobeAeLogo} />
                  <Skill title="Adobe Xd" imgsrc={adobeXdLogo} />
                </div>
              </div>   
            </div>

            <div className="d-flex flex-row">
              <div className="d-flex flex-column">
                <h3>Other</h3>
                <div className="d-flex flex-column flex-md-row">
                  <Skill title="GitHub" imgsrc={githubLogo} />
                  <Skill title="Regex" imgsrc={regexLogo} />
                </div>
              </div>   
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}