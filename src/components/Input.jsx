import '../styles/Input.css';

function Input({ label, type, name, value, onChange }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default Input;
