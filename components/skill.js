import styles from '../styles/Skill.module.css'

const Skill = props => {

  return (
    <div className={styles.content}>
      <div className={styles.titlebox}>{props.title}</div>
      <img className={styles.skillimg} src={props.imgsrc}/>
    </div>
  )
}

export default Skill