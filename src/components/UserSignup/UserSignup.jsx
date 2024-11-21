import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserSignup = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    number: "",
    age: "",
    password: "", 
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isNaN(formData.age) || formData.age <= 0) {
      alert("Please enter a valid age.");
      return;
    }

    if (formData.number.length < 10) {
      alert("Please enter a valid phone number.");
      return;
    }

    
    const userData = {
      fullname: formData.fullname,
      email: formData.email,
      number: formData.number,
      age: formData.age,
      password: formData.password, 
    };

    localStorage.setItem("user", JSON.stringify(userData));

    alert("You have successfully created an account!");
    navigate('/user-login'); 
  };

  return (
    <section style={styles.container}>
      <h2 style={styles.header}>User Signup</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="fullname" style={styles.label}>Full Name:</label>
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="number" style={styles.label}>Phone Number:</label>
          <input
            type="tel"
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="age" style={styles.label}>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>Signup</button>
      </form>
      <div style={styles.loginLinkContainer}>
        <p style={styles.loginLinkText}>
          Already have an account?{" "}
          <button
            style={styles.loginLinkButton}
            onClick={() => navigate("/user-login")}
          >
            Login
          </button>
        </p>
      </div>
    </section>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
    padding: "20px",
  },
  header: {
    textAlign: "center",
    fontSize: "28px",
    color: "#333",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "100%",
    maxWidth: "400px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontSize: "14px",
    marginBottom: "8px",
    color: "#555",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    outline: "none",
    transition: "border-color 0.3s ease",
  },
  button: {
    padding: "12px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  loginLinkContainer: {
    marginTop: "15px",
    textAlign: "center",
  },
  loginLinkText: {
    fontSize: "14px",
    color: "#555",
  },
  loginLinkButton: {
    background: "none",
    color: "#007BFF",
    border: "none",
    fontSize: "14px",
    cursor: "pointer",
    textDecoration: "underline",
  },
};

export default UserSignup;
