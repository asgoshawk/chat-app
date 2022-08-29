import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../features/auth/authSlice";
import { toast } from "react-toastify";

import { FormContainer } from "../components/styles/Container.styled";
import { StyledForm } from "../components/styles/Form.styled";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, isSuccess, errorMessage } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(errorMessage);
    }

    if (isSuccess || user) {
      toast.success("Login successfully.");
      navigate("/");
    }

    dispatch(reset());
  }, [isError, isSuccess, user, errorMessage, navigate, dispatch]);

  if (isLoading) {
  }

  const onMutate = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitRegister = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
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
