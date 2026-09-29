import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';

function StudentDashboard() {
  const { user } = useAuth();

  return (
    <>
      <Navbar />

      <main className="container py-5">
        <h2 className="mb-3">Student Dashboard</h2>
        <p className="text-muted mb-4">Welcome back, {user?.name || 'Student'}.</p>

        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h5>Profile</h5>
                <p>View student details and personal information.</p>
                <Link to="/students" className="btn btn-primary btn-sm">Open</Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h5>Attendance</h5>
                <p>Check current attendance status and percentage.</p>
                <Link to="/attendance" className="btn btn-primary btn-sm">Open</Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h5>Marks</h5>
                <p>Review test results and academic performance.</p>
                <Link to="/marks" className="btn btn-primary btn-sm">Open</Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h5>Timetable</h5>
                <p>View class schedule and subject timetable.</p>
                <Link to="/timetable" className="btn btn-primary btn-sm">Open</Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default StudentDashboard;
