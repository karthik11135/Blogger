
import Login from "@/components/Login";
import { loginType } from "@/validate/form-validate";


const logUser = async ({email, password}: loginType) =>{
  'use server'
  console.log({email, password});
}

export default function LoginPage() {

  return <div>
    <Login logUser={logUser}/>
  </div>;
}
