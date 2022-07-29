import React from "react";
import styles from "./MainEx.module.scss";

const MainEx = () => {
  return (
    <div className={styles.mainEx}>
      <image
        alt=""
        className={styles.frame1}
        src="https://static.overlay-tech.com/assets/aa8c7509-c779-4243-a0e3-10f81efa77e1.svg"
      />
      <div className={styles.flexWrapperOne}>
        <image
          alt=""
          className={styles.btnRent}
          src="https://static.overlay-tech.com/assets/4b7d4585-51eb-416b-ac9b-0586e9ba7c64.svg"
        />
        <image
          alt=""
          className={styles.btnRent}
          src="https://static.overlay-tech.com/assets/2edee3d4-65c1-4d8c-9ce9-fc654e3ab95e.svg"
        />
      </div>
      <div className={styles.flexWrapperOne}>
        <image
          alt=""
          className={styles.btnRent}
          src="https://static.overlay-tech.com/assets/3d73a65c-1a97-49bc-adb5-2431d9959b9a.svg"
        />
        <image
          alt=""
          className={styles.btnRent}
          src="https://static.overlay-tech.com/assets/ef7cd0ab-a5e5-4988-b351-015b0d1b4303.svg"
        />
      </div>
    </div>
  );
};

export default MainEx;