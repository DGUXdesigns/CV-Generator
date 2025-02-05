import { useState, useEffect } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import Input from './Input';
import '../styles/ExperienceForm.css';

function ExperienceForm({ experience, index, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  function handleChange(e) {
    onChange(index, e.target.name, e.target.value);
  }

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    } else {
      setTimeout(() => setShouldRender(false), 550); // Wait for close animation to finish
    }
  }, [isOpen]);

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="acc-label">
          <h3>{experience.employer || 'New Experience'}</h3>
          <p>{experience.jobTitle || '(Not specified)'}</p>
        </div>
        <span className={`chevron ${isOpen ? 'open' : ''}`}>
          <FiChevronDown />
        </span>
      </div>

      {shouldRender && (
        <div className={`accordion-content ${isOpen ? 'open' : 'closing'}`}>
          <Input
            label={'Employer'}
            type={'text'}
            name={'employer'}
            value={experience.employer}
            onChange={handleChange}
          />

          <div className="form-control">
            <Input
              label={'Job Title'}
              type={'text'}
              name={'jobTitle'}
              value={experience.jobTitle}
              onChange={handleChange}
            />
            <Input
              label={'City'}
              type={'text'}
              name={'city'}
              value={experience.city}
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <Input
              label={'Start Date'}
              type={'month'}
              name={'startDate'}
              value={experience.startDate}
              onChange={handleChange}
            />
            <Input
              label={'End Date'}
              type={'month'}
              name={'endDate'}
              value={experience.endDate}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={experience.description}
              onChange={handleChange}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ExperienceForm;
