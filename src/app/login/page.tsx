"use client";
import { useState, FormEvent, ChangeEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import {
  Button,
  FormContainer,
  Input,
  Label,
  SectionInput,
} from "../components/Entrys/EditForm/styles";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/auth/login", {
        username,
        password,
      });
      localStorage.setItem("token", response.data.token);
      router.push("/entrys");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid credentials");
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleLogin}>
        <SectionInput>
          <Label>Username</Label>
          <Input
            type="text"
            value={username}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUsername(e.target.value)
            }
          />
        </SectionInput>
        <SectionInput>
          <Label>Password</Label>
          <Input
            type="password"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </SectionInput>
        <Button type="submit">Login</Button>
      </form>
    </FormContainer>
  );
};

export default Login;
