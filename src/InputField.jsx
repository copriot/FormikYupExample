const InputField = ({ formik, label, name, type = "text" }) => {
  return (
    <div>
      <label className="form-label">{label}</label>
      <input
        name={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={`form-control ${
          formik.errors[name] && formik.touched[name] && "is-invalid"
        }`}
        type={type}
      />
      <label className="feedback">{formik.errors[name]}</label>
    </div>
  );
};

export default InputField;
