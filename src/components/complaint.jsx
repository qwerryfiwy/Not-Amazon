import React, { useState, useEffect } from 'react';
import './styles/complaint.css';

const Complaint = () => {
  const [complaint, setComplaint] = useState("");
  const [response, setResponse] = useState("");
  const [complaintsList, setComplaintsList] = useState([]);

  useEffect(() => {
    const storedComplaints = JSON.parse(localStorage.getItem("notamazon_complaints")) || [];
    setComplaintsList(storedComplaints);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (complaint.trim() !== "") {
      const updatedList = [...complaintsList, complaint];
      localStorage.setItem("notamazon_complaints", JSON.stringify(updatedList));
      setComplaintsList(updatedList);
      setComplaint("");
      setResponse("Thanks for your complaint! We've thrown it into the void. Feels good, right?");
    } else {
      setResponse("Please complain properly. Even chaos has rules.");
    }
  };

  return (
    <div className="complaint-container">
      <h1 className="complaint-heading">Complaint Form</h1>
      <p className="complaint-subtext">
        Tell us your problems, so we can totally ignore them like professionals.
      </p>

      <form onSubmit={handleSubmit} className="complaint-form">
        <textarea
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
          placeholder="Describe your complaint here..."
          className="complaint-textarea"
        />
        <button type="submit" className="submit-complaint-btn">
          Submit Complaint
        </button>
      </form>

      {response && <p className="response-text">{response}</p>}
    </div>
  );
};

export default Complaint;
