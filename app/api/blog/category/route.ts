import { NextResponse } from "next/server";
import { main } from "../posts/route";
import prisma from "@/prisma";

export const GET = async (req: Request, res: NextResponse) => {
  try {
    await main();
    const categories = await prisma.category.findMany();
    return NextResponse.json({ message: "Success", categories }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
