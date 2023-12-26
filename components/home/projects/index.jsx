import React from "react";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import { Icons } from "@/components/icons";
import styles from "./style.module.scss";

const Projects = () => {
  return (
    <section className={`${styles.projectsStyle}`}>
      <div className="row">
        <div className="col-md-12 col-12">
          <p className={styles.ProjectHighlight}>Projects</p>
        </div>

        <div className="col-md-6 col-12">
          <h3 className={styles.datingText}>
            Unveiling Spotlight on Select Case Studies.
          </h3>
        </div>
        <div className="col-md-6 col-12">
          <p className={styles.aboutText}>
            Delve into our case studies to witness firsthand how we've tackled
            challenges, delivered solutions, and achieved measurable success.
            Each story is a testament to our commitment, expertise, and the
            transformative impact.
          </p>

          <Button variant="outline" size="md">
            Check Our Portfolio <Icons.ArrowRight size={18} />
          </Button>
        </div>

        <div className={styles.projectImg}>
          <ImageCustom
            src="/images/project-re.png"
            width={1360}
            height={300}
            alt="projectImg"
          />
        </div>

        <div className="col-md-3 col-12">
          <h4 className={styles.projectBrand}>
            International Motorcycle Brand.
          </h4>
        </div>

        <div className="col-md-4 col-12">
          <p className={styles.brandFromText}>
            Royal Enfield is a global brand since 1901, has a geographical
            presence in over 70 countries. The brand delivers consistent,
            omnichannel customer experiences, achieves scalability, diversifying
            into countries, and continents.
          </p>
        </div>
        <div className="col-md-4 col-12">
          <div className={styles.ProjectBtn}>
            <Button variant="outline" size="sm">
              Web Design
            </Button>
            <Button variant="outline" size="sm">
              Dashboard Design
            </Button>
            <Button variant="outline" size="sm">
              UI
            </Button>
            <Button variant="outline" size="sm">
              UX
            </Button>
            <Button variant="outline" size="sm">
              Responsive
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
