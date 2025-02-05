import Input from './Input';
import '../styles/PersonalForm.css';

function PersonalForm({ data, handleChange }) {
  return (
    <div className="personal-form">
      <h2>Personal Details</h2>
      <div className="form-control">
        <Input
          label={'First Name'}
          type={'text'}
          name={'firstName'}
          value={data.firstName}
          onChange={handleChange}
          id={'firstName'}
        />

        <Input
          label={'Last Name'}
          type={'text'}
          name={'lastName'}
          value={data.lastName}
          onChange={handleChange}
          id={'lastName'}
        />
      </div>

      <div className="form-control">
        <Input
          label={'Email'}
          type={'text'}
          name={'email'}
          value={data.email}
          onChange={handleChange}
          id={'email'}
        />

        <Input
          label={'Phone Number'}
          type={'tel'}
          name={'phone'}
          value={data.phone}
          onChange={handleChange}
          id={'phone'}
        />
      </div>

      <div className="form-control">
        <Input
          label={'Country'}
          type={'text'}
          name={'country'}
          value={data.country}
          onChange={handleChange}
          id={'country'}
        />

        <Input
          label={'City'}
          type={'text'}
          name={'city'}
          value={data.city}
          onChange={handleChange}
          id={'city'}
        />
      </div>
    </div>
  );
}

export default PersonalForm;
