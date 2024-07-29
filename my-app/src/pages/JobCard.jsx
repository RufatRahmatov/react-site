import React from "react";
import styles from "./JobCard.module.scss";

const JobCard = ({ job }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={job.companyLogo} alt={job.title} />
      </div>
      <div className={styles.body}>
        <h3>{job.title}</h3>
        <p>{job.companyName}</p>
        <p>{job.location}</p>
        <p>{job.salary}</p>
      </div>
      <div className={styles.footer}>
        <button className={styles.viewProfile}>View Profile</button>
        <button className={styles.applyNow}>Apply Now</button>
      </div>
    </div>
  );
};

export default JobCard;
