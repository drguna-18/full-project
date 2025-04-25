import React, { useState } from 'react';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";

const Forget = () => {
  const [email, setEmail] = useState('');

  const handleReset = async () => {
    if (!email) {
      alert("Please enter your email.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent! Check your inbox.");
    } catch (error) {
      console.error("Error sending reset email:", error.message);
      alert("Failed to send reset email. Please try again.");
    }
  };

  return (
    <div>
      <h1>Forgot Password</h1>
      <div>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <button type="button" onClick={handleReset}>
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default Forget;

