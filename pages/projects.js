import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import styles from '../styles/Home.module.css'
import crimeHeader from '../public/images/projects/azCrimeData/preview.png'
import monkeyLeagueHeader from '../public/images/projects/monkeyLeague/landing-page-lg.png'
import portfolioHeader from '../public/images/projects/portfolio/preview.png'
import binaryHeader from '../public/images/projects/BinaryNumbers/header.png'

import pythonLogo from '../public/python-5.svg'
import matplotlibLogo from '../public/matplotlib.png'
import numpyLogo from '../public/numpy.png'
import pandasLogo from '../public/pandas.png'
import sklearnLogo from '../public/sklearn.png'
import statsmodelsLogo from '../public/statsmodels-logo.svg'

import adobeXdLogo from '../public/adobe-xd.svg'
import htmlLogo from '../public/html-5.png'
import cssLogo from '../public/css.png'
import javascriptLogo from '../public/javascript.svg'
import bootstrapLogo from '../public/bootstrap-4.svg'
import nextjsLogo from '../public/next-js.svg'
import contentfulLogo from '../public/contentful-logo.png'

import regexLogo from '../public/regex.png'

const Projects = () => {

  return (
    <>
      <Head>
        <title>Portfolio - Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <div className={styles.content + " d-flex flex-column align-items-center"}>
          <Row>
            <h1>Projects</h1>
          </Row>
          <Row className="d-flex flex-row justify-content-center">
            <Link href="/projects/azCrimeData" passHref>
              <Card>
                <Card.Img variant="top" src={crimeHeader} className={styles.cardImg} />
                <Card.Body className="d-flex flex-column justify-content-end">
                  <Card.Title className="text-center">Using Machine Learning to <br />Predict Arizona Crime Rates</Card.Title>
                  <Row className="mb-2 justify-content-around ml-5 mr-5">
                    <Image src={pythonLogo} height={20} width={20} />
                    <Image src={matplotlibLogo} height={20} width={20} />
                    <Image src={numpyLogo} height={20} width={20} />
                    <Image src={pandasLogo} height={20} width={20} />
                    <Image src={sklearnLogo} height={20} width={20} />
                    <Image src={statsmodelsLogo} height={20} width={20} />
                  </Row>
                  <Card.Text className="ml-auto mr-auto">
                    <Link href="/projects/azCrimeData" passHref><a><Button variant="primary">See Project</Button></a></Link>
                  </Card.Text>                
                </Card.Body>
              </Card>
            </Link>
            <Link href="/projects/monkeyLeague" passHref>
              <Card>
                <Card.Img variant="top" src={monkeyLeagueHeader} className={styles.cardImg} />
                <Card.Body className="d-flex flex-column justify-content-end">
                  <Card.Title className="text-center">Monkey League Website</Card.Title>
                  <Row className="mb-2 justify-content-around ml-5 mr-5">
                    <Image src={adobeXdLogo} height={20} width={20} />
                    <Image src={htmlLogo} height={20} width={20} />
                    <Image src={cssLogo} height={20} width={20} />
                    <Image src={javascriptLogo} height={20} width={20} />
                    <Image src={bootstrapLogo} height={20} width={20} />
                    <Image src={nextjsLogo} height={20} width={20} />
                    <Image src={contentfulLogo} height={20} width={20} />
                  </Row>
                  <Card.Text className="ml-auto mr-auto">
                    <Link href="/projects/monkeyLeague" passHref><a><Button variant="primary">See Project</Button></a></Link>
                  </Card.Text>                
                </Card.Body>
              </Card>
            </Link>
            <Link href="/projects/portfolio" passHref>
              <Card>
                <Card.Img variant="top" src={portfolioHeader} className={styles.cardImg} />
                <Card.Body className="d-flex flex-column justify-content-end">
                  <Card.Title className="text-center">This Portfolio!</Card.Title>
                  <Row className="mb-2 justify-content-around ml-5 mr-5">
                    <Image src={htmlLogo} height={20} width={20} />
                    <Image src={cssLogo} height={20} width={20} />
                    <Image src={javascriptLogo} height={20} width={20} />
                    <Image src={bootstrapLogo} height={20} width={20} />
                    <Image src={nextjsLogo} height={20} width={20} />
                  </Row>
                  <Card.Text className="ml-auto mr-auto">
                    <Link href="/projects/portfolio" passHref><a><Button variant="primary">See Project</Button></a></Link>
                  </Card.Text>                
                </Card.Body>
              </Card>
            </Link>
            <Link href="/projects/BinaryNumbers" passHref>
              <Card>
                <Card.Img variant="top" src={binaryHeader} className={styles.cardImg} />
                <Card.Body className="d-flex flex-column justify-content-end">
                  <Card.Title className="text-center">Binary Numbers Data Structure</Card.Title>
                  <Row className="mb-2 justify-content-around ml-5 mr-5">
                    <Image src={pythonLogo} height={20} width={20} />
                    <Image src={numpyLogo} height={20} width={20} />
                    <Image src={regexLogo} height={20} width={20} />
                  </Row>
                  <Card.Text className="ml-auto mr-auto">
                    <Link href="/projects/BinaryNumbers" passHref><a><Button variant="primary">See Project</Button></a></Link>
                  </Card.Text>                
                </Card.Body>
              </Card>
            </Link>
          </Row>
        </div> 
      </div> 
      <style jsx>{`
        h4 {
          text-align: center;
        }
      `}</style>
    </>
  )
}

export default Projects