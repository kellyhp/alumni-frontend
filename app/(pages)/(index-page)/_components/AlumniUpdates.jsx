'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '@components/Card/Card.module.scss';

export default function AlumniUpdates() {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    // Fetch updates data
    fetch('https://alumni-backend-6954.onrender.com/compare')
      .then(response => response.json())
      .then(data => {
        setUpdates(data);
      })
      .catch(error => {
        console.error('Error fetching updates:', error);
      });
  }, []);

  return (
    <div className={styles.darkblue}>
        <div className={styles.row} style={{ justifyContent: 'space-between' }}>
            <h4>Alumni Updates</h4>
            <Link href="/comparison">
                <div className={styles.button}>Compare Data</div>
            </Link>
        </div>
      <p>Last Updated: January 12, 2024</p>
      <div className={styles.line}></div>
      {updates.slice(0, 5).map((update, index) => (
        <div className={styles.spacer} key={index}>
            <p>{update}</p>
            {index !== 4 && <div className={styles.line}></div>}
        </div>
    ))}
    </div>
  );
}
