import React from "react";
import Form from "rc-field-form";

const { Field } = Form;

const Error = ({ children }) => (
  <ul style={{ color: "red" }}>
    {children.map((error, i) => (
      <li key={i}>{error}</li>
    ))}
  </ul>
);

const FieldState = ({ form, name }) => {
  const touched = form.isFieldTouched(name);
  const validating = form.isFieldValidating(name);

  return (
    <div
      style={{
        color: "green",
        position: "absolute",
        marginTop: -35,
        left: 200,
      }}
    >
      {touched ? <span>Touched!</span> : null}
      {validating ? <span>Validating!</span> : null}
    </div>
  );
};

export default (props) => {
  const { children, name, rules, form } = props;

  const selfError = form.getFieldError(name);

  return (
    <>
      <Field name={name} rules={rules}>
        {children}
      </Field>
      <FieldState form={form} name={name} />
      <Error>{selfError}</Error>
    </>
  );
};
