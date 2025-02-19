import { GetAllMouvements } from "@/services/mouvementService";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const mouvements = await GetAllMouvements();
    return NextResponse.json(mouvements, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch mouvements" }, { status: 500 });
  }
}