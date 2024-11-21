import React, { useState } from "react";

const SubContact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");

    const existingMessages = JSON.parse(localStorage.getItem("messages")) || [];
    localStorage.setItem(
      "messages",
      JSON.stringify([...existingMessages, formData])
    );

    setFormData({ name: "", email: "", message: "" });

    alert("Your message has been sent!");
  };

  return (
    <section id="contact_Mini">
      <div className="super_container">
        <div className="container_1">
          <h3>Let's connect</h3>
          <div>
            <p>Phone</p>
            <span>+919999999999</span>
          </div>
          <div>
            <p>Email</p>
            <span>omprakashnehra078@gmail.com</span>
          </div>
          <div>
            <p>Address</p>
            <span>House No.xxxx Sector xxx</span>
          </div>
        </div>

        <div className="container_2">
          <h3>We'd love to hear from you</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </div>
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message..."
              required
            />
            {error && <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>}
            <button type="submit">SEND</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubContact;
