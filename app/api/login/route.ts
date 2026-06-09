import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

// ✅ FIX: prevent multiple Prisma instances (important for Next.js)
const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

const prisma =
  globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // ✅ validate input (prevents crash)
    if (!body.email || !body.password) {
      return Response.json({
        success: false,
        message: "Missing email or password",
      });
    }

    const user = await prisma.user.findUnique({
      where: { email: body.email },
    });

    if (!user) {
      return Response.json({
        success: false,
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(
      body.password,
      user.password
    );

    if (!isMatch) {
      return Response.json({
        success: false,
        message: "Invalid password",
      });
    }

    // ✅ proper cookie response
    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Set-Cookie": `userId=${user.id}; Path=/; HttpOnly; SameSite=Strict`,
        },
      }
    );
  } catch (error) {
    console.error("LOGIN ERROR:", error);

    return new Response(
      JSON.stringify({ success: false }),
      { status: 500 }
    );
  }
}