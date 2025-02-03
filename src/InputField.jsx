const InputField = ({ formik, label, name, type = "text" }) => {
  return (
    <div>
      <label className="form-label">{label}</label>
      <input
        name={name}
        onChange={formik.handleChange}
        className={`form-control ${formik.errors[name] && "is-invalid"}`}
        type={type}
      />
      <label className="feedback">{formik.errors[name]}</label>
    </div>
  );
};

export default InputField;
