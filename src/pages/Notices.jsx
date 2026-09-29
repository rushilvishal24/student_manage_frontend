import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Notices() {
  const notices = [
    { title: 'Exam Schedule Released', date: '2026-09-12', text: 'Semester exam timetable is available for all departments.' },
    { title: 'Scholarship Application', date: '2026-09-10', text: 'Students can apply for the government scholarship before the deadline.' },
    { title: 'Workshop Registration', date: '2026-09-08', text: 'A career-focused workshop will be conducted next week.' },
    { title: 'Tutor Ward Meeting', date: '2026-09-15', text: 'All students are informed to attend the tutor ward meeting on 15th September at 2:00 PM in the seminar hall.' }
  ];

  return (
    <>
      <Navbar />

      <main className="container py-5">
        <h2 className="mb-4">Notices</h2>

        <div className="row g-4">
          {notices.map((notice, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body">
                  <span className="badge bg-primary mb-2">{notice.date}</span>
                  <h5>{notice.title}</h5>
                  <p>{notice.text}</p>
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

export default Notices;
