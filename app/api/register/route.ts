import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 🔐 HASH PASSWORD
    const hashedPassword = await bcrypt.hash(body.password, 10);

    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: hashedPassword, // ✅ STORE HASH
      },
    });

    return Response.json({ success: true, user });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false, error: "Something went wrong" });
  }
}