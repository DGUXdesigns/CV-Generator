import ResumeForm from './components/ResumeForm';
import { useState } from 'react';

function App() {
  const [resumeData, setResumeData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    summary: '',
    employment: [],
  });

  function handleChange(e) {
    setResumeData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <>
      <form>
        <ResumeForm data={resumeData} handleChange={handleChange} />
      </form>
      <main></main>
    </>
  );
}

export default App;
