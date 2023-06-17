import React, { useState, useEffect } from 'react';
import './App.css';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Data } from './Data';
import { Loading } from './Loading';

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = () => {
    setLoading(true);
    try {
      const jobs = Data;
      setLoading(false);
      setJobs(jobs);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading className="loading-state" />;
      </main>
    );
  }
  const { company, date, duties, id, title } = jobs[value];

  return (
    <main className="container">
      <section>
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${
                  index === value && 'active-btn'
                }`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
      </section>
      <article key={id}>
        <h3 className="title">{title}</h3>
        <h4 className="company">{company}</h4>
        <p className="job-date">{date}</p>
        {duties.map((duty, index) => {
          return (
            <div key={index} className="job-desc">
              <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
              <p className="job-duty">{duty}</p>
            </div>
          );
        })}
      </article>
    </main>
  );
}

export default App;
