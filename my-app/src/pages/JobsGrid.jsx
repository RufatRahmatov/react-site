import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import "./JobsGrid.scss";

const JobsGrid = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const exampleJobs = [
      {
        id: 1,
        title: "Frontend Developer",
        companyName: "Company A",
        location: "New York",
        salary: "$80,000 - $100,000",
        companyLogo: "https://via.placeholder.com/100",
      },
      {
        id: 2,
        title: "Backend Developer",
        companyName: "Company B",
        location: "San Francisco",
        salary: "$90,000 - $110,000",
        companyLogo: "https://via.placeholder.com/100",
      },
      {
        id: 2,
        title: "Backend Developer",
        companyName: "Company B",
        location: "San Francisco",
        salary: "$90,000 - $110,000",
        companyLogo: "https://via.placeholder.com/100",
      },
      {
        id: 2,
        title: "Backend Developer",
        companyName: "Company B",
        location: "San Francisco",
        salary: "$90,000 - $110,000",
        companyLogo: "https://via.placeholder.com/100",
      },
      {
        id: 2,
        title: "Backend Developer",
        companyName: "Company B",
        location: "San Francisco",
        salary: "$90,000 - $110,000",
        companyLogo: "https://via.placeholder.com/100",
      },
      {
        id: 2,
        title: "Backend Developer",
        companyName: "Company B",
        location: "San Francisco",
        salary: "$90,000 - $110,000",
        companyLogo: "https://via.placeholder.com/100",
      },
      {
        id: 2,
        title: "Backend Developer",
        companyName: "Company B",
        location: "San Francisco",
        salary: "$90,000 - $110,000",
        companyLogo: "https://via.placeholder.com/100",
      },
      {
        id: 2,
        title: "Backend Developer",
        companyName: "Company B",
        location: "San Francisco",
        salary: "$90,000 - $110,000",
        companyLogo: "https://via.placeholder.com/100",
      },
    ];

    setJobs(exampleJobs);
    setLoading(false);
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading jobs</p>;

  return (
    <div className="jobs-grid">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobsGrid;
