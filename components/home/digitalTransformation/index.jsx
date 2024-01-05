"use client";

import React from "react";
import Slider from "react-slick";
import styles from "./style.module.scss";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import { Icons } from "@/components/icons";
const DigitalTransformation = () => {
  const serviceCard = [
    {
      img: "/images/digital-trans.png",
      digitalHeading: "Customer Experience (CX).",
      digitalText:
        "We help our clients to attract the relevant audience for their business with our advanced technology for a higher conversion rate. We perform advance digital operations like -",
    },
    {
      img: "/images/digital-trans.png",
      digitalHeading: "Customer Experience (CX).",
      digitalText:
        "We help our clients to attract the relevant audience for their business with our advanced technology for a higher conversion rate. We perform advance digital operations like -",
    },
    {
      img: "/images/digital-trans.png",
      digitalHeading: "Customer Experience (CX).",
      digitalText:
        "We help our clients to attract the relevant audience for their business with our advanced technology for a higher conversion rate. We perform advance digital operations like -",
    },
    {
      img: "/images/digital-trans.png",
      digitalHeading: "Customer Experience (CX).",
      digitalText:
        "We help our clients to attract the relevant audience for their business with our advanced technology for a higher conversion rate. We perform advance digital operations like -",
    },
  ];
  const settings = {
    className: "center",
    centerPadding: "0px",
    centerMode: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          centerPadding: "15px",
        },
      },
    ],
  };
  return (
    <section className={`${styles.digitalStyle}`}>
      <div className={styles.serviceRow}>
        <div className="row">
          <div className="col-md-12 col-12">
            <p className={styles.projectHighlight}>Digital Transformation</p>
          </div>

          <div className="col-md-8 col-12">
            <h2 className={styles.datingText}>
              Remaining businesses by integrating
              <span className={styles.digitalTechText}>
                digital technologies.
              </span>
            </h2>
          </div>
          <div className={`${styles.servicesBtn} col-md-4 col-12`}>
            <Button variant="outline" size="md">
              Explore Services <Icons.ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </div>

      <div className={`${styles.digitalMain} digital-transformation`}>
        <Slider {...settings}>
          {serviceCard.map((data, index) => (
            <div key={index}>
              <div className={styles.digitalGrid}>
                <div className={styles.digitalImg}>
                  <ImageCustom
                    src={data.img}
                    width={421}
                    height={318}
                    alt="bannerImg"
                  />
                </div>

                <div className={styles.experienceCardBox}>
                  <h4 className={styles.CustomerHeading}>
                    {data.digitalHeading}
                  </h4>
                  <p className={styles.digitalText}>{data.digitalText}</p>

                  <ul className={styles.customerList}>
                    <li className={styles.list}>
                      Attract & Engage more users/customers
                    </li>
                    <li className={styles.list}>Increase Conversions</li>
                    <li className={styles.list}>Automate Marketing Tasks</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default DigitalTransformation;
