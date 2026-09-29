import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Timetable() {
  const timetable = [
    { day: 'Monday', time: '09:00 AM', subject: 'Electrical Machines', room: 'A-101' },
    { day: 'Monday', time: '11:00 AM', subject: 'Power Transmission and Distribution', room: 'A-205' },
    { day: 'Monday', time: '02:00 PM', subject: 'Power Electronics', room: 'A-303' },

    { day: 'Tuesday', time: '09:00 AM', subject: 'Microcontrollers Programming and Interfacing', room: 'Lab-2' },
    { day: 'Tuesday', time: '11:00 AM', subject: 'Electric Mobility Technology', room: 'A-102' },
    { day: 'Tuesday', time: '01:30 PM', subject: 'Electrical Machines', room: 'A-101' },

    { day: 'Wednesday', time: '09:00 AM', subject: 'Power Electronics', room: 'A-303' },
    { day: 'Wednesday', time: '11:00 AM', subject: 'Microcontrollers Programming and Interfacing', room: 'Lab-2' },
    { day: 'Wednesday', time: '02:00 PM', subject: 'Power Transmission and Distribution', room: 'A-205' },

    { day: 'Thursday', time: '09:00 AM', subject: 'Electric Mobility Technology', room: 'A-102' },
    { day: 'Thursday', time: '11:00 AM', subject: 'Electrical Machines', room: 'A-101' },
    { day: 'Thursday', time: '02:00 PM', subject: 'Power Transmission and Distribution', room: 'A-205' },

    { day: 'Friday', time: '09:00 AM', subject: 'Power Electronics', room: 'A-303' },
    { day: 'Friday', time: '10:30 AM', subject: 'Microcontrollers Programming and Interfacing', room: 'Lab-2' },
    { day: 'Friday', time: '01:30 PM', subject: 'Electric Mobility Technology', room: 'A-102' }
  ];

  return (
    <>
      <Navbar />

      <main className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
          <h2 className="mb-0">Timetable</h2>
          <span className="badge bg-primary fs-6">EEE - Semester 5</span>
        </div>

        <div className="table-responsive shadow-sm rounded border">
          <table className="table table-bordered table-hover align-middle mb-0">
            <thead className="table-dark">
              <tr>
                <th>Day</th>
                <th>Time</th>
                <th>Subject</th>
                <th>Room</th>
              </tr>
            </thead>
            <tbody>
              {timetable.map((item, index) => (
                <tr key={`${item.day}-${item.time}-${index}`}>
                  <td>{item.day}</td>
                  <td>{item.time}</td>
                  <td>{item.subject}</td>
                  <td>{item.room}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Timetable;
