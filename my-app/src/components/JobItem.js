import React, { useState } from 'react';
import './JobItem.scss';
import { FaRegEye } from "react-icons/fa";
import { GoTrash } from "react-icons/go";
import { CiEdit } from "react-icons/ci";
import DeleteConfirmationModal from './DeleteConfirmationModal';

const JobItem = ({ job, index, onEdit, onDelete }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDelete = () => {
        setIsModalOpen(true);
    };

    const confirmDelete = () => {
        onDelete(job.id);
        setIsModalOpen(false);
    };

    const cancelDelete = () => {
        setIsModalOpen(false);
    };

    return (
        <>
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
                    <button className="icon-button view-button">
                        <FaRegEye />
                    </button>
                    <button onClick={() => onEdit(job)} className="icon-button edit-button">
                        <CiEdit />
                    </button>
                    <button onClick={handleDelete} className="icon-button deletee-button">
                        <GoTrash />
                    </button>
                </td>
            </tr>

            {isModalOpen && (
                <DeleteConfirmationModal
                    onConfirm={confirmDelete}
                    onCancel={cancelDelete}
                />
            )}
        </>
    );
};

export default JobItem;
