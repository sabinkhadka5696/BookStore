import { Textarea } from "@material-tailwind/react";
import { TextField } from "@mui/material";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import * as Yup from "yup";

function ModalLayout({ toggleOpen }) {
  console.log(toggleOpen);
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    comments: Yup.string().required("Required"),
  });
  return (
    <>
      <div className=" flex items-end justify-end relative bottom-5">
        <IoMdClose
          onClick={toggleOpen}
          className="hover:bg-gray-300 rounded-lg"
        />
      </div>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          comments: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched, handleChange }) => (
          <Form>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <TextField
                size="small"
                helperText={
                  touched.firstName && errors.firstName
                    ? errors.firstName
                    : "Please enter your first name"
                }
                label="First Name"
                name="firstName"
                onChange={handleChange}
                fullWidth
                variant="outlined"
                error={touched.firstName && Boolean(errors.firstName)}
              />
              <TextField
                size="small"
                helperText={
                  touched.lastName && errors.lastName
                    ? errors.lastName
                    : "Please enter your last name"
                }
                label="Last Name"
                name="lastName"
                onChange={handleChange}
                fullWidth
                variant="outlined"
                error={touched.lastName && Boolean(errors.lastName)}
              />
            </div>

            <div className="mt-4">
              <TextField
                size="small"
                helperText={
                  touched.email && errors.email
                    ? errors.email
                    : "Please enter your email address"
                }
                label="Email"
                name="email"
                onChange={handleChange}
                fullWidth
                variant="outlined"
                error={touched.email && Boolean(errors.email)}
              />
            </div>
            <div className="mt-4 ">
              <label htmlFor="number"></label>
              <input
                type="number"
                className="border-2 border-gray-400 px-9 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Quantity"
              ></input>
            </div>
            <div className="max-w-md mx-auto">
              <div className="mt-5">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="mt-4 flex justify-evenly">
              <button
                className="bg-yellow-900 py-1 px-4 text-white rounded"
                type="submit"
              >
                Order now
              </button>
              <button
              onClick={toggleOpen}
                className="bg-gray-500 hover:bg-gray-700 py-1 px-4 text-white rounded"
              >
               Cancel
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default ModalLayout;
