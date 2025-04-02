import React, { useState } from 'react';
import './AppliedJobs.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

export default function AppliedJobs() {
    const [appliedJobs, setAppliedJobs] = useState([
        { 
            title: "Product Manager", 
            company: "Google", 
            location: "Mountain View, US", 
            appliedBefore: "2 weeks ago", 
            logo: "https://logo.clearbit.com/google.com"
        },
        { 
            title: "Software Engineer", 
            company: "Microsoft", 
            location: "Seattle, US", 
            appliedBefore: "1 month ago", 
            logo: "https://logo.clearbit.com/microsoft.com"
        },
        { 
            title: "UX Designer", 
            company: "Adobe", 
            location: "San Jose, US", 
            appliedBefore: "3 days ago", 
            logo: "https://logo.clearbit.com/adobe.com"
        },
        { 
            title: "Data Scientist", 
            company: "Facebook", 
            location: "Menlo Park, US", 
            appliedBefore: "2 months ago", 
            logo: "https://logo.clearbit.com/facebook.com"
        },
        { 
            title: "Marketing Specialist", 
            company: "Tesla", 
            location: "Palo Alto, US", 
            appliedBefore: "1 week ago", 
            logo: "https://logo.clearbit.com/tesla.com"
        },
        { 
            title: "Cyber Security Analyst", 
            company: "IBM", 
            location: "New York, US", 
            appliedBefore: "5 days ago", 
            logo: "https://logo.clearbit.com/ibm.com"
        }
    ]);

    return (
        <div className='applied-jobs-container'>
        <Navbar />
            <h2 className='applied-jobs-title'>Applied Jobs</h2>
            {appliedJobs.length > 0 ? (
                <ul className='applied-jobs-list'>
                    {appliedJobs.map((job, index) => (
                        <li key={index} className='job-item'>
                            <div className='job-header'>
                                <img src={job.logo} alt={`${job.company} logo`} className='company-logo' />
                                <h3 className='job-title'>{job.title}</h3>
                            </div>
                            <p className='job-info'>{job.company} - {job.location}</p>
                            <p className='applied-time'>Applied {job.appliedBefore}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className='no-jobs-message'>No applied jobs yet.</p>
            )}
        </div>
    );
}