import { z } from "zod";

export const signupSchema = z.object({
    name: z.string().min(3),
    email: z.string().email({message: "Enter proper email address"}).min(4),
    password: z.string().min(4, {message: "Password must be atleast 4 characters"}),
})

export const loginSchema = z.object({
    email: z.string().email({message: "Enter proper email adress"}),
    password: z.string().min(4),
})

export type loginType = z.infer<typeof loginSchema>
export type signupType = z.infer<typeof signupSchema>