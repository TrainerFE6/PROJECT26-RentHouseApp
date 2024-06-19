import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  RegisterPageContainer,
  RegisterFormWrapper,
  RegisterForm,
  Title,
  FormGroup,
  Label,
  Input,
  Button,
  LoginLink,
} from "../styles/RegisterStyles";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/register", {
        username: username,
        email: email,
        password: password,
        confPassword: confPassword,
      });
      navigate("/login");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <RegisterPageContainer>
      <RegisterFormWrapper>
        <RegisterForm>
          <form onSubmit={handleSubmit}>
            <Title>Daftarkan Akunmu Sekarang!</Title>
            <p className="has-text-centered">{msg}</p>
            <FormGroup>
              <Label>Username</Label>
              <Input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Confirm Password</Label>
              <Input
                type="password"
                placeholder="Confirm password"
                value={confPassword}
                onChange={(e) => setConfPassword(e.target.value)}
                required
              />
            </FormGroup>
            <Button type="submit">Register</Button>
            <LoginLink>
              Sudah punya akun? <Link to="/login">Login</Link>
            </LoginLink>
          </form>
        </RegisterForm>
      </RegisterFormWrapper>
    </RegisterPageContainer>
  );
};

export default RegisterPage;
