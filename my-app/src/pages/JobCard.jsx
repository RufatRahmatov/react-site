import React from "react";
import styles from "./JobCard.module.scss";

const JobCard = ({ job }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={job.companyLogo} alt={job.title} className={styles.logo} />
      </div>
      <div className={styles.body}>
        <h3>{job.title}</h3>
        <p>{job.companyName}</p>
        <p className={styles.location}>
          <i className="fas fa-map-marker-alt"></i> {job.location}
        </p>
        <p className={styles.salary}>{job.salary}</p>
        <div className={styles.labels}>
          <span className={styles.fullTime}>Full Time</span>
          <span className={styles.urgent}>Urgent</span>
          <span className={styles.private}>Private</span>
        </div>
      </div>
      <div className={styles.footer}>
        <button className={styles.viewProfile}>View Profile</button>
        <button className={styles.applyNow}>Apply Now</button>
      </div>
    </div>
  );
};

export default JobCard;
