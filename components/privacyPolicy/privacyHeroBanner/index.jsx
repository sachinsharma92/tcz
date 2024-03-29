"use client";

import { cn } from "@/lib/utils";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import styles from "./style.module.scss";

const PrivacyHeroBanner = () => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <section
      className={`${styles.privacyHeroBannerStyle} ${
        theme ? styles.privacyHeroBannerDark : ""
      }`}
    >
      <div className={cn("primary-container")}>
        <h1 className={styles.title}>
          Techchefz’s
          <span className={styles.titleHighlight}>Privacy Policy.</span>
        </h1>
        <p className={styles.leadText}>
          This privacy policy has been compiled to better serve those who are
          concerned with how their ‘Personally identifiable information’ (PII)
          is being used online. PII is information that can be used on its own
          or with other information to identify, contact, or locate a single
          person, or to identify an individual in context. Please read our
          privacy policy carefully to get a clear understanding of how we
          collect, use, protect or otherwise handle your Personally Identifiable
          Information in accordance with our website.
        </p>
      </div>
    </section>
  );
};

export default PrivacyHeroBanner;
