"use client";

import { loginType } from "@/validate/form-validate";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/validate/form-validate";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";


export default function Login({
  logUser,
}: {
  logUser: ({ email, password }: loginType) => void;
}) {

    const router = useRouter();

  const form = useForm<loginType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: loginType) {
    const loginData = loginSchema.parse(values);
    if (loginData) {
      logUser(loginData);
      router.push("/");
    } else {
      console.log("something went wrong");
    }
  }

  return (
    <div className="border-2  w-2/4 mx-auto p-5 rounded-md">
      <h2 className="font-bold text-3xl mb-3 ">Login</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your mail id" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display email adress.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Your passwords are secure"
                    {...field}
                  />
                </FormControl>
                <FormDescription>This is your password</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
