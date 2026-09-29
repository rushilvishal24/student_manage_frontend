function Loading() {
  return (
    <div className="container py-5 text-center">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="mt-3 mb-0">Loading data...</p>
    </div>
  );
}

export default Loading;
