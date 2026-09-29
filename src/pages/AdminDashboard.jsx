import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import api from '../services/api';

function AdminDashboard() {
  const [stats, setStats] = useState({
    totalStudents: 0,
    totalUsers: 0,
    totalSubjects: 0,
    totalAttendance: 0,
    totalMarks: 0
  });
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [reportResponse, studentResponse] = await Promise.all([
          api.get('/admin/reports'),
          api.get('/admin/students')
        ]);

        setStats(reportResponse.data);
        setStudents(studentResponse.data.students || []);
      } catch (error) {
        console.error('Dashboard error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const cards = [
    { title: 'Total Students', value: stats.totalStudents, link: '/students' },
    { title: 'Total Faculty', value: '86', link: '/students' },
    { title: 'Total Subjects', value: stats.totalSubjects, link: '/students' },
    { title: 'Attendance Summary', value: stats.totalAttendance, link: '/attendance' }
  ];

  return (
    <>
      <Navbar />

      <main className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
          <h2>Admin Dashboard</h2>
          <Link to="/admin/add-student" className="btn btn-primary">Add Student</Link>
        </div>

        {loading ? (
          <div className="text-center py-5">Loading dashboard...</div>
        ) : (
          <>
            <div className="row g-4 mb-5">
              {cards.map((item, index) => (
                <div className="col-md-6 col-lg-3" key={index}>
                  <div className="card shadow-sm border-0 h-100">
                    <div className="card-body">
                      <h6 className="text-muted">{item.title}</h6>
                      <h3>{item.value}</h3>
                      <Link to={item.link} className="btn btn-outline-primary btn-sm">View</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card shadow-sm border-0">
              <div className="card-body">
                <h4 className="mb-3">Recent Student Records</h4>
                <div className="table-responsive">
                  <table className="table table-bordered align-middle">
                    <thead className="table-dark">
                      <tr>
                        <th>Name</th>
                        <th>Register</th>
                        <th>Department</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students.slice(0, 5).map((student) => (
                        <tr key={student._id}>
                          <td>{student.name}</td>
                          <td>{student.registerNumber}</td>
                          <td>{student.department}</td>
                          <td>{student.status}</td>
                          <td>
                            <Link to={`/admin/edit-student/${student._id}`} className="btn btn-sm btn-warning me-2">Edit</Link>
                            <Link to={`/students/${student._id}`} className="btn btn-sm btn-info">View</Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        )}
      </main>

      <Footer />
    </>
  );
}

export default AdminDashboard;
