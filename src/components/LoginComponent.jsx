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
import { CgProfile } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";

const LoginComponent = () => {
  const router = useRouter();
  const signInWithGoogle = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
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
    <div className="bg-gray-100 px-4">
      <div className="flex justify-center py-20">
        <Form
          className="flex w-full md:w-96 relative flex-col gap-4 text-black bg-white shadow-2xl shadow-blue-600 px-4 py-10 md:p-10 rounded-2xl"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl z-12 font-bold text-center text-white py-4">
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
            <Label className="">Email</Label>
            <Input className={'border border-black'} placeholder="Enter your email" />
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
            <Input  className={'border border-black'} placeholder="Enter your password" />
            <Description className="text-black">
              Must be at least 6 characters with 1 uppercase and 1 lowercase
            </Description>
            <FieldError className={"text-red-600"} />
          </TextField>
          <div className="flex justify-between items-center">
            <Button
              type="submit"
              className={"w-35 bg-blue-500 rounded-xl text-lg font-semibold"}
            >
              Login
            </Button>
            <p className="font-semibold underline">Forget Password?</p>
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
              onClick={signInWithGoogle}
            >
              <FcGoogle />
              Sign in with Google
            </Button>
            </div>
          </div>
          <p className="text-center mt-2">Don't have an account?{" "}<Link className="underline font-semibold text-lg text-blue-600" href={"/signup"}>Register</Link></p>
        <div className="w-full md:w-96 h-26 z-5 rounded-t-2xl bg-blue-600 absolute top-0 left-0">
        </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginComponent;
