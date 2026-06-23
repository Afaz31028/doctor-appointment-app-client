import SignUpComponent from "@/components/SignUpComponent";


export const metadata = {
  title: "Alpha | Sign Up",
  description: "This is Sign Up Page",
};

const SignUpPage = () => {
  
  return (
    <div className="flex justify-center my-15">
      <SignUpComponent></SignUpComponent>
    </div>
  );
};

export default SignUpPage;
