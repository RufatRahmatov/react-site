import React, { useState } from 'react';
import './JobModal.scss';

const JobModal = ({ job, onClose, onSave }) => {
    const [formData, setFormData] = useState(job || {
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
            {/* <div className="modal-header"> </div> */}
            {/* <h1>JOBS LISTS</h1> */}
            <div className="actions">
                {/* <button className="refresh-button">↻</button>
                    <button className="options-button">⋮</button>
                    <button className="add-button">Add New Job</button> */}
            </div>

            <form onSubmit={handleSubmit} className="modal-content">
                <h2>{job ? 'Edit Job' : 'Add Job'}</h2>
                <div className="form-group">
                    <label>Job Title</label>
                    <input name="title" value={formData.title} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Company Name</label>
                    <input name="companyName" value={formData.companyName} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Location</label>
                    <input name="location" value={formData.location} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Experience</label>
                    <input name="experience" value={formData.experience} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Position</label>
                    <input name="position" value={formData.position} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Type</label>
                    <select name="type" value={formData.type} onChange={handleChange}>
                        <option value="Full Time">Full Time</option>
                        <option value="Part Time">Part Time</option>
                        <option value="Freelance">Freelance</option>
                        <option value="Internship">Internship</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Status</label>
                    <select name="status" value={formData.status} onChange={handleChange}>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>
                <div className="form-actions">
                    <button type="submit">Save</button>
                    <button type="button" onClick={onClose}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default JobModal;
