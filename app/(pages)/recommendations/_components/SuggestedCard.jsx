'use client';
import { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import styles from '@components/Card/Card.module.scss';
import layout from '@components/Layout/Layout.module.scss';

export default function SuggestedCard() {
  
  return (
    <div className={styles.ColRow}>
        <div className={styles.black}>
            <h4>Chime</h4>
            <span className={styles.line}></span>
            {/* <canvas id="locationChart" width="400" height="150"></canvas> */}
        </div>
        <div className={styles.lightblue}>
            <p> Chime is a financial technology company that offers mobile banking services. </p>
        </div>
    </div>
  );
}
