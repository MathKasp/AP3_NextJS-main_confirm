import { GetAllStocks } from "@/services/stockService"; //import { CreateStocks, GetAllStocks } from "@/services/stockService";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const stocks = await GetAllStocks();
    return NextResponse.json(stocks, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch stocks" }, { status: 500 });
  }
}

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();

//     const newBooking = await CreateBooking({ 
//       startDate: body.startDate, 
//       endDate: body.endDate,
//       apartmentId: body.apartmentId,
//       userId: body.userId,
//     });

//     return NextResponse.json(newBooking, { status: 201 });
//   } catch (error) {
//     console.error("Error creating booking:", error);
//     return NextResponse.json({ error: "Failed to create booking" }, { status: 500 });
//   }
// }

