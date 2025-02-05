import { useState } from 'react';
import ResumeForm from './components/ResumeForm';

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
    education: [],
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
        <ResumeForm
          data={resumeData}
          handleChange={handleChange}
          setData={setResumeData}
        />
      </form>
      <main></main>
    </>
  );
}

export default App;
