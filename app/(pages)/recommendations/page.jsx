import Header from "./_components/Header";
import styles from "@components/Layout/Layout.module.scss"

export default function Home() {
  return (
    <main className={styles.mains}>
      <Header />
      <h4> Suggested Companies with Davis Alumnis </h4>
    </main>
  );
}