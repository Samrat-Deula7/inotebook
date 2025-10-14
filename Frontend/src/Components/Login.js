import { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const preventDefault = (e) => {
    e.preventDefault();
  };

  const createUser = async () => {
    // API Call
    const url = "http://localhost:5000/api/auth/login";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });
      const result = await response.json();
      console.log(result);
      if (result.Success) {
        // Save the auth token and redirect
        localStorage.setItem('token',result.authtoken);
        navigate("/");

      } else {
        throw new Error(`Response status: ${response.status}`);

      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="container">
      <form onSubmit={preventDefault}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            onChange={onChange}
            value={credentials.email}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={onChange}
            value={credentials.password}
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={createUser}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
