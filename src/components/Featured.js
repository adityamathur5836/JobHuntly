import React, { useState } from "react";
import arrow from "../assets/arrow.png";
import "./Featured.css";
import R from "../assets/R.png";
import dot from "../assets/dot.png";
import brand from "../assets/brand.png";
import pitch from "../assets/pitch.png";
import visual from "../assets/visual.png";
import product from "../assets/product.png";
import lead from "../assets/lead.png";
import strategy from "../assets/strategy.png";
import analyst from "../assets/analyst.png";
import JobApplicationForm from "./JobApplication";

export default function Featured() {
  const [selectedJob, setSelectedJob] = useState(null);
  const closeForm = () => {
    setSelectedJob(null);
  };

  const jobs = [
    {
      id: 1,
      title: "Email Marketing",
      company: "Revoult",
      location: "Madrid, Spain",
      img: R,
      para: "Revolut is looking for Email Marketing to help team ma ...",
      buttons: ["Marketing", "Design"],
    },
    {
      id: 2,
      title: "Brand Designer",
      company: "Dropbox",
      location: "San Francisco, US",
      img: brand,
      para: "Dropbox is looking for Brand Designer to help the team t ...",
      buttons: ["Design", "Business"],
    },
    {
      id: 3,
      title: "Email Marketing",
      company: "Pitch",
      location: "Berlin, Germany",
      img: pitch,
      para: "Pitch is looking for Customer Manager to join marketing t ...",
      buttons: ["Marketing"],
    },
    {
      id: 4,
      title: "Visual Designer",
      company: "Blinklist",
      location: "Granada, Spain",
      img: visual,
      para: "Blinkist is looking for Visual Designer to help team desi ...",
      buttons: ["Design"],
    },
    {
      id: 5,
      title: "Product Designer",
      company: "ClassPass",
      location: "Manchester, UK",
      img: product,
      para: "ClassPass is looking for Product Designer to help us...",
      buttons: ["Marketing", "Design"],
    },
    {
      id: 6,
      title: "Lead Designer",
      company: "Canva",
      location: "Ontario, Canada",
      img: lead,
      para: "Canva is looking for Lead Engineer to help develop n ...",
      buttons: ["Design", "Business"],
    },
    {
      id: 7,
      title: "Brand Strategist",
      company: "GoDaddy",
      location: "Marseille, France",
      img: strategy,
      para: "GoDaddy is looking for Brand Strategist to join the team...",
      buttons: ["Marketing"],
    },
    {
      id: 8,
      title: "Data Analyst",
      company: "Twitter",
      location: "San Diego, US",
      img: analyst,
      para: "Twitter is looking for Data Analyst to help team desi ...",
      buttons: ["Technology"],
    },
  ];

  return (
    <div className="featured_jobs">
      <div className="jobs-nav">
        <div className="heading">
          <h1>Featured</h1>
          <h1 className="jobs">jobs</h1>
        </div>
        <div className="inner-jobs">
          <a>Show all jobs</a>
          <img src={arrow} width="10%" height="10%" />
        </div>
      </div>
      <div className="grid featured-grid">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="grid-elems"
            onClick={() => setSelectedJob(job)}
          >
            <div className="grid-logo">
              <img src={job.img} />
              <div className="fulltime">Full Time</div>
            </div>
            <h2>{job.title}</h2>
            <div className="location">
              <p>{job.company}</p>
              <img src={dot} height={5} width={5} />
              <p>{job.location}</p>
            </div>
            <div>
              <p>{job.para}</p>
            </div>
            <div className="buttons">
              {job.buttons.map((btn, index) => (
                <button key={index} className={btn.toLowerCase()}>
                  {btn}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      {selectedJob && (
        <JobApplicationForm
          jobTitle={selectedJob.title}
          companyName={selectedJob.company}
          onClose={closeForm}
        />
      )}
    </div>
  );
}