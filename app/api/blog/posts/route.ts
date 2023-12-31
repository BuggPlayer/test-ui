import prisma from "@/prisma";
import { NextResponse } from "next/server";

export async function main() {
  try {
    await prisma.$connect();
  } catch (err) {
    return Error("Database Connection Unsuccessull");
  }
}

export const GET = async (req: Request, res: NextResponse) => {
  const { searchParams } = new URL(req.url);
  const cat = searchParams.get("cat");
  // console.log("catRouter", cat);

  // const query = {
  //   where: {
  //     cat,
  //   },
  // };
  try {
    await main();
    const posts = await prisma.post.findMany();
    return NextResponse.json({ message: "Success", posts }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

export const POST = async (req: Request, res: NextResponse) => {
  try {
    const body = await req.json();
    // console.log("body", body);

    await main();
    const post = await prisma.post.create({ data: { ...body } });

    return NextResponse.json({ message: "Success", post }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
