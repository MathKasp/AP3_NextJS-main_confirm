import { $Enums, PrismaClient, stocks, User } from "@prisma/client";
import JSONbig from 'json-bigint';

const prisma = new PrismaClient();

enum type {
  medicament,
  materiel
}


export interface SerializedStocks {
  id_stock: number;
  nom: string;
  description: string;
  quantite_disponible: number;
  type: type;
}

export async function GetAllStocks(): Promise<SerializedStocks[]> {
  try {
    const stocks = await prisma.stocks.findMany();
    const serializedStocks: SerializedStocks[] = JSON.parse(JSONbig.stringify(stocks));
    console.error("stocks", serializedStocks);
    return serializedStocks;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch stocks");
  }
}

export async function CreateStocks(data: {
  nom: string;
  description: string;
  type: $Enums.stock_type;
}): Promise<SerializedStocks | null> {
  try {
    const stock = await prisma.stocks.create({
      data: {
        nom: data.nom,
        description: data.description,
        quantite_disponible: parseInt("0", 10),
        type: data.type,
      },
    });
    const serializedStocks: SerializedStocks = JSON.parse(
      JSONbig.stringify(stock)
    );
    return serializedStocks;
  } catch (error) {
    console.error("Error creating commande:", error);
    throw new Error("Failed to create commande");
  }
}