import dbConnect from "@/lib/db";
import Categories from "@/model/Categories";
import { NextResponse } from "next/server";

export async function GET(req){
    try {
        await dbConnect();
        const categories =  await Categories.find()
        return NextResponse.json(categories);
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {message:"Error when fetching categories",error},
            {status:500}
        );
    }
    
}

export async function POST(req){
    const {name} = await req.json();
    await dbConnect();
    const categoires = new Categories({name})
    await categoires.save();
    return NextResponse.json(
        {message:"Created Category"},
        {status:201}
    );
}