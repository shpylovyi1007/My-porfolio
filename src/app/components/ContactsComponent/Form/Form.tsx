"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./Form.module.scss";

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const SignupForm = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "" }}
      validationSchema={SignupSchema}
      onSubmit={async (values, { resetForm }) => {
        try {
          console.log(values);
          resetForm();

          alert("Form submitted successfully!");
        } catch (error) {
          console.error("Error submitting form:", error);
          alert("Error submitting form. Please try again.");
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className={css.container}>
          <h1 className={css.title}>Send your message</h1>
          <div>
            <label htmlFor="name">Name</label>
            <Field className={css.input} name="name" />
            <ErrorMessage name="name" component="span" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field className={css.input} name="email" type="email" />
            <ErrorMessage name="email" component="span" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
