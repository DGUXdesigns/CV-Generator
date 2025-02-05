import AddButton from './Buttons/AddButton';
import ExperienceForm from './ExperienceForm';
import '../styles/EmploymentForm.css';

function EmploymentForm({ data, setData }) {
  function handleAddExperience() {
    setData((prev) => ({
      ...prev,
      employment: [
        ...prev.employment,
        {
          id: crypto.randomUUID(),
          employer: '',
          city: '',
          jobTitle: '',
          startDate: '',
          endDate: '',
          description: '',
        },
      ],
    }));
  }

  function handleExperienceChange(id, field, value) {
    setData((prev) => {
      const updatedExp = prev.employment.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp,
      );
      return { ...prev, employment: updatedExp };
    });
  }

  function handleDeleteExperience(id) {
    setData((prev) => ({
      ...prev,
      employment: prev.employment.filter((exp) => exp.id !== id),
    }));
  }

  return (
    <section className="experience-section">
      <h2>Employment History</h2>
      <p>
        Show your relevant experience. Use bullet points to note your
        achievements. if possible - use numbers/facts (achieved X, measured by
        Y, by doing Z)
      </p>

      {data.employment.map((exp) => (
        <ExperienceForm
          key={exp.id}
          experience={exp}
          onChange={handleExperienceChange}
          onDelete={handleDeleteExperience}
        />
      ))}

      <AddButton label={'Add employment'} onClick={handleAddExperience} />
    </section>
  );
}

export default EmploymentForm;
