function Button({ label, type = 'button', variant = 'primary', onClick, className = '' }) {
  return (
    <button
      type={type}
      className={`btn btn-${variant} ${className}`.trim()}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
