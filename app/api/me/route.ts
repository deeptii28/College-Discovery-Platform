import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  const cookie = req.headers.get("cookie");

  if (!cookie || !cookie.includes("userId")) {
    return Response.json({ success: false, message: "Not logged in" });
  }

  const userId = cookie.split("userId=")[1];

  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  return Response.json({ success: true, user });
}