// src/components/JobModal.js
import React, { useState } from 'react';
import './JobModal.scss';

const JobModal = ({ job, onClose, onSave }) => {
    const [formData, setFormData] = useState(job || {
        id: '',
        title: '',
        companyName: '',
        location: '',
        experience: '',
        position: '',
        type: 'Full Time',
        status: 'Active',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div className="job-modal">
            <form onSubmit={handleSubmit}>
                <h2>{job ? 'Edit Job' : 'Add Job'}</h2>
                <label>
                    Job Id
                    <input name="id" value={formData.id} onChange={handleChange} />
                </label>
                <label>
                    Job Title
                    <input name="title" value={formData.title} onChange={handleChange} />
                </label>
                <label>
                    Company Name
                    <input name="companyName" value={formData.companyName} onChange={handleChange} />
                </label>
                <label>
                    Location
                    <input name="location" value={formData.location} onChange={handleChange} />
                </label>
                <label>
                    Experience
                    <input name="experience" value={formData.experience} onChange={handleChange} />
                </label>
                <label>
                    Position
                    <input name="position" value={formData.position} onChange={handleChange} />
                </label>
                <label>
                    Type
                    <select name="type" value={formData.type} onChange={handleChange}>
                        <option value="Full Time">Full Time</option>
                        <option value="Part Time">Part Time</option>
                        <option value="Freelance">Freelance</option>
                        <option value="Internship">Internship</option>
                    </select>
                </label>
                <label>
                    Status
                    <select name="status" value={formData.status} onChange={handleChange}>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </label>
                <button type="submit">Save</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
};

export default JobModal;
