import { z } from 'zod'

export const registerSchema = z.object({
    username: z.string({
        required_error: "User is require",
    }),
    email: z.string({
        required_error: "Email is require"
    }).email({
        message : "Invalid email"
    }),
    password: z.string({
        required_error: "Password is require"
    }).min(6,{
        message: "Password must be at least 6 characters"
    }),
})

export const loginShema = z.object({
    email: z.string({
        required_error: "Email is require"
    }).email({
        message: "Invalid email"
    }),
    password: z.string({
        required_error: "Password is require"
    }).min(6, {
        message: "Password must be at least 6 characters"
    }),
})