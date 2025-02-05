import { useState, useEffect } from 'react';
import { FiChevronDown, FiTrash2 } from 'react-icons/fi';
import Input from './Input';

function EducationForm({ education, onChange, onDelete }) {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  function handleChange(e) {
    onChange(education.id, e.target.name, e.target.value);
  }

  function handleDelete(e) {
    e.stopPropagation();
    onDelete(education.id);
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
          <h3>{education.school || 'New Education'}</h3>
          <p>{education.degree || '(Not specified)'}</p>
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
            label={'School'}
            type={'text'}
            name={'school'}
            value={education.school}
            onChange={handleChange}
            id={'school' + education.school}
          />

          <div className="form-control">
            <Input
              label={'city'}
              type={'text'}
              name={'city'}
              value={education.city}
              onChange={handleChange}
              id={'city' + education.id}
            />
            <Input
              label={'Degree'}
              type={'text'}
              name={'degree'}
              value={education.degree}
              onChange={handleChange}
              id={'degree' + education.id}
            />
          </div>

          <div className="form-control">
            <Input
              label={'Start Date'}
              type={'month'}
              name={'startDate'}
              value={education.startDate}
              onChange={handleChange}
              id={'startdate' + education.id}
            />
            <Input
              label={'End Date'}
              type={'month'}
              name={'endDate'}
              value={education.endDate}
              onChange={handleChange}
              id={'endDate' + education.id}
            />
          </div>

          <div className="form-group">
            <label htmlFor={'description' + education.id}>Description</label>
            <textarea
              name="description"
              value={education.description}
              onChange={handleChange}
              id={'description' + education.id}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default EducationForm;
