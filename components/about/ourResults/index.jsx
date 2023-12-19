import React from "react";

import styles from "./style.module.scss";

const OurResults = () => {
   const resultCardData = [
      {
         number: "4+",
         icon: "Icon",
         title: "Years of Experience in Market.",
      },
      {
         number: "4+",
         icon: "Icon",
         title: "Users growth in marketplace.",
      },
      {
         number: "4+",
         icon: "Icon",
         title: "Years of Experience in Market.",
      },
      {
         number: "4+",
         icon: "Icon",
         title: "Years of Experience in Market.",
      },
   ];
   return (
      <section className={styles.ourResults}>
         <div className="container">
            <div className="row">
               <div className="col-md-6 col-lg-6">
                  <h6 className={styles.ourResultsTitle}>Our Results</h6>
                  <h2>Celebrating Achievements: A Data-Driven Overview</h2>
                  <p>
                     With years of remarkable growth, we&apos;ve secured a solid position in the fiercely competitive IT industry. Our impressive
                     figures are a testament to our unwavering success and expertise. We continuously exceed expectations, expanding our client base
                     and delivering high-quality IT services. Our journey is marked by consistent progress, a reflection of our commitment to
                     excellence and innovation.
                  </p>
               </div>
            </div>

            <div className={styles.resultCardWrapper}>
               {resultCardData.map((data, index) => (
                  <div key={index} className={styles.resultCard}>
                     <div className="d-flex justify-content-between mb-5">
                        {" "}
                        <h6 className={styles.cardNum}>{data.number} </h6> <p className={styles.cardNum}>{data.icon} </p>{" "}
                     </div>
                     <p>{data.title} </p>
                  </div>
               ))}

              
            </div>
         </div>
      </section>
   );
};

export default OurResults;
