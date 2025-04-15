import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Signup() {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: ''
  // });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement signup logic
    console.log("Signup:", formData);
  };
  const handleSignup = async (e) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful!");
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4">Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  // value={formData.name}
                  // onChange={(e) =>
                  //   setFormData({ ...formData, name: e.target.value })
                  // }
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  // value={formData.email}
                  // onChange={(e) =>
                  //   setFormData({ ...formData, email: e.target.value })
                  // }

                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  // value={formData.password}
                  // onChange={(e) =>
                  //   setFormData({ ...formData, password: e.target.value })
                  // }
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  // value={formData.confirmPassword}
                  // onChange={(e) =>
                  //   setFormData({
                  //     ...formData,
                  //     confirmPassword: e.target.value,
                  //   })
                  //}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100"
                onClick={handleSignup}
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
