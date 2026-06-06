import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const user = await prisma.user.findUnique({
      where: { email: body.email },
    });

    if (!user) {
      return Response.json({ success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(body.password, user.password);

    if (!isMatch) {
      return Response.json({ success: false, message: "Invalid password" });
    }

    // 🍪 SET COOKIE
    const response = Response.json({ success: true });

    response.headers.set(
      "Set-Cookie",
      `userId=${user.id}; Path=/; HttpOnly`
    );

    return response;
  } catch (error) {
    console.error(error);
    return Response.json({ success: false });
  }
}