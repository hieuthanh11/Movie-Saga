import React from "react";
import { BrowserRouter } from "react-router-dom";
import styles from "./app.module.scss";
import AppRoute from "./config/routes/appRoute";
const App: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </div>
  );
};

export default App;
