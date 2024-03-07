import Hero from "./_components/Hero/Hero";
import styles from "@components/Layout/Layout.module.scss"

export default function Home() {
  return (
    <main className={styles.mains}>
      <Hero />
    </main>
  );
}
