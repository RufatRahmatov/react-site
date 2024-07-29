import React from 'react';
import './JobItem.scss';
import { FaRegEye } from "react-icons/fa";
import { GoTrash } from "react-icons/go";
import { CiEdit } from "react-icons/ci";

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
                <button onClick={() => (job)} className="icon-button view-button">
                    <FaRegEye />
                </button>
                <button onClick={() => onEdit(job)} className="icon-button edit-button">
                    <CiEdit />
                </button>
                <button onClick={() => onDelete(job.id)} className="icon-button delete-button">
                    <GoTrash />
                </button>
            </td>
        </tr>
    );
};

export default JobItem;
