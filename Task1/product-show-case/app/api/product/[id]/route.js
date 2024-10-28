import dbConnect from "@/lib/db";
import Product from "@/model/Product";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = await params;
  try {
    await dbConnect();
    const product = await Product.findById(id);
    if (!product) {
      return NextResponse.json(
        { message: "Product of that id not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(product);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error when fetching single product" },
      { status: 500 }
    );
  }
}
