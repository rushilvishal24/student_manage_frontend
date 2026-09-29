import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import api from '../services/api';

function StudentDetails() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const response = await api.get(`/students/${id}`);
        setStudent(response.data.student || response.data);
      } catch (error) {
        console.error('Error fetching student details:', error);
      }
    };

    fetchStudentDetails();
  }, [id]);

  if (!student) {
    return (
      <>
        <Navbar />
        <div className="container py-5 text-center">Loading student details...</div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="container py-5">
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="card shadow-sm border-0">
              <img src={student.profilePhoto || 'https://via.placeholder.com/400x400?text=Student'} alt={student.name} className="card-img-top" />
              <div className="card-body">
                <h3>{student.name}</h3>
                <p className="text-muted">{student.registerNumber}</p>
                <span className="badge bg-success">{student.status}</span>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <h4>Student Information</h4>
                <div className="row g-3 mt-2">
                  <div className="col-md-6"><strong>Email:</strong> {student.email}</div>
                  <div className="col-md-6"><strong>Phone:</strong> {student.phone}</div>
                  <div className="col-md-6"><strong>Department:</strong> {student.department}</div>
                  <div className="col-md-6"><strong>Year:</strong> {student.year}</div>
                  <div className="col-md-6"><strong>Section:</strong> {student.section}</div>
                  <div className="col-md-6"><strong>Batch:</strong> {student.batch}</div>
                  <div className="col-md-6"><strong>Date of Birth:</strong> {student.dateOfBirth}</div>
                  <div className="col-md-6"><strong>Gender:</strong> {student.gender}</div>
                  <div className="col-md-12"><strong>Address:</strong> {student.address}</div>
                  <div className="col-md-6"><strong>Parent Name:</strong> {student.parentName}</div>
                  <div className="col-md-6"><strong>Parent Phone:</strong> {student.parentPhone}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default StudentDetails;
