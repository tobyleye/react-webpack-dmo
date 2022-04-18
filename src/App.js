import React from "react";
import styles from "./app.css";
import { AppRoute } from "./AppRoute";

export function App() {
  return (
    <div className={styles.container}>
      <AppRoute />
    </div>
  );
}
