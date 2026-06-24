import SignUpComponent from "@/components/SignUpComponent";


export const metadata = {
  title: "Alpha | Sign Up",
  description: "This is Sign Up Page",
};

const SignUpPage = () => {
  
  return (
    <div className="flex justify-center py-15 bg-gray-100">
      <SignUpComponent></SignUpComponent>
    </div>
  );
};

export default SignUpPage;
