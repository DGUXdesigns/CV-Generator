import AddButton from './Buttons/AddButton';
import EducationForm from './EducationForm';
import '../styles/Education.css';

function Education({ data, setData }) {
  function handleAddEducation() {
    setData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          id: crypto.randomUUID(),
          school: '',
          city: '',
          degree: '',
          startDate: '',
          endDate: '',
          description: '',
        },
      ],
    }));
  }

  function handleEducationChange(id, field, value) {
    setData((prev) => {
      const updatedExp = prev.education.map((education) =>
        education.id === id ? { ...education, [field]: value } : education,
      );
      return { ...prev, education: updatedExp };
    });
  }

  function handleDeleteEducation(id) {
    setData((prev) => ({
      ...prev,
      education: prev.education.filter((education) => education.id !== id),
    }));
  }

  return (
    <section className="education-section">
      <h2>Education</h2>
      <p>
        A varied education on your resume sums up the value that your learnings
        and background will bring to the job
      </p>

      {data.education.map((education) => (
        <EducationForm
          key={education.id}
          education={education}
          onChange={handleEducationChange}
          onDelete={handleDeleteEducation}
        />
      ))}

      <AddButton label={'Add education'} onClick={handleAddEducation} />
    </section>
  );
}

export default Education;
