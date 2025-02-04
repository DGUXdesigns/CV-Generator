import { useRef, useEffect } from 'react';
import '../styles/SummaryForm.css';

function Summary({ data, handleChange }) {
  const textareaRef = useRef(null);

  // Auto-resize logic
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [data.summary]);

  return (
    <div className="summary">
      <h2>Professional Summary</h2>
      <p>
        Write 2-4 short sentences about how great you are. Mention the role and
        what you did. What were the big achievements? describe your motivation
        and list your skills.
      </p>

      <label htmlFor="summary"></label>
      <textarea
        ref={textareaRef}
        name="summary"
        id="summary"
        value={data.summary}
        onChange={handleChange}
      />
    </div>
  );
}

export default Summary;
