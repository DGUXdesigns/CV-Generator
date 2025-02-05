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

  function handleExperienceChange(index, field, value) {
    setData((prev) => {
      const updatedExp = [...prev.employment];
      updatedExp[index] = {
        ...updatedExp[index],
        [field]: value,
      };
      return { ...prev, employment: updatedExp };
    });
  }

  return (
    <section className="experience-section">
      <h2>Employment History</h2>
      <p>
        Show your relevant experience. Use bullet points to note your
        achievements. if possible - use numbers/facts (achieved X, measured by
        Y, by doing Z)
      </p>

      {data.employment.map((exp, index) => (
        <ExperienceForm
          key={index}
          index={index}
          experience={exp}
          onChange={handleExperienceChange}
        />
      ))}

      <AddButton label={'Add employment'} onClick={handleAddExperience} />
    </section>
  );
}

export default EmploymentForm;
