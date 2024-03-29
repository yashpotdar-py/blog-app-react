import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo/Logo";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFaliure,
} from "../redux/user/userSlice.js";
import OAuth from "../components/OAuth/OAuth.jsx";

export default function SignIn() {
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value.trim(),
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFaliure("Please fill out all the fields."));
    }
    try {
      dispatch(signInStart());

      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFaliure(data.message));
      }
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFaliure(error.message));
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-10">
        {/* Left Side */}
        <div className="flex-1">
          <Logo />
          <p className="text-sm mt-5">
            This a demo project. You can sign in with your email and password or
            with Gmail.
          </p>
        </div>
        {/* Right Side */}
        <div className="flex-1">
          <form
            method="post"
            className="flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            {/* <div>
              <Label value="Enter Username" />
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                onChange={handleChange}
              />
            </div> */}
            <div>
              <Label value="Enter Email" />
              <TextInput
                type="email"
                placeholder="youremail@example.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Enter Password" />
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                hidden
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone={"purpleToBlue"}
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size={"sm"} />
                  <span className="pl-3">Loading</span>
                </>
              ) : (
                "Sign In"
              )}
            </Button>
            <OAuth />
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Don't have an Account?</span>
            <Link to={"/sign-up"} className="text-blue-500">
              Sign Up
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color={"failure"}>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
