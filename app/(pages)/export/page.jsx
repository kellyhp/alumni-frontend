import Header from "./_components/Header";
import ExportCard from "./_components/ExportCard";
import PullCard from "./_components/PullCard";
import styles from "@components/Layout/Layout.module.scss"

export default function Home() {
  return (
    <main className={styles.mains}>
      <Header />
      <ExportCard />
      <div style={{ marginTop: '2%' }}>
        <PullCard />
      </div>
    </main>
  );
}