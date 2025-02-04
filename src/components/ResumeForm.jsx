import PersonalForm from './PersonalForm';
import Summary from './SummaryForm';

function ResumeForm({ data, handleChange }) {
  return (
    <div className="resume-form">
      <PersonalForm data={data} handleChange={handleChange} />
      <Summary data={data} handleChange={handleChange} />
    </div>
  );
}

export default ResumeForm;
