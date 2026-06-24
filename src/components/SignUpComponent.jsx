"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const SignUpComponent = () => {
  const router = useRouter();

  const signIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    // console.log(userData)
    const { data, error } = await authClient.signUp.email({
      name: userData.name,
      email: userData.email,
      password: userData.password,
      image: userData.image,
    });
    console.log({ data, error });
    if (data) {
      router.push("/login");
    }
    if (error) {
      alert("Error Found");
    }
  };
  return (
    <div>
      <Form
        className="flex w-96 flex-col gap-4 text-black bg-white shadow-2xl px-5 pb-5 rounded-2xl"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold text-center text-black py-4">
          Create New Account
        </h1>
        <TextField isRequired name="name" type="text">
          <Label>User Name</Label>
          <Input
            className={"border border-black"}
            placeholder="Enter your name"
          />
        </TextField>
        <TextField isRequired name="image" type="url">
          <Label>Image URL</Label>
          <Input
            className={"border border-black"}
            placeholder="Provide an Image Link"
          />
        </TextField>
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
          <Label className="">Email</Label>
          <Input
            className={"border border-black"}
            placeholder="Enter your email"
          />
          <FieldError className={"text-red-600"} />
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
          <Label>Password</Label>
          <Input
            className={"border border-black"}
            placeholder="Enter your password"
          />
          <Description className="text-black">
            Must be at least 6 characters with 1 uppercase and 1 lowercase
          </Description>
          <FieldError className={"text-red-600"} />
        </TextField>
        <div className="flex justify-between items-center">
          <Button
            type="submit"
            className={"w-full bg-blue-500 rounded-xl text-lg font-semibold"}
          >
            Register
          </Button>
        </div>
        <div>
          <div className="flex items-center gap-1 my-3">
            <Separator className="flex-1" orientation="horizontal" />
            <span className="text-sm font-bold">OR</span>
            <Separator className="flex-1 " orientation="horizontal" />
          </div>
          <div className="flex justify-center">
            <Button
              className="w-55 text-center mt-2 bg-white border border-black"
              variant="tertiary"
              onClick={signIn}
            >
              <FcGoogle />
              Sign in with Google
            </Button>
          </div>
        </div>
        <p className="text-center mt-2">
          Do you have an account?{" "}
          <Link
            className="underline font-semibold text-lg text-blue-600"
            href={"/login"}
          >
            Login
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default SignUpComponent;
