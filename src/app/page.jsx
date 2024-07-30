"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [telegramApp, setTelegramApp] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (window.Telegram) {
      setTelegramApp(window.Telegram.WebApp);
    }
  }, []);
  useEffect(() => {
    if (telegramApp) {
      telegramApp.ready();
      setUserData(telegramApp.initData);
    }
  }, [telegramApp]);

  const closeApp = () => {
    telegramApp.close();
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <pre>{JSON.stringify(userData, undefined, 2)}</pre>
        <pre>{JSON.stringify(telegramApp, undefined, 2)}</pre>
      </div>
      <button onClick={closeApp}>Close App</button>
    </main>
  );
}
