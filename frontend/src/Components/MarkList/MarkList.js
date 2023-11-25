import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import "../DashContent/DashContent.css";

function MarkList() {
  const [sqlresult, setSqlResult] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");
  const [classList, setClassList] = useState([]);
  const [result, setResult] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const username = localStorage.getItem("username");
        const response = await axios.post(
          "http://localhost:8081/markList/fetchSpecificClass",
          { username }
        );
        if (response.data) {
          setClassList(response.data);
        } else {
          setError("Error fetching class data");
        }
      } catch (error) {
        setError("Error fetching class data");
      }
    };

    fetchData();
  }, []);

  const handleClassChange = async (e) => {
    e.preventDefault();

    try {
      const username = localStorage.getItem("username");
      const response = await axios.post(
        "http://localhost:8081/markList/fetchMarkList",
        { selectedClass, username }
      );
      if (response.data.success) {
        setSqlResult(response.data);
        const updatedResult = [];
        for (const studentResult of response.data) {
          const existingStudentIndex = updatedResult.findIndex(
            (s) => s.name === studentResult.studentName
          );
          if (existingStudentIndex !== -1) {
            updatedResult[existingStudentIndex][
              studentResult.assessmentName
            ] = studentResult.mark;
          } else {
            const obj = {
              name: studentResult.studentName,
              [studentResult.assessmentName]: studentResult.mark,
            };
            updatedResult.push(obj);
          }
        }
        setResult(updatedResult);
        setError("");
      } else {
        setError("Error fetching mark data");
      }
    } catch (error) {
      setError("Error fetching mark data");
    }
  };

  return (
    <div>
      <div className="dashContent">
        <div className="overview">
          <div className="title">
            <i className="uil uil-receipt-alt"></i>
            <span className="text">Report/Financial Report</span>
          </div>
        </div>
        <div className="container">
          <div className="content">
            <div className="user-details">
              <form onSubmit={handleClassChange}>
                <div className="input-box">
                  <div className="gender-details">
                    <select
                      value={selectedClass}
                      onChange={(e) => setSelectedClass(e.target.value)}
                    >
                      <option value="">Select Class</option>
                      {classList.map((className, index) => (
                        <option
                          key={index}
                          value={className.full_identification}
                        >
                          {className.full_identification}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="input-box">
                  <input type="submit" value="Submit" />
                </div>
              </form>
              {error && <p>{error}</p>}
              <div>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      {Object.keys(result[0] || {}).map((key) => (
                        <th key={key}>{key}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {result.map((obj, index) => (
                      <tr key={index}>
                        {Object.values(obj).map((value, idx) => (
                          <td key={idx}>{value}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default MarkList;
