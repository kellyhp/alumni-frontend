import styles from '@components/Card/Card.module.scss';

export default function PullCard() {
    return (
      <div className={styles.lightblue}>
        <p>Pull Data Here:</p>
        <div className={styles.button}> Pull Data </div>
        <p> Last Pull Done By: </p>
        <p> Last Pull Date: </p>
      </div>
    );
}