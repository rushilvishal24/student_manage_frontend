function MarksTable({ marks }) {
  return (
    <div className="table-responsive">
      <table className="table table-bordered table-striped align-middle">
        <thead className="table-dark">
          <tr>
            <th>Student</th>
            <th>Subject</th>
            <th>Exam</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {marks.map((record) => (
            <tr key={record._id}>
              <td>{record.student?.name || 'Unknown Student'}</td>
              <td>{record.subject?.name || 'Unknown Subject'}</td>
              <td>{record.examType}</td>
              <td>{record.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MarksTable;
