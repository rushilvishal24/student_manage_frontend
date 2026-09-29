import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
  const stats = [
    { label: 'Total Students', value: '1250' },
    { label: 'Faculty Members', value: '86' },
    { label: 'Active Courses', value: '32' },
    { label: 'Attendance Rate', value: '94%' }
  ];

  const sports = [
    'Football',
    'Volleyball',
    'Basketball',
    'Cricket',
    'Hockey',
    'Athletics',
    'Kabaddi'
  ];

  return (
    <>
      <Navbar />

      <main>
        <section className="hero-section">
          <div className="container">
            <div className="row align-items-center min-vh-75 py-5">
              <div className="col-lg-6">
                <p className="hero-badge">Student Management System</p>
                <h1>Manage student records with ease.</h1>
                <p className="hero-text">
                  StudentManage helps colleges manage student profiles, attendance, marks,
                  notices, and academic records in one simple system.
                </p>
                <div className="d-flex gap-3 flex-wrap">
                  <Link to="/students" className="btn btn-primary btn-lg">Browse Students</Link>
                  <Link to="/login" className="btn btn-outline-light btn-lg">Login</Link>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="hero-card">
                  <div className="card shadow-lg border-0">
                    <div className="card-body p-4">
                      <h4 className="mb-3">Quick Search</h4>
                      <div className="mb-3">
                        <input className="form-control" placeholder="Search by name or register number" />
                      </div>
                      <div className="row g-2">
                        <div className="col-md-6">
                          <select className="form-select">
                            <option>Department</option>
                            <option>EEE</option>
                            <option>CSE</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <select className="form-select">
                            <option>Year</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                        </div>
                      </div>
                      <button className="btn btn-success w-100 mt-3">Search Students</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 bg-light">
          <div className="container">
            <div className="text-center mb-4">
              <h2>College Student Management</h2>
            </div>
            <div className="row g-4">
              <div className="col-md-3">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center">
                    <h5>Student Profiles</h5>
                    <p>View personal and academic details.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center">
                    <h5>Attendance</h5>
                    <p>Track every student’s attendance status.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center">
                    <h5>Marks</h5>
                    <p>Manage internal test and exam results.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center">
                    <h5>Reports</h5>
                    <p>Generate summary records for admin users.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 bg-light">
          <div className="container">
            <div className="text-center mb-4">
              <h2>Sports & Activities</h2>
              <p className="text-muted">Campus life includes a wide range of sports for every student.</p>
            </div>
            <div className="row g-3">
              {sports.map((sport) => (
                <div className="col-sm-6 col-md-4 col-lg-3" key={sport}>
                  <div className="card h-100 border-0 shadow-sm text-center">
                    <div className="card-body">
                      <h5 className="mb-0">{sport}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container">
            <div className="row g-4 text-center">
              {stats.map((item) => (
                <div className="col-md-3" key={item.label}>
                  <div className="card shadow-sm border-0 stat-card">
                    <div className="card-body">
                      <h3>{item.value}</h3>
                      <p>{item.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;
