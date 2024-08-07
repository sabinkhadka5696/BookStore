import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaViber, FaWhatsapp } from "react-icons/fa";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { TextField } from "@mui/material";
import { Textarea } from "@material-tailwind/react";

function ContactForm() {
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
    <div className="container mx-auto bg-white h-auto w-full p-4">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-[40%] lg:pr-8">
          <h1 className="text-[2rem] text-blue-900 font-bold font-head">
            Message Us
          </h1>
          <p className="pt-8 font-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quis
            sint sequi, aperiam incidunt unde
            <br /> quisquam architecto quasi atque recusandae nemo cupiditate
            qui ratione eos id illum cum nobis perspiciatis.
          </p>
          <div className="flex items-center gap-4 text-[2rem] pt-8">
            <Link to="/">
              <img
                className="pt-8 border-r-4 border-gray-300 px-4"
                src="/assets/logo.jpg"
                alt="Logo"
              />
            </Link>

            <div className="bg-white hover:bg-black hover:text-white px-2">
              <Link to="https://www.facebook.com/login">
                <FaFacebook />
              </Link>
            </div>
            <div className="bg-white hover:bg-black hover:text-white px-2">
              <Link to="https://www.instagram.com/accounts/login/">
                <FaInstagram />
              </Link>
            </div>
            <div className="bg-white hover:bg-black hover:text-white px-2">
              <Link to="https://account.viber.com/en/login/">
                <FaViber />
              </Link>
            </div>
            <div className="bg-white hover:bg-black hover:text-white px-2">
              <Link to="https://whatsapp.com/">
                <FaWhatsapp />
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 mt-8 lg:mt-0 w-full lg:w-[60%] rounded-xl p-6">
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
                <div className="mt-4">
                  <Textarea
                    name="comments"
                    aria-label="minimum height"
                    minRows={3}
                    placeholder="Comments..."
                    onChange={handleChange}
                    error={touched.comments && Boolean(errors.comments)}
                    className="w-full"
                  />
                </div>
                <div className="mt-4 text-right">
                  <button
                    className="bg-yellow-900 py-1 px-4 text-white rounded"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
