import dbConnect from "@/lib/db";
import Product from "@/model/Product";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();
    const products = await Product.find();
    return NextResponse.json(products);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error when fetching products",error },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  const { name, rating, category, price, images, description } =
    await req.json();
  try {
    await dbConnect();
    const product = new Product({
      name,
      rating,
      category,
      price,
      images,
      description,
    });
    await product.save();
    return NextResponse.json({ message: "Inserted Product" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error when creating products",error },
      { status: 500 }
    );
  }
}
