import { Link } from 'react-router-dom';

function StudentCard({ student }) {
  return (
    <div className="card h-100 shadow-sm border-0 student-card">
      <img
        src={student.profilePhoto || 'https://via.placeholder.com/300x180?text=Student'}
        alt={student.name}
        className="card-img-top"
      />
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <h5>{student.name}</h5>
          <span className="badge bg-success">{student.status}</span>
        </div>
        <p className="mb-1"><strong>Register:</strong> {student.registerNumber}</p>
        <p className="mb-1"><strong>Department:</strong> {student.department}</p>
        <p className="mb-3"><strong>Year:</strong> {student.year}</p>

        <Link to={`/students/${student._id}`} className="btn btn-primary btn-sm w-100">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default StudentCard;
