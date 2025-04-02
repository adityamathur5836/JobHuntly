import React from 'react';
import './JobApplication.css';

const JobApplicationForm = ({ jobTitle, companyName, onClose }) => {
    return (
        <>
            <div className="overlay" onClick={onClose}></div>
            <div className="job-application-form">
                <div className="form-header">
                    <h2>Apply for {jobTitle}</h2>
                    <span className="close-btn" onClick={onClose}>&times;</span>
                </div>
                <p className="company-name">Company: {companyName}</p>
                <form>
                    <label>Name:</label>
                    <input type="text" placeholder="Enter your name" required />

                    <label>Email:</label>
                    <input type="email" placeholder="Enter your email" required />

                    <label>Upload Resume (PDF/DOCX):</label>
                    <input type="file" accept=".pdf,.doc,.docx" required />

                    <button type="submit">Submit Application</button>
                </form>
            </div>
        </>
    );
};

export default JobApplicationForm;
