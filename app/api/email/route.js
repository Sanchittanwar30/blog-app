import { ConnectDB } from "@/lib/config/db";
import EmailModel from "@/lib/models/EmailModel";
import { NextResponse } from "next/server";

const LoadDB = async()=>{
  await ConnectDB();
}
LoadDB();
export async function POST(request){
  const formData = await request.formData();
  const EmailData= {
    email:`${formData.get('email')}`,

  }
  await EmailModel.create(EmailData);
  return NextResponse.json({success:true,msg:"Email Subscribed"})
}

export async function GET(request){
  const emails = await EmailModel.find({});
  return NextResponse.json({emails});
}

export async function DELETE(request){
  const id = await request.nextUrl.searchParams.get("id");
  await EmailModel.findByIdAndDelete(id);
  return NextResponse.json({success:true,msg:"Email deleted"})
}

