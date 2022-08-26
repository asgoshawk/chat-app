import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { FormContainer } from "../components/styles/Container.styled";
import { StyledForm } from "../components/styles/Form.styled";

const Register = () => {
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordCheck: "",
  });

  const { name, email, password, passwordCheck } = formData;

  const onMutate = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

    if (formData.password && formData.password !== formData.passwordCheck) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }
  };

  const submitRegister = (e) => {
    e.preventDefault();
  };

  return (
    <FormContainer>
      <StyledForm>
        <form onSubmit={submitRegister}>
          <h3>Create New Account</h3>
          <div className="input-bundle">
            <label>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={onMutate}
              value={email}
            />
          </div>
          <div className="input-bundle">
            <label>Username</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={onMutate}
              value={name}
            />
          </div>
          <div className="input-bundle">
            <label>Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={onMutate}
              value={password}
            />
          </div>
          <div className="input-bundle">
            <label>Confirm Password</label>
            <input
              type="password"
              name="passwordCheck"
              id="passwordCheck"
              onChange={onMutate}
              value={passwordCheck}
            />
          </div>
          <div className="input-bundle">
            <button>Continue</button>
          </div>
          <Link to="/login">Already have an account?</Link>
        </form>
      </StyledForm>
    </FormContainer>
  );
};

export default Register;
