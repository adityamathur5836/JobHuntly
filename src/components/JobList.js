import React from 'react';
import './JobList.css';
import Navbar from './Navbar';

export default function JobList() {
    const jobs = [
        { title: "Frontend Developer", company: "Google", location: "San Francisco, CA", tags: ["Remote", "Full-time"] },
        { title: "Product Manager", company: "Microsoft", location: "New York, NY", tags: ["Hybrid", "Full-time"] },
        { title: "UI/UX Designer", company: "Adobe", location: "Seattle, WA", tags: ["On-site", "Contract"] },
        { title: "Data Analyst", company: "Twitter", location: "Austin, TX", tags: ["Remote", "Part-time"] },
        { title: "Software Engineer", company: "Meta", location: "Menlo Park, CA", tags: ["Full-time", "On-site"] },
        { title: "Marketing Specialist", company: "Amazon", location: "Boston, MA", tags: ["Hybrid", "Contract"] },
        { title: "Cybersecurity Analyst", company: "Cisco", location: "Washington, DC", tags: ["Remote", "Full-time"] },
        { title: "Backend Developer", company: "Netflix", location: "Los Angeles, CA", tags: ["Full-time", "Hybrid"] },
        { title: "DevOps Engineer", company: "IBM", location: "Chicago, IL", tags: ["Remote", "Full-time"] },
        { title: "Cloud Engineer", company: "Oracle", location: "Denver, CO", tags: ["On-site", "Full-time"] },
        { title: "AI Research Scientist", company: "OpenAI", location: "Palo Alto, CA", tags: ["Hybrid", "Full-time"] },
        { title: "Mobile App Developer", company: "Snapchat", location: "San Diego, CA", tags: ["Remote", "Contract"] },
        { title: "Technical Writer", company: "Red Hat", location: "Raleigh, NC", tags: ["Remote", "Part-time"] },
        { title: "Project Manager", company: "Spotify", location: "London, UK", tags: ["Hybrid", "Full-time"] },
        { title: "HR Specialist", company: "Tesla", location: "Austin, TX", tags: ["On-site", "Full-time"] },
        { title: "Full-Stack Developer", company: "Airbnb", location: "Toronto, Canada", tags: ["Remote", "Full-time"] },
        { title: "SEO Specialist", company: "HubSpot", location: "Dublin, Ireland", tags: ["Remote", "Contract"] },
        { title: "Blockchain Engineer", company: "Coinbase", location: "Miami, FL", tags: ["Remote", "Full-time"] },
        { title: "Graphic Designer", company: "Canva", location: "Sydney, Australia", tags: ["Hybrid", "Part-time"] },
        { title: "IT Support Specialist", company: "Dell", location: "Houston, TX", tags: ["On-site", "Full-time"] },
        { title: "Game Developer", company: "Epic Games", location: "Cary, NC", tags: ["Hybrid", "Full-time"] },
        { title: "Customer Success Manager", company: "Zendesk", location: "Berlin, Germany", tags: ["Remote", "Full-time"] },
        { title: "Legal Counsel", company: "Facebook", location: "Menlo Park, CA", tags: ["Hybrid", "Full-time"] },
        { title: "Business Analyst", company: "Salesforce", location: "Chicago, IL", tags: ["On-site", "Full-time"] }
    ];
    

    return (
        <div className="job-listings-container">
            <Navbar />
            <h1>Job Listings</h1>
            <div className="job-list">
                {jobs.map((job, index) => (
                    <ul key={index} className="job-card">
                        <li><h2>{job.title}</h2></li>
                        <li><p>{job.company} - {job.location}</p></li>
                    </ul>
                ))}
            </div>
        </div>
    );
}
