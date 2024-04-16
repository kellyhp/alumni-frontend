import { NextResponse } from "next/server";

export async function GET(){
    try{
        return NextResponse.redirect("http://ssodev.ucdavis.edu/cas");
    } catch (error) {
        console.error(error);
        return NextResponse.json({status: 500});
    }
}