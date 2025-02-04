import '../styles/Input.css';

function Input({ label, type, name, value, onChange }) {
  return (
    <div className="input-control">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        autoComplete="off"
      />
    </div>
  );
}

export default Input;
