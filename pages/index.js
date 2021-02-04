import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/onepage.module.css'
import stars from '../styles/stars.module.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import emailjs from 'emailjs-com'
import Layout from '../components/layout'

// ---------- IMAGE IMPORTS ----------
import profilepic from '../public/profile_pic_2021.png'

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
import jsonLogo from '../public/json.svg'
import sqlLogo from '../public/SQL.svg'

import matplotlibLogo from '../public/matplotlib.png'
import numpyLogo from '../public/numpy.png'
import pandasLogo from '../public/pandas.png'
import sklearnLogo from '../public/sklearn.png'
import statsmodelsLogo from '../public/statsmodels-logo.svg'
import sqliteLogo from '../public/sqlite.svg'

import adobeXdLogo from '../public/adobe-xd.svg'
import adobeAeLogo from '../public/after-effects-2019.svg'
import adobePsLogo from '../public/photoshop-cc.svg'

import githubLogo from '../public/github.svg'
import regexLogo from '../public/regex.png'
import contentfulLogo from '../public/contentful-logo.png'

import crimeHeader from '../public/images/azCrimeDataPreview.png'
import monkeyLeagueHeader from '../public/images/monkeyleaguePreview.png'
import portfolioHeader from '../public/images/portfolioPreview.png'
import binaryHeader from '../public/images/BinaryNumbersPreview.png'
import issueTrackerHeader from '../public/images/issueTrackerPreview.png'
// ---------- END IMAGE IMPORTS ----------

export default function HomePage() {

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
    <>
      <Head>
        <title>Portfolio | Benjamin Henning</title>
      </Head>
      <section className={styles.homeContainer} id="home">
        <div className={stars.stars} />
        <div className={stars.twinkling} />
        <div className={styles.content}>
          <img src={profilepic} alt="profile_img" className={styles.profilepic} />
          <h1>Benjamin Henning</h1>
          <h3>Software Developer</h3>
          <p className={styles.locationtag}><i className="fas fa-map-marker-alt"></i> Phoenix, Arizona</p>
        </div>
        <div className={styles.downIndicator}><a href="#about" style={{color:"#707070"}}><i className="fas fa-chevron-down"></i></a></div>
      </section>
    
      <section className={styles.aboutContainer} id="about">
        <h1>About Me</h1>
        <div className={styles.hero}>
          <div className={styles.heroItem}>
            <i className="fas fa-graduation-cap"></i>
            <h3>Education</h3>
            <p>I graduated from the University of Arizona in December 2020 with a <span>B.S. in Information Science and Technology</span> and a <span>Minor in Computer Science</span>.</p>
          </div>
          <div className={styles.heroItem}>
            <i className="fas fa-question-circle"></i>
            <h3>What I do</h3>
            <p>I am a junior software developer who builds software solutions to solve industry problems. I have classroom and applied experience designing, building and deploying full stack web applications, and I use my diverse set of skills and technologies to take projects from just simple ideas all the way to  fully functional, production-ready solutions.</p>
          </div>
          <div className={styles.heroItem}>
            <i className="fas fa-flag-checkered"></i>
            <h3>Goals</h3>
            <p>In addition to getting hired as a software developer, my goal for the immediate future is to expand my portfolio by building several full stack applications that show off my programming experience. My current project is an Issue tracker built with C#, ASP.NET and SQL. You can see my progress so far by scrolling down to the <a href="#projects">projects</a> section.</p>
          </div>
        </div>

        <h1>Skills</h1>
        <div className={styles.skillsContainer}>
          <div className={styles.skillCol}>
            <h3>Front-end</h3>
            <ul className={styles.skillList} id={styles.frontend}>
              <li><img src={htmlLogo} alt="htmlLogo" /> HTML</li>
              <li><img src={cssLogo} alt="cssLogo" /> CSS</li>
              <li><img src={javascriptLogo} alt="javascriptLogo" /> JavaScript</li>
              <li><img src={reactLogo} alt="reactLogo" /> React</li>
              <li><img src={nextjsLogo} alt="nextjsLogo" /> Next.js</li>
              <li><img src={bootstrapLogo} alt="bootstrapLogo" /> Bootstrap</li>
            </ul>
          </div>

          <div className={styles.skillCol}>
            <h3>Backend</h3>
            <ul className={styles.skillList} id={styles.backend}>
              <li className={styles.multilevel}><img src={pythonLogo} alt="pythonLogo" /> Python
                <ul className={styles.skillList}>
                  <li><img src={numpyLogo} alt="numpyLogo" /> Numpy</li>
                  <li><img src={pandasLogo} alt="pandasLogo" /> Pandas</li>
                  <li><img src={matplotlibLogo} alt="matplotlibLogo" /> Matplotlib</li>
                  <li><img src={sklearnLogo} alt="sklearnLogo" /> SKLearn</li>
                  <li><img src={statsmodelsLogo} alt="statsmodelsLogo" /> StatsModels</li>
                  <li><img src={sqliteLogo} alt="sqliteLogo" /> sqlite3 </li>
                </ul>
              </li>
              <li><img src={javaLogo} alt="javaLogo" /> Java</li>
              <li className={styles.multilevel}><img src={csharpLogo} alt="csharpLogo" /> C#
                <ul className={styles.skillList}>
                  <li><img src={aspnetLogo} alt="aspnetLogo" /> ASP.NET</li>
                </ul>
              </li>
              <li><img src={jsonLogo} alt="jsonLogo" /> JSON</li>
              <li><img src={sqlLogo} alt="sqlLogo" /> SQL</li>
            </ul>
          </div>

          <div className={styles.skillCol}>
            <h3>Design</h3>
            <ul className={styles.skillList} id={styles.design}>
              <li><img src={adobeXdLogo} alt="adobeXdLogo" /> Adobe Xd</li>
              <li><img src={adobeAeLogo} alt="adobeAeLogo" /> Adobe After Effects</li>
              <li><img src={adobePsLogo} alt="adobePsLogo" /> Adobe Photoshop</li>
            </ul>
            <h3>Other</h3>
            <ul className={styles.skillList} id={styles.other}>
              <li><img src={githubLogo} alt="githubLogo" /> Git version control</li>
              <li><img src={regexLogo} alt="regexLogo" /> Regular Expressions</li>
            </ul>
          </div>

        </div>
      </section>
      <section className={styles.projectsContainer} id="projects">
        <div className={styles.content}>
          <h1>Projects</h1>
          <div className={styles.cards}>

            <div className={styles.card}>
              <img className={styles.cardImg} src={issueTrackerHeader} alt="Issue Tracker Preview" />
              <div className={styles.cardBody}>
                <h3>Issue Tracker</h3>
                <div className={styles.cardSkills}>
                  Tech Stack: 
                  <img src={csharpLogo} />
                  <img src={aspnetLogo} />
                  <img src={sqlLogo} />
                  <img src={htmlLogo} />
                  <img src={cssLogo} />
                  <img src={javascriptLogo} />
                </div>
                <div>
                  <h4>Overview</h4>
                  <p>This project is a full-stack web solution for Project Managers and Development Teams to track bugs and issues in their systems. The application will have CRUD functionality, meaning users and admins will be able to easily manage and store bug data in a relational database. The application be built using the MVC design pattern, so the code and file structure will be familiar to any third parties who view or work on the application after the development period.</p>

                  <h4>Features</h4>
                  <ul>
                    <li>Secure login/registration.</li>
                    <li>Create a new organization or join an existing one.</li>
                    <li>Assign roles with set permission levels for users in your organization.</li>
                    <li>Create projects and add users from your organization to them.</li>
                    <li>Add new issues to the project, and view, update, or delete existing ones.</li>
                  </ul>

                  <h4>Tech Stack</h4>
                  <ul>
                    <li>Built with C# and ASP.NET MVC.</li>
                    <li>Database built using Microsoft SQL Server.</li>
                  </ul>

                  <h4>Credits</h4>
                  <p>Designed and Developed by Benjamin Henning.</p>
                </div>
                <div className={styles.btnContainer}>
                  <a href="https://github.com/bhenning2556/IssueTracker" target="_blank"><button id={styles.btn} className="btn btn-info"><i className="fas fa-code"></i><span> SOURCE CODE</span></button></a>
                  <button type="button" disabled id={styles.btn} className="btn btn-info"><i className="fas fa-desktop"></i><span> Live Preview</span></button>
                </div>
              </div>
            </div>

            <div className={styles.card} id={styles.cardReverse}>
              <img className={styles.cardImg} src={monkeyLeagueHeader} alt="monkeyleague preview" />
              <div className={styles.cardBody}>
                <h3>Monkey League Website</h3>
                <div className={styles.cardSkills}>
                  Tech Stack: 
                  <img src={adobeXdLogo} />
                  <img src={htmlLogo} />
                  <img src={cssLogo} />
                  <img src={javascriptLogo} />
                  <img src={bootstrapLogo} />
                  <img src={nextjsLogo} />
                  <img src={contentfulLogo} />
                </div>
                <div>
                  <h4>Overview</h4>
                  <p>This Web application was created to provide a hub for users to find out information about the Monkey League, which is an online speedcubing competition hosted by Phillip Lewicki. The goal of this project was to create a clean, modern and mobile-first front end design, with the ability to manage content through a dashboard on the backend.</p>
                  <h4>Tech Stack</h4>
                  <ul>
                    <li>Built with <a href="https://nextjs.org/" target="_blank">NextJS</a>.</li>
                    <li>Content Managed through <a href="https://www.contentful.com/" target="_blank">Contentful headless CMS</a>.</li>
                    <li>Hosted on <a href="https://vercel.com/" target="_blank">Vercel</a>.</li>
                  </ul>
                  <h4>Features</h4>
                  <ul>
                    <li>Custom modern design built using Google material UI guidelines.</li>
                    <li>Responsive design for any screen size built using bootstrap and react-bootstrap.</li>
                    <li>Easy content management through the Contentful dashboard, which dynamically publishes to production; No rebuild required.</li>
                    <li>Static Site generation using NextJS getStaticProps() for fast web performance and better SEO.</li>
                  </ul>
                  <h4>Credits</h4>
                  <p>Developed by <a href="https://github.com/bhenning2556" target="_blank">Benjamin Henning</a>.<br />
                    Designed by Benjamin Henning in collaboration with Phillip Lewicki.</p>
                </div>
                <div className={styles.btnContainer}>
                  <button type="button" disabled id={styles.btn} className="btn btn-info"><i className="fas fa-code"></i><span> SOURCE CODE</span></button>
                  <a href="https://monkeyleague.org/" target="_blank"><button id={styles.btn} className="btn btn-info"><i className="fas fa-desktop"></i><span> LIVE PREVIEW</span></button></a>
                </div>
                <p className={styles.notice}>Source Code private, can be provided on request.</p>
              </div>
            </div>
          

          <div className={styles.card}>
              <img className={styles.cardImg} src={portfolioHeader} alt="portfolio preview" />
              <div className={styles.cardBody}>
                <h3>This Portfolio!</h3>
                <div className={styles.cardSkills}>
                  Tech Stack: 
                  <img src={nextjsLogo} />
                  <img src={bootstrapLogo} />
                  <img src={htmlLogo} />
                  <img src={cssLogo} />
                  <img src={javascriptLogo} />
                </div>
                <div>
                  <h4>Overview</h4>
                  <p>This project is a responsive website designed to showcase my personal skills and experience in Software Development, Web Development and Design.</p>

                  <h4>Features</h4>
                  <ul>
                    <li>Responsive design that fits any screen.</li>
                    <li>An integrated contact form using <a href="https://www.emailjs.com/" target="_blank">emailJS</a>.</li>
                  </ul>

                  <h4>Tech Stack</h4>
                  <ul>
                    <li>Built using <a href="https://nextjs.org/" target="_blank">NextJS</a>.</li>
                    <li>Styled with <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a> and <a href="https://react-bootstrap.github.io/" target="_blank">react-bootstrap</a>.</li>
                    <li>Deployed on <a href="https://vercel.com/" target="_blank">Vercel</a>.</li>
                  </ul>

                  <h4>Credits</h4>
                  <p>Designed and Developed by Benjamin Henning.</p>
                </div>
                <div className={styles.btnContainer}>
                  <a href="https://github.com/bhenning2556/bh-portfolio" target="_blank"><button id={styles.btn} className="btn btn-info"><i className="fas fa-code"></i><span> SOURCE CODE</span></button></a>
                </div>
              </div>
            </div>

          <div className={styles.card} id={styles.cardReverse}>
              <img className={styles.cardImg} src={crimeHeader} alt="az crime data preview" />
              <div className={styles.cardBody}>
                <h3>Using Machine Learning to Predict Arizona Crime Rates</h3>
                <div className={styles.cardSkills}>
                  Tech Stack: 
                  <img src={pythonLogo} />
                  <img src={matplotlibLogo} />
                  <img src={numpyLogo} />
                  <img src={pandasLogo} />
                  <img src={sklearnLogo} />
                  <img src={statsmodelsLogo} />
                </div>
                <div>
                  <h4>Overview</h4>
                  <p>This project uses data about crime rates and a machine learning model to predict crime rates in the future. Data is collected manually from the <a href="https://crime-data-explorer.fr.cloud.gov/explorer/state/arizona/crime" target="_blank">FBI crime database</a>. All graphs and visualizations are created and outputted by script.py.</p>

                  <h4>Presentation</h4>
                  <p>This project was created as my final project for ISTA 331 - Machine Learning at UofA during the Fall 2020 semester. The project was presented live in class, the recording of which is available <a href="https://youtu.be/cx8I4MnkYc4" target="_blank">here</a>. The slides and notes are also available for download in the source code repository, as well as the source code and datasets.</p>

                  <h4>Credits</h4>
                  <p>Developed and Presented by Benjamin Henning.</p>
                </div>
                <div className={styles.btnContainer}>
                  <a href="https://github.com/bhenning2556/AZCrimeData" target="_blank"><button id={styles.btn} className="btn btn-info"><i className="fas fa-code"></i><span> SOURCE CODE</span></button></a>
                  <a href="https://youtu.be/cx8I4MnkYc4" target="_blank"><button id={styles.btn} className="btn btn-info"><i className="fab fa-youtube"></i><span> PRESENTATION</span></button></a>
                </div>
              </div>
            </div>

          <div className={styles.card} id={styles.cardReverse}>
              <img className={styles.cardImg} src={binaryHeader} alt="binary preview" />
              <div className={styles.cardBody}>
                <h3>Binary Numbers Data Structure</h3>
                <div className={styles.cardSkills}>
                  Tech Stack: 
                  <img src={pythonLogo} />
                  <img src={numpyLogo} />
                  <img src={regexLogo} />
                </div>
                <div>
                  <h4>Overview</h4>
                  <p>In this project, I created a new data structure called Binary. This data strcuture is an object which can be initilized with a string of a binary number, or left blank for a Binary number intialized to 0. The object stores the binary number in a 16-bit array. The class uses function overloading to implement the python operators =, +, -, &lt;, abs(), int(), and str().</p>

                  <h4>Features</h4>
                  <p>This project showcases some of my software development skills and practices around object oriented programming, documentation, and algorithms.</p>
                </div>
                <div className={styles.btnContainer}>
                  <a href="https://github.com/bhenning2556/Binary-Number-Data-Structure" target="_blank"><button id={styles.btn} className="btn btn-info"><i className="fas fa-code"></i><span> SOURCE CODE</span></button></a>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </section>
      <section className={styles.contactContainer} id="contact">
        <div className={styles.content}>
          <h1>Contact Me</h1>
          <hr />

          <Form onSubmit={sendEmail} className={styles.contactForm}>

            <Form.Group controlId="nameForm">
              <Form.Control type="text" placeholder="First and Last Name" required name="name" />
            </Form.Group>

            <Form.Group controlId="emailForm">
              <Form.Control type="email" placeholder="Email Address" required name="email" />
            </Form.Group>

            <Form.Group controlId="organizationForm">
              <Form.Control type="text" placeholder="Organization" required name="organization" />
            </Form.Group>

            <Form.Group controlId="subjectForm">
              <Form.Control type="text" placeholder="Subject" required name="subject" />
            </Form.Group>

            <Form.Group controlId="messageForm">
              <Form.Control as="textarea" rows={3} required name="message" placeholder="Message" />
            </Form.Group>

            <div className="w-100 d-flex justify-content-center">
              <Button variant="primary" type="submit">
                SUBMIT
              </Button>
            </div>
            <p id="alert" className="w-100 text-center text-danger mb-0"></p>    
          </Form>
        </div>   
      </section>

      <Layout />
    </>
  )
}