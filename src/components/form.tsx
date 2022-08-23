import React from "react";
import Form from "rc-field-form";

export default (props) => {
  const { onFinish, children } = props;
  console.log("🚀 --> file: form.tsx --> line 6 --> children", children);
  return (
    <Form style={{ padding: 16 }} onFinish={onFinish}>
      {(values, form) => {
        const usernameError = form.getFieldError("username");

        console.log("usernameError", usernameError);

        const passwordError = form.getFieldError("password");
        const password2Error = form.getFieldError("password2");
        const errors = form.getFieldsError();

        // console.log("errors ", errors);
        // if (errors) {
        //   console.log("Render with Errors:", values, form.getFieldsError());
        // }

        // return React.cloneElement(children, {
        //   form,
        //   usernameError,
        //   passwordError,
        // });
        return (
          <React.Fragment>
            {children.map((child, index) => {
              return React.cloneElement(child, {
                key: index,
                form,
                usernameError,
                passwordError,
              });
            })}
          </React.Fragment>
        );
      }}
      {/* {children} */}
    </Form>
  );
};
