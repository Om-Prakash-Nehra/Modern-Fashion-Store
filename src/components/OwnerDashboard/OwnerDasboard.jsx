import React, { useState } from "react";

const OwnerDashboard = () => {
  const [messages, setMessages] = useState(JSON.parse(localStorage.getItem("messages")) || []);

  const clearMessages = () => {
    if (window.confirm("Are you sure you want to clear all messages?")) {
      localStorage.removeItem("messages");
      setMessages([]); 
      alert("All messages have been cleared!");
    }
  };

  return (
    <section id="owner-dashboard" style={styles.dashboard}>
      <h2 style={styles.header}>Owner Dashboard</h2>
      <h3 style={styles.subHeader}>Messages from Users:</h3>

      {messages.length === 0 ? (
        <p style={styles.noMessages}>No messages yet.</p>
      ) : (
        <div style={styles.messageContainer}>
          {messages.map((message, index) => (
            <div key={index} style={styles.messageCard}>
              <h4 style={styles.messageName}>{message.name}</h4>
              <p style={styles.messageEmail}>
                <strong>Email:</strong> {message.email}
              </p>
              <p style={styles.messageContent}>
                <strong>Message:</strong> {message.message}
              </p>
            </div>
          ))}
        </div>
      )}

      {messages.length > 0 && (
        <button onClick={clearMessages} style={styles.clearButton}>
          Clear Previous Data
        </button>
      )}
    </section>
  );
};

const styles = {
  dashboard: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    marginTop: "80px",
  },
  header: {
    textAlign: "center",
    fontSize: "28px",
    color: "#333",
  },
  subHeader: {
    textAlign: "center",
    fontSize: "22px",
    color: "#555",
    marginBottom: "20px",
  },
  noMessages: {
    textAlign: "center",
    fontSize: "18px",
    color: "#888",
  },
  messageContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    maxWidth: "600px",
    margin: "0 auto",
  },
  messageCard: {
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  messageName: {
    fontSize: "18px",
    color: "#333",
    marginBottom: "5px",
  },
  messageEmail: {
    fontSize: "16px",
    color: "#666",
    marginBottom: "5px",
  },
  messageContent: {
    fontSize: "16px",
    color: "#555",
  },
  clearButton: {
    display: "block",
    margin: "20px auto 0",
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#d9534f",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default OwnerDashboard;
