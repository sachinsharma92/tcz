"use client";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import styles from "./style.module.scss";

const BadgeInfoCard = (props) => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <Link
      href={props.href}
      className={`${styles.browserAcceleratorCard} ${
        theme ? styles.browserAcceleratorCardDark : ""
      }`}
    >
      <div className={styles.cardHeader}>
        <div className={styles.cardSubTitle}>
          <div>{props.icons}</div>
          <h4 className={styles.heading}>{props.subHeading}</h4>
        </div>
        <Icons.ArrowUpRight className={styles.arrowUp} width={15} height={15} />
      </div>
      <h3 className={styles.cardTitle}>{props.heading}</h3>
      <p className={styles.cardContent}>{props.description}</p>
      <div className={styles.cardsTags}>
        {props.options.map((option) => (
          <div className={styles.badgeStyle} key={option.value}>
            {option}
          </div>
        ))}
      </div>
    </Link>
  );
};

export default BadgeInfoCard;
