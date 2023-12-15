import styles from './hero.module.css';

export const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>Праздник</p>
        <p><span>к нам приходит!</span></p>
      </div>
      <div className={styles.ringContainer}>
        <div className={styles.ring}></div>
        <div className={styles.ringTitle}>
          <p>до <span className={styles.discount}>- 40%</span></p>
          <p>дополнительно</p>
          <p> на все</p></div>
      </div>
      <div className={styles.promo}>
        <p>до 17 декабря по коду: <span>Зима</span></p>
        <p className={styles.promoAdditional}>На все украшения предоставляется дополнительная скидка до 10% предоставляется последовательно к оплате бонусами 50% по Программе лояльности на все украшения из золота c драгоценными и полудрагоценными камнями и серебра.</p>
      </div>
    </div>
  )
}