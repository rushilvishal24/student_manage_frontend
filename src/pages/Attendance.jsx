import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import api from '../services/api';

function Attendance() {
  const [students, setStudents] = useState([]);
  const [attendanceMap, setAttendanceMap] = useState({});
  const [loading, setLoading] = useState(true);

  const subjectNames = [
    'Power Transmission and Distribution',
    'Microcontrollers Programming and Interfacing',
    'Power Electronics',
    'Electric Mobility Technology',
    'Electrical Machines'
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [studentsResponse, attendanceResponse] = await Promise.all([
          api.get('/students'),
          api.get('/attendance')
        ]);

        const studentList = studentsResponse.data.students || [];
        const attendanceList = attendanceResponse.data.attendance || [];

        const map = {};

        for (const record of attendanceList) {
          const studentId = record.student?._id || record.student;
          const subjectName = record.subject?.name || 'Unknown';

          if (!map[studentId]) {
            map[studentId] = {};
          }

          const total = (map[studentId][subjectName]?.total || 0) + 1;
          const attended = (map[studentId][subjectName]?.attended || 0) + (record.status === 'Present' ? 1 : 0);

          map[studentId][subjectName] = {
            attended,
            total,
            percent: total ? Math.round((attended / total) * 100) : 0
          };
        }

        const sortedStudents = [...studentList].slice(0, 20).sort((a, b) => {
          const aAvg = subjectNames.reduce((sum, subject) => {
            const value = map[a._id]?.[subject]?.percent || 0;
            return sum + value;
          }, 0) / subjectNames.length;

          const bAvg = subjectNames.reduce((sum, subject) => {
            const value = map[b._id]?.[subject]?.percent || 0;
            return sum + value;
          }, 0) / subjectNames.length;

          return bAvg - aAvg;
        });

        setStudents(sortedStudents);
        setAttendanceMap(map);
      } catch (error) {
        console.error('Failed to load attendance data:', error);
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
        <h2 className="mb-4">Subject-wise Attendance</h2>

        {loading ? (
          <div className="text-center py-5">Loading attendance...</div>
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
                      const data = attendanceMap[student._id]?.[subject] || { attended: 0, total: 0, percent: 0 };
                      return (
                        <td key={`${student._id}-${subject}`}>
                          {data.attended}/{data.total}<br />
                          <small>{data.percent}%</small>
                        </td>
                      );
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

export default Attendance;
