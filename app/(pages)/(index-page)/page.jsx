'use client'

import Header from "./_components/Header";
import CurrentCount from "./_components/CurrentCount";
import YearAlumni from "./_components/YearAlumni";
import AlumniJobs from "./_components/AlumniJobs";
import TopCompanies from "./_components/TopCompanies";
import AlumniLocations from "./_components/AlumniLocations";
import AlumniUpdates from "./_components/AlumniUpdates";
import styles from "@components/Layout/Layout.module.scss"
import { useEffect, useContext } from "react";
import { AuthenticationContext } from "../Authentication";

export default function Home() {
  const { isAuth } = useContext(AuthenticationContext);
  console.log(isAuth);
  const authChecker = async () => {
    try {
      const response = await fetch("/api/authentication");
      const data = await response.text();
      if (data.status === 200) {
        setAuth(true);
      } else {
        setAuth(false);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (!isAuth) {
      authChecker();
    }
  }, [isAuth]);

  return (
    <main className={styles.mains}>
      <Header />
        <div className={styles.ColRow}>
          <div className={styles.RowCol}>
            <div className={styles.ColRow} style={{ justifyContent: 'space-between', width: '100%', marginBottom: '5px' }}>
              <CurrentCount />
              <YearAlumni />
            </div>
            <AlumniJobs />
          </div>
          <AlumniUpdates />
        </div>
        <div className={`${styles.ColRow} ${styles.marginTop}`}>
        <TopCompanies />
        <AlumniLocations />
      </div>
    </main>
  );
}
