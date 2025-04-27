import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth"; //
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { auth } from "../firebase";
import Forget from "./Forget";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = formData;
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      localStorage.setItem("userCheck", "loggedIn");
      navigate("/"); // or wherever you want
      window.location.reload();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Login</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    required
                  />
                </Form.Group>
                <div className="Forget">
                  <Link
                    to="/Forget"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </Link>
                </div>

                <Button variant="primary" type="submit" className="w-100">
                  Login
                </Button>
                <p className="text-center mb-0">
                  Don't have an account? <Link to="/Signup">Sign Up</Link>
                </p>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
