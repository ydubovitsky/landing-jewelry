import styles from './jewelry-list.module.css';

const items = [
  {
    id: 0,
    name: 'Брилианты якутии',
    price: '84.900',
    oldPrice: '160.000',
    discont: '50%',
    rating: '4.8',
    commentsCount: 150,
    bonuses: 150,
    imgUrl: '/public/assets/jewelry/1.jpg'
  },
  {
    id: 1,
    name: 'Брилианты якутии',
    price: '84.900',
    oldPrice: '160.000',
    discont: '50%',
    rating: '4.8',
    commentsCount: 150,
    bonuses: 150,
    imgUrl: '/public/assets/jewelry/2.jpg'
  },
  {
    id: 2,
    name: 'Брилианты якутии',
    price: '84.900',
    oldPrice: '160.000',
    discont: '50%',
    rating: '4.8',
    commentsCount: 150,
    bonuses: 150,
    imgUrl: '/public/assets/jewelry/3.jpg'
  },
  {
    id: 3,
    name: 'Брилианты якутии',
    price: '84.900',
    oldPrice: '160.000',
    discount: '50%',
    rating: '4.8',
    commentsCount: 150,
    bonuses: 150,
    imgUrl: '/public/assets/jewelry/4.jpg'
  },
  {
    id: 0,
    name: 'Брилианты якутии',
    price: '84.900',
    oldPrice: '160.000',
    discont: '50%',
    rating: '4.8',
    commentsCount: 150,
    bonuses: 150,
    imgUrl: '/public/assets/jewelry/1.jpg'
  },
  {
    id: 1,
    name: 'Брилианты якутии',
    price: '84.900',
    oldPrice: '160.000',
    discont: '50%',
    rating: '4.8',
    commentsCount: 150,
    bonuses: 150,
    imgUrl: '/public/assets/jewelry/2.jpg'
  },
  {
    id: 2,
    name: 'Брилианты якутии',
    price: '84.900',
    oldPrice: '160.000',
    discont: '50%',
    rating: '4.8',
    commentsCount: 150,
    bonuses: 150,
    imgUrl: '/public/assets/jewelry/3.jpg'
  },
  {
    id: 3,
    name: 'Брилианты якутии',
    price: '84.900',
    oldPrice: '160.000',
    discount: '50%',
    rating: '4.8',
    commentsCount: 150,
    bonuses: 150,
    imgUrl: '/public/assets/jewelry/4.jpg'
  },
  {
    id: 0,
    name: 'Брилианты якутии',
    price: '84.900',
    oldPrice: '160.000',
    discont: '50%',
    rating: '4.8',
    commentsCount: 150,
    bonuses: 150,
    imgUrl: '/public/assets/jewelry/1.jpg'
  },
  {
    id: 1,
    name: 'Брилианты якутии',
    price: '84.900',
    oldPrice: '160.000',
    discont: '50%',
    rating: '4.8',
    commentsCount: 150,
    bonuses: 150,
    imgUrl: '/public/assets/jewelry/2.jpg'
  },
  {
    id: 2,
    name: 'Брилианты якутии',
    price: '84.900',
    oldPrice: '160.000',
    discont: '50%',
    rating: '4.8',
    commentsCount: 150,
    bonuses: 150,
    imgUrl: '/public/assets/jewelry/3.jpg'
  },
  {
    id: 3,
    name: 'Брилианты якутии',
    price: '84.900',
    oldPrice: '160.000',
    discount: '50%',
    rating: '4.8',
    commentsCount: 150,
    bonuses: 150,
    imgUrl: '/public/assets/jewelry/4.jpg'
  },
]

export const JewelryList = () => {
  return (
    <div className={styles.container}>
      {items.map(item => (
        <div className={styles.item}>
          <img src={item.imgUrl} alt="" srcset="" />
          <div className={styles.priceContainer}>
            <p className={styles.price}>{item.price}</p>
            <p className={styles.oldPrice}>{item.oldPrice}</p>
            <p className={styles.discount}>{item.discount}</p>
          </div>
          <h1>{item.name}</h1>
          <div className={styles.ratingContainer}>
            <p>☆ {item.rating}</p>
            <p>Коментарии: {item.commentsCount}</p>
            <p>+ {item.bonuses} бонусов</p>
          </div>
        </div>
      ))}
    </div>
  )
}