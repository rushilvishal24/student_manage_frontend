function ErrorMessage({ message }) {
  return (
    <div className="alert alert-danger" role="alert">
      {message || 'Something went wrong.'}
    </div>
  );
}

export default ErrorMessage;
