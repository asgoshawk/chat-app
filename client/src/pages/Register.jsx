import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import { FormContainer } from "../components/styles/Container.styled";
import { StyledForm } from "../components/styles/Form.styled";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordCheck: "",
  });

  const { name, email, password, passwordCheck } = formData;

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
    const { password, passwordCheck } = formData;
    if (password !== passwordCheck) {
      toast.error("Password does not match!");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
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
              required
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
              required
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
              required
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
              required
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
