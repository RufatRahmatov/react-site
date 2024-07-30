import React from 'react';
import './DeleteConfirmationModal.scss';
import { GoTrash } from 'react-icons/go';

const DeleteConfirmationModal = ({ onConfirm, onCancel }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <button className="close-icon" onClick={onCancel}> <div>×</div></button>
                </div>
                <div className="modal-body">
                    <div className="modal-icon">
                        <GoTrash />
                    </div>
                    <p>Are you sure you want to permanently erase the job?</p>
                </div>
                <div className="modal-footer">
                    <button className="delete-button" onClick={onConfirm}>Delete Now</button>
                    <button className="close-button" onClick={onCancel}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmationModal;
