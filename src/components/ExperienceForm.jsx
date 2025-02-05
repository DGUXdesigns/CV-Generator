import { useState, useEffect } from 'react';
import { FiChevronDown, FiTrash2 } from 'react-icons/fi';
import Input from './Input';
import '../styles/ExperienceForm.css';

function ExperienceForm({ experience, onChange, onDelete }) {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  function handleChange(e) {
    onChange(experience.id, e.target.name, e.target.value);
  }

  function handleDelete(e) {
    e.stopPropagation();
    onDelete(experience.id);
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

        <div className="header-actions">
          <button
            className="delete-btn"
            onClick={handleDelete}
            aria-label="Delete experience"
          >
            <FiTrash2 />
          </button>
          <span className={`chevron ${isOpen ? 'open' : ''}`}>
            <FiChevronDown />
          </span>
        </div>
      </div>

      {shouldRender && (
        <div className={`accordion-content ${isOpen ? 'open' : 'closing'}`}>
          <Input
            label={'Employer'}
            type={'text'}
            name={'employer'}
            value={experience.employer}
            onChange={handleChange}
            id={'employer' + experience.id}
          />

          <div className="form-control">
            <Input
              label={'Job Title'}
              type={'text'}
              name={'jobTitle'}
              value={experience.jobTitle}
              onChange={handleChange}
              id={'jobTitle' + experience.id}
            />
            <Input
              label={'City'}
              type={'text'}
              name={'city'}
              value={experience.city}
              onChange={handleChange}
              id={'city' + experience.id}
            />
          </div>

          <div className="form-control">
            <Input
              label={'Start Date'}
              type={'month'}
              name={'startDate'}
              value={experience.startDate}
              onChange={handleChange}
              id={'startDate' + experience.id}
            />
            <Input
              label={'End Date'}
              type={'month'}
              name={'endDate'}
              value={experience.endDate}
              onChange={handleChange}
              id={'endDate' + experience.id}
            />
          </div>

          <div className="form-group">
            <label htmlFor={'description' + experience.id}>Description</label>
            <textarea
              name="description"
              value={experience.description}
              onChange={handleChange}
              id={'description' + experience.id}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ExperienceForm;
