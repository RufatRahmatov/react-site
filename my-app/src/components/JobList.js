
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobItem from './JobItem';
import JobModal from './JobModal';
import './JobList.scss';

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [currentJob, setCurrentJob] = useState(null);

    useEffect(() => {
        axios.get('API_ENDPOINT_HERE')
            .then(response => setJobs(response.data))
            .catch(error => console.error('Error fetching jobs:', error));
    }, []);

    const handleEdit = (job) => {
        setCurrentJob(job);
        setModalOpen(true);
    };

    const handleDelete = (jobId) => {

    };

    const handleSave = (job) => {
        if (currentJob) {

        } else {

        }
        setModalOpen(false);
        setCurrentJob(null);
    };

    return (
        <div className="job-list">
            <button className="add-job-btn" onClick={() => setModalOpen(true)}>Add New Job</button>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Job Title</th>
                        <th>Company Name</th>
                        <th>Location</th>
                        <th>Experience</th>
                        <th>Position</th>
                        <th>Type</th>
                        <th>Posted Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map((job, index) => (
                        <JobItem key={job.id} job={job} index={index + 1} onEdit={handleEdit} onDelete={handleDelete} />
                    ))}
                </tbody>
            </table>
            {modalOpen && (
                <JobModal job={currentJob} onClose={() => setModalOpen(false)} onSave={handleSave} />
            )}
        </div>
    );
};

export default JobList;
