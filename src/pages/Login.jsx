import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/slices/userSlice";
import { useNavigate, useLocation } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(login("0x128352873"));

    const from = location.state?.from || "/";
    navigate(from);
  };

  return (
    <div className="container">
      <h1 className="page-title">Login</h1>
      <form className="max-w-md mx-auto" onSubmit={handleLogin}>
        <div className="mb-4">
          <label htmlFor="email" className="label-style">
            Email
          </label>
          <input
            className="input-style"
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="label-style" htmlFor="password">
            Password
          </label>
          <input
            className="input-style"
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="button-style" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;