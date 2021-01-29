import styles from '../styles/navmenu.module.css'

const Layout = () => {
  
  function openNav() {
    document.getElementById("menu").style.visibility = "visible";
    document.getElementById("overlay").style.display = "block";
  }

  function closeNav() {
    document.getElementById("menu").style.visibility = "hidden";
    document.getElementById("overlay").style.display = "none";
  }

  return (
    <>
      <div className={styles.overlay} id="overlay" onClick={closeNav}></div>
      
      <div className={styles.navMenu} id="menu">
        <div className={styles.backIcon} onClick={closeNav}><i className="fas fa-arrow-left"></i></div>
        <nav>
          <ul>
            <li><a href="#home" onClick={closeNav}><i className="fas fa-home"></i> Home</a></li>
            <li><a href="#about" onClick={closeNav}><i className="far fa-question-circle"></i> About Me</a></li>
            <li><a href="#projects" onClick={closeNav}><i className="far fa-file-code"></i> Projects</a></li>
            <li><a href="#contact" onClick={closeNav}><i className="fas fa-user"></i> Contact Me</a></li>
            <li><a href="https://www.linkedin.com/in/benjaminmhenning/" target="_blank"><i className="fab fa-linkedin"></i> Connect with Me!</a></li>
            <li><a href="https://github.com/bhenning2556" target="_blank"><i className="fab fa-github"></i> My github</a></li>
          </ul>
        </nav>
      </div>
      <div className={styles.navFab} onClick={openNav}><i className="fas fa-bars"></i></div>
    </>
  )
}

export default Layout