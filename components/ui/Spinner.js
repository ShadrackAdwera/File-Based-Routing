import styles from './Spinner.module.css';
const Spinner = () => {
    return <div className={styles.spinner}>
    <div className={styles.doublebounce1}></div>
    <div className={styles.doublebounce2}></div>
  </div>
}

export default Spinner;