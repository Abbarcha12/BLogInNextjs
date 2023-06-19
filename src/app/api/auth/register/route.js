import User from "@/models/User";
import DBconnect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST =async (req)=>{
    const{name,email,password} = await req.json()
    await DBconnect()

    const hashedPassword = await bcrypt.hash(password, 5);
    
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};

