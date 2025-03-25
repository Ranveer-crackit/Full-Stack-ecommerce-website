import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/signin.css";

const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.email === "user@example.com" && user.password === "password123") {
      alert("🎉 Welcome back!");
      navigate("/dashboard");
    } else {
      alert("❌ Invalid credentials. Try again!");
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2>Welcome Back!</h2>
        <p className="sub-text">Sign in to access your account 🚀</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="signin-btn">Sign In</button>
        </form>

        <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
