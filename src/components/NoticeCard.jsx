function NoticeCard({ notice }) {
  return (
    <div className="card shadow-sm border-0 h-100">
      <div className="card-body">
        <span className="badge bg-primary mb-2">{notice.date}</span>
        <h5>{notice.title}</h5>
        <p>{notice.message}</p>
      </div>
    </div>
  );
}

export default NoticeCard;
