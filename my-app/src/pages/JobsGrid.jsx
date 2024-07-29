// src/pages/JobsGrid.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "../components/JobCard/JobCard";
import "./JobsGrid.scss";

const JobsGrid = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Local JSON dosyasından veri çekme
    axios
      .get("/jobs.json")
      .then((response) => {
        setJobs(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
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
