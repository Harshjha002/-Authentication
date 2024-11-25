import { connectDB } from "@/db/dbConfig";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'

connectDB()


export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { username, password, email } = reqBody

        console.log(reqBody)

        //check if user exist
        const user = await User.findOne({ email })

        if (user) {
            return NextResponse.json({ error: "user already exists" }, { status: 400 })
        }

        //hashed password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new user({
            username,
            email,
            password: hashedPassword
        })

        const savedUser = await newUser.save()
        console.log(savedUser)

        return NextResponse.json({
            message: "user created successfully",
            success: true,
            savedUser
        }, { status: 201 })


    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })

    }
}