function AttendanceTable({ attendance }) {
  return (
    <div className="table-responsive">
      <table className="table table-bordered table-striped align-middle">
        <thead className="table-dark">
          <tr>
            <th>Student</th>
            <th>Subject</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((record) => (
            <tr key={record._id}>
              <td>{record.student?.name || 'Unknown Student'}</td>
              <td>{record.subject?.name || 'Unknown Subject'}</td>
              <td>{new Date(record.date).toLocaleDateString()}</td>
              <td>
                <span className={`badge ${record.status === 'Present' ? 'bg-success' : 'bg-danger'}`}>
                  {record.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AttendanceTable;
