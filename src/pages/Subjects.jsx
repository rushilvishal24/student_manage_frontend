import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import api from '../services/api';

function Subjects() {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await api.get('/subjects');
        setSubjects(response.data.subjects || []);
      } catch (error) {
        console.error('Failed to load subjects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubjects();
  }, []);

  return (
    <>
      <Navbar />

      <main className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
          <h2>Subjects</h2>
        </div>

        {loading ? (
          <div className="text-center py-5">Loading subjects...</div>
        ) : subjects.length === 0 ? (
          <div className="alert alert-info">No subjects are available yet.</div>
        ) : (
          <div className="row g-4">
            {subjects.map((subject) => (
              <div className="col-md-6 col-lg-4" key={subject._id || subject.code}>
                <div className="card shadow-sm border-0 h-100">
                  <div className="card-body">
                    <span className="badge bg-primary mb-2">{subject.code || 'SUB'}</span>
                    <h5>{subject.name}</h5>
                    <p className="mb-1"><strong>Department:</strong> {subject.department}</p>
                    <p className="mb-1"><strong>Semester:</strong> {subject.semester}</p>
                    <p className="mb-1"><strong>Credits:</strong> {subject.credits}</p>
                    <p className="mb-0"><strong>Faculty:</strong> {subject.faculty?.name || 'Not assigned'}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}

export default Subjects;
