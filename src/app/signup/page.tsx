import Signup from "@/components/Signup";
import { signupType } from "@/validate/form-validate";

const signupUser = async ({name, email, password}: signupType) => {
  'use server';
  console.log({name, email, password});
}

export default function SignupPage() {
  return (
    <>
     <Signup signupUser={signupUser}/>
    </>
  );
}
