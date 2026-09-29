import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">StudentManage</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/students">Students</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/attendance">Attendance</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/marks">Marks</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/timetable">Timetable</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/subjects">Subjects</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/notices">Notices</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/sports-dashboard">Sports Dashboard</Link></li>
            {user && user.role === 'admin' && (
              <li className="nav-item"><Link className="nav-link" to="/admin">Admin</Link></li>
            )}
          </ul>

          <div className="d-flex align-items-center gap-2">
            {!user ? (
              <>
                <Link to="/login" className="btn btn-outline-light btn-sm">Login</Link>
                <Link to="/signup" className="btn btn-light btn-sm">Signup</Link>
              </>
            ) : (
              <>
                <span className="text-light me-2">Hi, {user.name}</span>
                <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>Logout</button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
