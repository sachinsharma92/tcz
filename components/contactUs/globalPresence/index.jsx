"use client";

import React from "react";
import { ImageCustom } from "@/components/ui/imageCustom";
import { cn } from "@/lib/utils";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { Popover } from "@headlessui/react";
import { useMediaQuery } from "react-responsive";
import styles from "./style.module.scss";

const GlobalPresence = () => {
  const { theme, setTheme } = useContext(MyContext);
  const isMobileScreen = useMediaQuery({ query: "(max-width: 767px)" });

  const popoverCardMob = [
    {
      flagImg: "/images/united-state-flag.png",
      location: "United States",
      area: "100 Smith Street Collingwood VIC 3066 AU",
    },
    {
      flagImg: "/images/united-state-flag.png",
      location: "United States",
      area: "100 Smith Street Collingwood VIC 3066 AU",
    },
    {
      flagImg: "/images/united-state-flag.png",
      location: "United States",
      area: "100 Smith Street Collingwood VIC 3066 AU",
    },
  ];

  return (
    <section
      className={`${styles.globalPresenceStyle} ${
        theme ? styles.globalPresenceBannerDark : ""
      }`}
    >
      <div className={styles.globalStackBox}>
        <div className={cn("primary-container", styles.globalRow)}>
          <h2 className={styles.globalHeading}>Global Presence</h2>
          <p className={styles.globalText}>
            We have a presence in three strategic locations around the world to
            better serve our customers.
          </p>
        </div>

        <Popover className={cn(styles.popoverContainer)}>
          <Popover.Button>
            <div className={styles.contactMap}>
              <ImageCustom
                src="/images/map.svg"
                width={1000}
                height={1000}
                alt="map"
              />
            </div>
          </Popover.Button>

          <Popover.Panel className={styles.popoverStyle}>
            {!isMobileScreen && (
              <div className={styles.locationPopoverCard}>
                <div className={styles.popoverMapIcon}>
                  <ImageCustom
                    src="/images/united-state-flag.png"
                    width={40}
                    height={26}
                    alt="flag-img"
                  />
                </div>
                <h1 className={styles.locationHeading}>United States</h1>
                <p className={styles.locationAreaText}>
                  100 Smith Street Collingwood VIC 3066 AU
                </p>
              </div>
            )}
          </Popover.Panel>
        </Popover>
      </div>

      {isMobileScreen && (
        <div className={styles.popoverCardMobile}>
          {popoverCardMob.map((data, index) => (
            <div className={styles.locationPopoverCard}>
              <div className={styles.popoverMapIcon}>
                <ImageCustom
                  src={data.flagImg}
                  width={40}
                  height={26}
                  alt="flag-img"
                />
              </div>
              <h1 className={styles.locationHeading}>{data.location}</h1>
              <p className={styles.locationAreaText}>{data.area}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default GlobalPresence;
