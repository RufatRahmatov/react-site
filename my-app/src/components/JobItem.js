
import React from 'react';
import './JobItem.scss';

const JobItem = ({ job, index, onEdit, onDelete }) => {
    return (
        <tr>
            <td>{index}</td>
            <td>{job.title}</td>
            <td>{job.companyName}</td>
            <td>{job.location}</td>
            <td>{job.experience}</td>
            <td>{job.position}</td>
            <td>{job.type}</td>
            <td>{job.postedDate}</td>
            <td>{job.status}</td>
            <td>
                <button onClick={() => onEdit(job)}>Edit</button>
                <button onClick={() => onDelete(job.id)}>Delete</button>
            </td>
        </tr>
    );
};

export default JobItem;
