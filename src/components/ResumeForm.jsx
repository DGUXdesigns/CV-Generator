import PersonalForm from './PersonalForm';
import Summary from './SummaryForm';
import EmploymentForm from './EmploymentForm';
import Education from './Education';

function ResumeForm({ data, handleChange, setData }) {
  return (
    <div className="resume-form">
      <PersonalForm data={data} handleChange={handleChange} />
      <Summary data={data} handleChange={handleChange} />
      <EmploymentForm data={data} setData={setData} />
      <Education data={data} setData={setData} />
    </div>
  );
}

export default ResumeForm;
