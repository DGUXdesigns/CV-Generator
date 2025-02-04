import Input from './Input';

function PersonalForm({ data, handleChange }) {
  return (
    <div className="personal-form">
      <div className="form-control">
        <Input
          label={'First Name'}
          type={'text'}
          name={'firstName'}
          value={data.firstName}
          onChange={handleChange}
        />

        <Input
          label={'Last Name'}
          type={'text'}
          name={'lastName'}
          value={data.lastName}
          onChange={handleChange}
        />
      </div>

      <div className="form-control">
        <Input
          label={'Email'}
          type={'text'}
          name={'email'}
          value={data.email}
          onChange={handleChange}
        />

        <Input
          label={'Phone Number'}
          type={'tel'}
          name={'phone'}
          value={data.phone}
          onChange={handleChange}
        />
      </div>

      <div className="form-control">
        <Input
          label={'Country'}
          type={'text'}
          name={'country'}
          value={data.country}
          onChange={handleChange}
        />

        <Input
          label={'City'}
          type={'text'}
          name={'city'}
          value={data.city}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default PersonalForm;
