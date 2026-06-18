"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    // console.log(userData)
    const { data, error } = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,
    });
    console.log({ data, error });
    if (data) {
      router.push("/");
    }
    if (error) {
      alert("Error Found");
    }
  };
  return (
    <div>
      <div className="flex justify-center my-15">
        <Form
          className="flex w-96 flex-col gap-4 bg-cyan-800 p-10 rounded-2xl"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl font-bold text-white text-center py-4">
            Login Your Account
          </h1>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-white">Email</Label>
            <Input placeholder="Enter your email" />
            <FieldError className={"text-amber-300"} />
          </TextField>
          <TextField
            isRequired
            minLength={6}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 6) {
                return "Password must be at least 6 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[a-z]/.test(value)) {
                return "Password must contain at least one Lowercase letter";
              }
              return null;
            }}
          >
            <Label className="text-white">Password</Label>
            <Input placeholder="Enter your password" />
            <Description className="text-gray-200">
              Must be at least 6 characters with 1 uppercase and 1 lowercase
            </Description>
            <FieldError className={"text-amber-300"} />
          </TextField>
          <div className="flex gap-2">
            <Button
              type="submit"
              className={"w-full bg-blue-600 text-lg font-semibold"}
            >
              Login
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
