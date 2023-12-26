import React from "react";
import styles from "./style.module.scss";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

const TechnologyStack = () => {
  const serviceCard = [
    {
      icon: <Icons.React width={72} height={72} />,
    },
    {
      icon: <Icons.Adobe width={72} height={72} />,
    },
    {
      icon: <Icons.Drupal width={120} height={120} />,
    },

    {
      icon: <Icons.React width={72} height={72} />,
    },
    {
      icon: <Icons.Adobe width={72} height={72} />,
    },
    {
      icon: <Icons.Drupal width={120} height={120} />,
    },

    {
      icon: <Icons.React width={72} height={72} />,
    },
    {
      icon: <Icons.Adobe width={72} height={72} />,
    },
    {
      icon: <Icons.Drupal width={120} height={120} />,
    },

    {
      icon: <Icons.Drupal width={120} height={120} />,
    },
    {
      icon: <Icons.Adobe width={72} height={72} />,
    },
    {
      icon: <Icons.Drupal width={120} height={120} />,
    },

    {
      icon: <Icons.React width={72} height={72} />,
    },
    {
      icon: <Icons.Adobe width={72} height={72} />,
    },
    {
      icon: <Icons.Drupal width={120} height={120} />,
    },

    {
      icon: <Icons.React width={72} height={72} />,
    },
    {
      icon: <Icons.Adobe width={72} height={72} />,
    },
    {
      icon: <Icons.Drupal width={120} height={120} />,
    },

    {
      icon: <Icons.React width={72} height={72} />,
    },
    {
      icon: <Icons.Adobe width={72} height={72} />,
    },
    {
      icon: <Icons.Drupal width={120} height={120} />,
    },

    {
      icon: <Icons.React width={72} height={72} />,
    },
    {
      icon: <Icons.Adobe width={72} height={72} />,
    },
    {
      icon: <Icons.Drupal width={120} height={120} />,
    },

    {
      icon: <Icons.React width={72} height={72} />,
    },
    {
      icon: <Icons.Adobe width={72} height={72} />,
    },
    {
      icon: <Icons.Drupal width={120} height={120} />,
    },

    {
      icon: <Icons.React width={72} height={72} />,
    },
    {
      icon: <Icons.Adobe width={72} height={72} />,
    },
    {
      icon: <Icons.Drupal width={120} height={120} />,
    },

    {
      icon: <Icons.React width={72} height={72} />,
    },
    {
      icon: <Icons.Adobe width={72} height={72} />,
    },
    {
      icon: <Icons.Drupal width={120} height={120} />,
    },

    {
      icon: <Icons.React width={72} height={72} />,
    },
    {
      icon: <Icons.Adobe width={72} height={72} />,
    },
    {
      icon: <Icons.Drupal width={120} height={120} />,
    },
    {
      icon: <Icons.React width={72} height={72} />,
    },
    {
      icon: <Icons.Adobe width={72} height={72} />,
    },
    {
      icon: <Icons.Drupal width={120} height={120} />,
    },

    {
      icon: <Icons.React width={72} height={72} />,
    },
    {
      icon: <Icons.Adobe width={72} height={72} />,
    },
    {
      icon: <Icons.Drupal width={120} height={120} />,
    },

    {
      icon: <Icons.React width={72} height={72} />,
    },
    {
      icon: <Icons.Adobe width={72} height={72} />,
    },
    {
      icon: <Icons.Drupal width={120} height={120} />,
    },
  ];

  const countsCard = [
    {
      count: "930+",
      countText: "Partners",
    },
    {
      count: "3000+",
      countText: "Integrations",
    },
    {
      count: "500+",
      countText: "System Integrations",
    },
  ];
  return (
    <section className={`${styles.technologyStyle}`}>
      <div className={styles.gridContainer}>
        {serviceCard.map((data, index) => (
          <div key={index} className={styles.techCardLogo}>
            {data.icon}
          </div>
        ))}
      </div>
      <div className={styles.technologyStackBox}>
        <div className={styles.careerRow}>
          <div className="row">
            <div className="col-md-12 col-12">
              <div className={styles.ProjectHighlight}>Technology stack</div>
            </div>

            <div className="col-md-12 col-12">
              <p className={styles.techHeading}>Empowering Tomorrow, Today.</p>
            </div>
            <div className="col-md-12 col-12">
              <p className={styles.techText}>
                We approach each project focusing on the latest technologies ~
                our stacks follow exactly the most up-to-date market trends,
                with particular attention to the latest stable versions of the
                individual frameworks.
              </p>
            </div>
            <div className="row">
              <div className={styles.partnerCounter}>
                {countsCard.map((data, index) => (
                  <div key={index} className={styles.counterCard}>
                    <h2 className={styles.counts}>{data.count}</h2>
                    <p className={styles.countsText}>{data.countText}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-12 col-12">
              <Button variant="outline" size="md">
                Explore Technologies <Icons.ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
