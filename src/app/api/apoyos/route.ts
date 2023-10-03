import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const page_str = request.nextUrl.searchParams.get("page");
    const limit_str = request.nextUrl.searchParams.get("limit");

    let json_response = {
      status: "success",
      results: 'Aqui'
    };
    return NextResponse.json(json_response);
  }