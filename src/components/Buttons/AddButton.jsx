import '../../styles/Buttons.css';

function AddButton({ label, onClick }) {
  return (
    <button type="button" className="add-btn" onClick={onClick}>
      {label}
    </button>
  );
}

export default AddButton;
