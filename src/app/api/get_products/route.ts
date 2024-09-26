import Product from "@/libs/models/Products"
import { connectMonogoDB } from "@/libs/MongoConnect"
import { NextResponse } from "next/server"

export async function GET() {
    try{
        await connectMonogoDB()
        const data = await Product.find()
        return NextResponse.json(data);
    
    }catch(error){
        return NextResponse.json({
            error,
            mag: "Something Went Wrong"
        }, {status: 400});
    }
}