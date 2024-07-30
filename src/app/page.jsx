"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [telegramApp, setTelegramApp] = useState(null);

  useEffect(() => {
    setTelegramApp(window.Telegram.WebApp);
  }, []);
  useEffect(() => {
    if (telegramApp) {
      telegramApp.ready();
    }
  }, [telegramApp]);

  const closeApp = () => {
    telegramApp.close();
  };

  return (
    <main className={styles.main}>
      <button onClick={closeApp}>Close App</button>
      <div className={styles.description}>
        <pre>{JSON.stringify(telegramApp)}</pre>
      </div>
    </main>
  );
}
