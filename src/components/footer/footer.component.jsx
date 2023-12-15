import styles from './footer.module.css';

const FooterComponent = () => {

  return (
    <footer className={styles.footer} data-testid="footer-component">
      <div className={styles.footer__topSide}>
        <div className={styles.topSideMenu}>
          <h3 className={styles.topSideMenu__title}>Давайте приступим</h3>
          <ul className={styles.topSideMenu__listContainer}>
            <li className={styles.topSideMenu__item}>Начать</li>
            <li className={styles.topSideMenu__item}>Особенности</li>
            <li className={styles.topSideMenu__item}>Галерея</li>
          </ul>
        </div>
        <div className={styles.topSideMenu}>
          <h3 className={styles.topSideMenu}>О магазине</h3>
          <ul className={styles.topSideMenu__listContainer}>
            <li className={styles.topSideMenu__item}>FAQ</li>
            <li className={styles.topSideMenu__item}>Пользовательское соглашение</li>
            <li className={styles.topSideMenu__item}>Политика конфиденциальности</li>
          </ul>
        </div>
      </div>
      <div className={styles.footer__bottomSide}>
        <div className={styles.bottomSideMenu}>
          <h3 className={styles.bottomSideMenu__title}>О магазине</h3>
          <ul className={styles.bottomSideMenu__listContainer}>
            <li className={styles.bottomSideMenu__item}>Домой</li>
            <li className={styles.bottomSideMenu__item}>Особенности</li>
            <li className={styles.bottomSideMenu__item}>Галерея</li>
            <li className={styles.bottomSideMenu__item}>Каталог</li>
          </ul>
        </div>
        <div className={styles.copyRightContainer}>
          <p>© 2021–{new Date().getFullYear()}, Магазин ювелирных изделий, официальный сайт</p>
        </div>
      </div>
    </footer >
  )
}
export default FooterComponent;
