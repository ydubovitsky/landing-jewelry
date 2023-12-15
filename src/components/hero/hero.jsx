import styles from './hero.module.css';

export const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}><h1>Праздник к нам приходит</h1></div>
      <div className={styles.title}><h1>до <span>- 40%</span> дополнительно на все</h1></div>
      <div className={styles.title}><h1>до 17 декабря по коду: <span>Зима</span></h1></div>
    </div>
  )
}