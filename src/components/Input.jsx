import '../styles/Input.css';

function Input({ label, type, name, value, onChange, id }) {
  return (
    <div className="input-control">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        autoComplete="off"
      />
    </div>
  );
}

export default Input;
