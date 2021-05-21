import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, useField } from "formik";
import { connect } from "react-redux";
import * as Yup from "yup";
import classNames from "classnames";
import { loginOperations } from "../redux/auth/authOperations";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email must be @email!")
    .required("Field is Required!"),
  password: Yup.string().required("Field is Required"),
});

export const TextInput = (props) => {
  const [field, meta] = useField(props);
  return (
    <>
      <input
        className={classNames(
          "w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",
          {
            "border-red-500": meta.error && meta.touched,
          }
        )}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <p className="text-xs italic text-red-500">{meta.error}</p>
      ) : null}
    </>
  );
};

const LoginPage = ({ loginOperations }) => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center px-6 my-12">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
          <div
            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
            style={{
              backgroundImage: `url("https://source.unsplash.com/K4mSJ7kc0As/600x800")`,
            }}
          />
          <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
            <h3 className="pt-4 text-2xl text-center">Welcome Back!</h3>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={validationSchema}
              onSubmit={loginOperations}
            >
              <Form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <TextInput
                    name="email"
                    id="username"
                    type="text"
                    placeholder="Username"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <TextInput
                    name="password"
                    id="password"
                    type="password"
                    placeholder="******************"
                  />
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Sign In
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <Link
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    to="/register"
                  >
                    Create an Account!
                  </Link>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatch = {
  loginOperations,
};

export default connect(null, mapDispatch)(LoginPage);