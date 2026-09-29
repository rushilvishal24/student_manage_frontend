import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import api from '../services/api';

function Students() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState('');
  const [department, setDepartment] = useState('');
  const [year, setYear] = useState('');
  const [section, setSection] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await api.get('/students');
      setStudents(response.data.students || response.data || []);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const filteredStudents = students.filter((student) => {
    const nameMatch = student.name?.toLowerCase().includes(search.toLowerCase());
    const registerMatch = student.registerNumber?.toLowerCase().includes(search.toLowerCase());
    const departmentMatch = department ? student.department === department : true;
    const yearMatch = year ? student.year === Number(year) : true;
    const sectionMatch = section ? student.section === section : true;
    const statusMatch = status ? student.status === status : true;

    return (nameMatch || registerMatch) && departmentMatch && yearMatch && sectionMatch && statusMatch;
  });

  return (
    <>
      <Navbar />

      <main className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
          <div>
            <h2>Students</h2>
            <p className="text-muted mb-0">Search and manage student records</p>
          </div>
          <Link to="/admin/add-student" className="btn btn-primary">
            Add Student
          </Link>
        </div>

        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by name or register number"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <div className="col-md-2">
                <select className="form-select" value={department} onChange={(e) => setDepartment(e.target.value)}>
                  <option value="">Department</option>
                  <option value="EEE">EEE</option>
                  <option value="CSE">CSE</option>
                  <option value="ECE">ECE</option>
                </select>
              </div>

              <div className="col-md-2">
                <select className="form-select" value={year} onChange={(e) => setYear(e.target.value)}>
                  <option value="">Year</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>

              <div className="col-md-2">
                <select className="form-select" value={section} onChange={(e) => setSection(e.target.value)}>
                  <option value="">Section</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                </select>
              </div>

              <div className="col-md-2">
                <select className="form-select" value={status} onChange={(e) => setStatus(e.target.value)}>
                  <option value="">Status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {filteredStudents.map((student) => (
            <div className="col-lg-4 col-md-6" key={student._id || student.registerNumber}>
              <div className="card h-100 shadow-sm border-0 student-card">
                <img
                  src={student.profilePhoto || 'https://via.placeholder.com/300x180?text=Student'}
                  className="card-img-top"
                  alt={student.name}
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title mb-1">{student.name}</h5>
                    <span className="badge bg-success">{student.status}</span>
                  </div>
                  <p className="mb-1"><strong>Register:</strong> {student.registerNumber}</p>
                  <p className="mb-1"><strong>Department:</strong> {student.department}</p>
                  <p className="mb-1"><strong>Year:</strong> {student.year}</p>
                  <p className="mb-3"><strong>Section:</strong> {student.section}</p>

                  <Link to={`/students/${student._id}`} className="btn btn-primary btn-sm w-100">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Students;
