import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { FormContainer } from "../components/styles/Container.styled";
import { StyledForm } from "../components/styles/Form.styled";

const Login = () => {
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

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
          <div className="input-bundle">
            <h3>Welcom Back!</h3>
            <p>Glad to meet you again!</p>
          </div>
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
            <button>Login</button>
          </div>
          <div className="input-bundle">
            <span>Need an account? </span>
            <Link to="/register">Register</Link>
          </div>
        </form>
      </StyledForm>
    </FormContainer>
  );
};
export default Login;
