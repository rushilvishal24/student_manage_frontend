import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import api from '../services/api';

function Marks() {
  const [students, setStudents] = useState([]);
  const [subjectNames, setSubjectNames] = useState([]);
  const [marksMap, setMarksMap] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [studentsResponse, subjectsResponse, marksResponse] = await Promise.all([
          api.get('/students'),
          api.get('/subjects'),
          api.get('/marks')
        ]);

        const studentList = studentsResponse.data.students || [];
        const subjectList = subjectsResponse.data.subjects || [];
        const marksList = marksResponse.data.marks || [];
        const map = {};

        for (const record of marksList) {
          const studentId = record.student?._id || record.student;
          const subjectName = record.subject?.name || 'Unknown';

          if (!map[studentId]) {
            map[studentId] = {};
          }

          map[studentId][subjectName] = record.marks;
        }

        const names = subjectList
          .map((subject) => subject.name)
          .filter(Boolean);

        setStudents([...studentList].sort((a, b) => a.name.localeCompare(b.name)));
        setSubjectNames([...new Set(names)]);
        setMarksMap(map);
      } catch (error) {
        console.error('Failed to load marks data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />

      <main className="container py-5">
        <h2 className="mb-4">Subject-wise Marks</h2>

        {loading ? (
          <div className="text-center py-5">Loading marks...</div>
        ) : subjectNames.length === 0 ? (
          <div className="alert alert-info">No subjects available to display marks.</div>
        ) : (
          <div className="table-responsive">
            <table className="table table-bordered table-striped align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Student Name</th>
                  {subjectNames.map((subject) => (
                    <th key={subject}>{subject.length > 22 ? `${subject.slice(0, 22)}...` : subject}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student._id}>
                    <td>{student.name}</td>
                    {subjectNames.map((subject) => {
                      const value = marksMap[student._id]?.[subject] ?? '—';
                      return <td key={`${student._id}-${subject}`}>{value}</td>;
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}

export default Marks;
