import StudentCard from './StudentCard';

function StudentList({ students }) {
  return (
    <div className="row g-4">
      {students.map((student) => (
        <div className="col-lg-4 col-md-6" key={student._id || student.registerNumber}>
          <StudentCard student={student} />
        </div>
      ))}
    </div>
  );
}

export default StudentList;
